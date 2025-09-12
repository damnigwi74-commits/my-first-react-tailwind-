// src/services/apiService.ts
import type { AxiosResponse, AxiosInstance } from "axios";
import axios from "axios";
class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public getAll<T>(resource: string, params?: Record<string, any>): Promise<AxiosResponse<T[]>> {
    return this.apiClient.get<T[]>(`/${resource}`, { params });
  }

  public getOne<T>(resource: string, id: number | string): Promise<AxiosResponse<T>> {
    return this.apiClient.get<T>(`/${resource}/${id}`);
  }

  public create<T>(resource: string, data: Partial<T>): Promise<AxiosResponse<T>> {
    return this.apiClient.post<T>(`/${resource}`, data);
  }

  public update<T>(resource: string, id: number | string, data: Partial<T>): Promise<AxiosResponse<T>> {
    return this.apiClient.put<T>(`/${resource}/${id}`, data);
  }

  public patch<T>(resource: string, id: number | string, data: Partial<T>): Promise<AxiosResponse<T>> {
    return this.apiClient.patch<T>(`/${resource}/${id}`, data);
  }

  public delete<T>(resource: string, id: number | string): Promise<AxiosResponse<T>> {
    return this.apiClient.delete<T>(`/${resource}/${id}`);
  }
}

// 👉 Initialize with JSONPlaceholder base URL
const apiService = new ApiService("https://jsonplaceholder.typicode.com");

export default apiService;
