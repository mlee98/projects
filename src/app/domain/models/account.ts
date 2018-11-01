import { Phone } from './phone';

export class Account {
  id?: number;
  name?: string;
  email?: string;
  isEmployee?: boolean;
  departmentId?: number;
  phoneNumbers: Phone[];
}
