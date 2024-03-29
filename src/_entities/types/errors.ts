import { ClientRequest } from 'http';

export interface CustomError {
  code: string;
  config: any;
  request: ClientRequest;
  response: {
    data: { message: string };
    status: number;
    statusText: string;
  };
}

export interface FormattedError {
  error: { message: string; status: number; statusText?: string };
}
