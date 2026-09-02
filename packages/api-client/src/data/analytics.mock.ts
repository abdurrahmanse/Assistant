import type { SystemMetrics } from '../types/analytics';

export const mockSystemMetrics: SystemMetrics = {
  activeStudents: 14250,
  activeStudentsDelta: 12.5,
  pipelineExecutions: 8432,
  pipelineExecutionsDelta: 5.2,
  modelTrainingUptime: 99.99,
  systemLoad: 42,
  enrollmentTrends: [
    { month: 'Jan', students: 8000 },
    { month: 'Feb', students: 9500 },
    { month: 'Mar', students: 10200 },
    { month: 'Apr', students: 11000 },
    { month: 'May', students: 12500 },
    { month: 'Jun', students: 13800 },
    { month: 'Jul', students: 14250 }
  ]
};
