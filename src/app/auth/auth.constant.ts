export const DEPARTMENTS = [
{ name: 'HR', code: 'HR' },
{ name: 'IT', code: 'IT' },
{ name: 'Finance', code: 'FN' },
{ name: 'Marketing', code: 'MK' },
{ name: 'Sales', code: 'SL' },
{ name: 'Operations', code: 'OP' },
{ name: 'Customer Services', code: 'CS' },
];

export interface user {
  name: string;
  email: string;
  department: string;
  password: string;
  country: string;
  role: string;
  username: string
}
