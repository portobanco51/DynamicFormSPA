export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address1?: string;
  city?: string;
  state?: string;
  zip?: number;
  phone: string;
  jobTitle: string;
  reason: string;
  submitted: boolean;
}

export interface FieldObject {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  options?: string[];
}

export type Field = FieldObject | FieldObject[];

export type RootState = ReturnType<typeof store.getState>;
