// src/app/models/api-response.interface.ts
export interface ApiResponse<T> {
  message: string;
  result: boolean;
  data: T;
}
