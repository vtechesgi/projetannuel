export interface ResultLog {
  message?: string;
  success?: boolean;
  token?: string;
  user?: {
    email?: string,
    name?: string,
    level?: number,
    _id?: number
  };
}
