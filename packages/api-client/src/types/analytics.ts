export interface EnrollmentTrend {
  month: string;
  students: number;
}

export interface SystemMetrics {
  activeStudents: number;
  activeStudentsDelta: number;
  pipelineExecutions: number;
  pipelineExecutionsDelta: number;
  modelTrainingUptime: number;
  systemLoad: number;
  enrollmentTrends: EnrollmentTrend[];
}
