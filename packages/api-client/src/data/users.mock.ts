import type { User } from '../types/user';

export const mockUsers: User[] = [
  {
    id: 'usr_001',
    firstName: 'Elena',
    lastName: 'Rostova',
    email: 'elena.r@example.com',
    role: 'Student',
    status: 'Active',
    lastLogin: '2026-09-02T10:23:00Z',
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'usr_002',
    firstName: 'Marcus',
    lastName: 'Chen',
    email: 'm.chen@example.com',
    role: 'Instructor',
    status: 'Active',
    lastLogin: '2026-09-02T09:12:00Z',
    createdAt: '2025-11-20T14:30:00Z'
  },
  {
    id: 'usr_003',
    firstName: 'Sarah',
    lastName: 'Jenkins',
    email: 's.jenkins@example.com',
    role: 'Student',
    status: 'Active',
    lastLogin: '2026-09-01T16:45:00Z',
    createdAt: '2026-02-10T11:20:00Z'
  },
  {
    id: 'usr_004',
    firstName: 'David',
    lastName: 'Kim',
    email: 'dkim@example.com',
    role: 'Student',
    status: 'Suspended',
    lastLogin: '2026-08-15T09:00:00Z',
    createdAt: '2026-01-18T10:15:00Z'
  },
  {
    id: 'usr_005',
    firstName: 'Anita',
    lastName: 'Desai',
    email: 'adesai@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2026-09-02T12:05:00Z',
    createdAt: '2025-10-05T09:00:00Z'
  },
  {
    id: 'usr_006',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'j.wilson@example.com',
    role: 'Student',
    status: 'Invited',
    lastLogin: '',
    createdAt: '2026-09-01T14:20:00Z'
  },
  {
    id: 'usr_007',
    firstName: 'Sofia',
    lastName: 'Martinez',
    email: 'smartinez@example.com',
    role: 'Student',
    status: 'Active',
    lastLogin: '2026-09-02T08:30:00Z',
    createdAt: '2026-03-22T13:45:00Z'
  },
  {
    id: 'usr_008',
    firstName: 'Lucas',
    lastName: 'Silva',
    email: 'lsilva@example.com',
    role: 'Instructor',
    status: 'Active',
    lastLogin: '2026-09-01T11:10:00Z',
    createdAt: '2025-12-01T10:00:00Z'
  }
];
