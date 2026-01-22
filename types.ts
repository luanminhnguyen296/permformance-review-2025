
export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  type: 'cover' | 'standard' | 'chart' | 'ecosystem' | 'comparison' | 'roadmap' | 'grid' | 'hub-spoke';
  percentage?: string;
  metadata?: any;
}

export interface ContributionData {
  name: string;
  value: number;
  color: string;
}
