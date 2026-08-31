export type EmployeeRole = 'Market' | 'Finance' | 'Development';

export interface Employee {
  id: number;
  name: string;
  age: number;
  joinDate: string;
  role: EmployeeRole;
  isFullTime: boolean;
}
