
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Plus, MoreVertical, Calendar, MessageSquare, Flame, Filter, Search } from 'lucide-react';
import { ContentPiece, ContentStage } from '../types';

const STAGES: ContentStage[] = ['Idea', 'Outline', 'Writing', 'Design', 'Film', 'Edit', 'Publish'];

const INITIAL_PIECES: ContentPiece[] = [
  { id: '1', title: '10 Productivity Hacks for Devs', description: 'Exploring VS Code shortcuts and AI tools.', stage: 'Idea', platform: 'YouTube', dueDate: '2024-06-15', priority: 'High', userId: '1' },
  { id: '2', title: 'My 2024 Desk Setup', description: 'Cinematic shots of my minimalist workspace.', stage: 'Film', platform: 'TikTok', dueDate: '2024-06-10', priority: 'Medium', userId: '1' },
  { id: '3', title: 'Gemini API vs OpenAI', description: 'Deep dive into performance and pricing.', stage: 'Writing', platform: 'Newsletter', dueDate: '2024-06-12', priority: 'High', userId: '1' },
  { id: '4', title: 'React Server Components Explained', description: 'Simplifying the transition for beginners.', stage: 'Outline', platform: 'Twitter', dueDate: '2024-06-14', priority: 'Low', userId: '1' },
  { id: '5', title: 'A Day in the Life of a Creator', description: 'Vlog style content showing the behind-the-scenes.', stage: 'Edit', platform: 'Instagram', dueDate: '2024-06-11', priority: 'Medium', userId: '1' },
];

const CommandCenter: React.FC = () => {
  const [pieces, setPieces] = useState<ContentPiece[]>(() => {
    const saved = localStorage.getItem('infinitum_content');
    return saved ? JSON.parse(saved) : INITIAL_PIECES;
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('infinitum_content', JSON.stringify(pieces));
  }, [pieces]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    // Explicitly type newPieces and findIndex parameter to fix 'unknown' type errors
    const newPieces: ContentPiece[] = Array.from(pieces);
    const pieceIndex = newPieces.findIndex((p: ContentPiece) => p.id === draggableId);
    if (pieceIndex === -1) return;

    newPieces[pieceIndex].stage = destination.droppableId as ContentStage;
    setPieces(newPieces);
  };

  const getStageColor = (stage: ContentStage) => {
    switch (stage) {
      case 'Idea': return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      case 'Outline': return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'Writing': return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      case 'Design': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Film': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Edit': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Publish': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const filteredPieces = pieces.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Command Center</h2>
          <p className="text-slate-400 mt-1">Manage your content pipeline from inception to publication.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search content..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all">
            <Plus size={18} />
            New Piece
          </button>
        </div>
      </header>

      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 min-w-max">
            {STAGES.map((stage) => (
              <div key={stage} className="w-80 flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-md border ${getStageColor(stage)}`}>
                      {stage}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {filteredPieces.filter(p => p.stage === stage).length}
                    </span>
                  </div>
                  <button className="p-1 hover:bg-slate-800 rounded-md text-slate-500">
                    <MoreVertical size={16} />
                  </button>
                </div>

                <Droppable droppableId={stage}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`flex-1 min-h-[500px] rounded-2xl transition-colors p-2 space-y-3 ${snapshot.isDraggingOver ? 'bg-indigo-500/5' : 'bg-transparent'}`}
                    >
                      {filteredPieces.filter(p => p.stage === stage).map((piece, index) => (
                        <Draggable key={piece.id} draggableId={piece.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`glass p-4 rounded-xl border border-slate-800/50 group hover:border-indigo-500/50 transition-all duration-200 ${snapshot.isDragging ? 'shadow-2xl shadow-indigo-500/20 rotate-2' : ''}`}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                                  piece.platform === 'YouTube' ? 'bg-rose-500/20 text-rose-400' :
                                  piece.platform === 'TikTok' ? 'bg-emerald-500/20 text-emerald-400' :
                                  piece.platform === 'Instagram' ? 'bg-fuchsia-500/20 text-fuchsia-400' :
                                  'bg-sky-500/20 text-sky-400'
                                }`}>
                                  {piece.platform}
                                </span>
                                {piece.priority === 'High' && (
                                  <Flame size={14} className="text-amber-500 animate-pulse" />
                                )}
                              </div>
                              <h4 className="text-slate-100 font-bold mb-1 leading-snug group-hover:text-indigo-400 transition-colors">{piece.title}</h4>
                              <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">{piece.description}</p>
                              
                              <div className="flex items-center justify-between pt-3 border-t border-slate-800/50">
                                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                                  <Calendar size={12} />
                                  {piece.dueDate}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                                  <MessageSquare size={12} />
                                  3
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      <button className="w-full py-3 flex items-center justify-center gap-2 border-2 border-dashed border-slate-800 hover:border-indigo-500/30 hover:bg-indigo-500/5 rounded-xl text-slate-500 hover:text-indigo-400 transition-all group">
                        <Plus size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-wider">Quick Add</span>
                      </button>
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default CommandCenter;
