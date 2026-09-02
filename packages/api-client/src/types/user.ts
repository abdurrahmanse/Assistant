export type UserRole = 'Student' | 'Instructor' | 'Admin';
export type UserStatus = 'Active' | 'Suspended' | 'Invited';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastLogin: string;
  createdAt: string;
}
