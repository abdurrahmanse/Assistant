export type ContentType = 'Video' | 'Assignment' | 'Reading';
export type ContentStatus = 'Draft' | 'Published' | 'Archived';

export interface ContentAsset {
  id: string;
  title: string;
  courseId: string;
  type: ContentType;
  durationMinutes: number;
  status: ContentStatus;
  lastUpdated: string;
  createdAt: string;
}
