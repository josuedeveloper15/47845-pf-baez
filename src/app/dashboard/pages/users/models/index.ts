export type UserRole = 'ADMIN' | 'EMPLOYEE' | 'STUDENT';
export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  token: string;
  role: UserRole;
  password: string;
}
