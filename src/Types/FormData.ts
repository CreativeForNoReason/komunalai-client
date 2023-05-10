// FormData.ts
export type FormData = {
  name: string;
  date: string;
  type: string;
  commune: string;
  before: number;
  after: number;
  difference: number;
  price: number;
  calculated: number;
  additionalTax: number;
  sum: number;
  paymentDate: string;
  comment: string;
};

export const initialFormData: FormData = {
  name: '',
  date: '',
  type: '',
  commune: '',
  before: 0,
  after: 0,
  difference: 0,
  price: 0.00,
  calculated: 0.00,
  additionalTax: 0.00,
  sum: 0.00,
  paymentDate: '',
  comment: '',
};