export interface JwtResponse {
  user: {
    id?: number;
    name?: string;
    email?: string;
    level?: number;
    access_token?: string,
    expires_in?: number
  };
}
