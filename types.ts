
export type ContentStage = 'Idea' | 'Outline' | 'Writing' | 'Design' | 'Film' | 'Edit' | 'Publish';

export interface ContentPiece {
  id: string;
  title: string;
  description: string;
  stage: ContentStage;
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'Twitter' | 'LinkedIn' | 'Newsletter';
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  userId: string;
}

export interface DailyMetric {
  id: string;
  date: string;
  views: number;
  subscribers: number;
  revenue: number;
  userId: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
}

export interface Task {
  id: string;
  title: string;
  category: 'Content' | 'Marketing' | 'Dev' | 'Design' | 'Planning' | 'Research' | 'Meeting' | 'Other';
  date: string;
  completed: boolean;
}

export interface DailyReport {
  id: string;
  date: string;
  bigGoal: string;
  rating: number;
  accomplished: string[];
  learnings: string;
  blockers: string;
}

export interface YouTubeAnalysis {
  id: string;
  videoUrl: string;
  insights: string;
  expertAnalysis: string;
  timestamp: string;
}

export interface LinkedInIdea {
  id: string;
  title: string;
  strategy: string;
  posts: { hook: string; body: string }[];
  date: string;
}
