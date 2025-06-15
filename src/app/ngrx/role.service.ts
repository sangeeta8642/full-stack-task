import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { RoleInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<RoleInterface[]> {
    return this.http.get<RoleInterface[]>(`${BACKEND_URL}/role`)
  }

  createRole(payload: RoleInterface): Observable<{ success: boolean, message: string, data: RoleInterface }> {
    return this.http.post<{ success: boolean, message: string, data: RoleInterface }>(`${BACKEND_URL}/boards`, payload)
  }

  updateRole(id: number, payload: RoleInterface): Observable<{ success: boolean, message: string, data: RoleInterface }> {
    return this.http.put<{ success: boolean, message: string, data: RoleInterface }>(`${BACKEND_URL}/boards/${id}`, payload)
  }

  deleteRole(id: number): Observable<{ success: boolean, message: string }> {
    return this.http.delete<{ success: boolean, message: string }>(`${BACKEND_URL}/boards/${id}`)
  }
}
