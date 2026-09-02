import type { ContentAsset } from '../types/content';

export const mockContentAssets: ContentAsset[] = [
  {
    id: 'cnt_001',
    title: 'Backpropagation Explained',
    courseId: 'crs_001',
    type: 'Video',
    durationMinutes: 14,
    status: 'Published',
    lastUpdated: '2026-08-15T09:00:00Z',
    createdAt: '2025-01-10T08:00:00Z'
  },
  {
    id: 'cnt_002',
    title: 'Optimizing CTEs in BigQuery',
    courseId: 'crs_002',
    type: 'Video',
    durationMinutes: 22,
    status: 'Published',
    lastUpdated: '2026-09-01T14:30:00Z',
    createdAt: '2025-06-22T10:00:00Z'
  },
  {
    id: 'cnt_003',
    title: 'Pandas DataFrame Grouping Quiz',
    courseId: 'crs_004',
    type: 'Assignment',
    durationMinutes: 30,
    status: 'Published',
    lastUpdated: '2026-05-10T16:20:00Z',
    createdAt: '2024-11-05T08:30:00Z'
  },
  {
    id: 'cnt_004',
    title: 'Setting up Airflow DAGs',
    courseId: 'crs_003',
    type: 'Reading',
    durationMinutes: 15,
    status: 'Draft',
    lastUpdated: '2026-09-02T11:15:00Z',
    createdAt: '2026-08-01T09:00:00Z'
  },
  {
    id: 'cnt_005',
    title: 'Attention Mechanism Visualization',
    courseId: 'crs_005',
    type: 'Video',
    durationMinutes: 45,
    status: 'Archived',
    lastUpdated: '2025-12-01T10:00:00Z',
    createdAt: '2025-02-15T09:45:00Z'
  }
];
