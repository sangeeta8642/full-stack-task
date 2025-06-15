import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { EpicsInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root',
})
export class EpicsService {
  constructor(private http: HttpClient) {}

  api: string = `${BACKEND_URL}/epic`;

  getEpics(): Observable<EpicsInterface[]> {
    return this.http.get<EpicsInterface[]>(this.api);
  }

  createEpics(
    payload: EpicsInterface
  ): Observable<{ success: boolean; message: string; data: EpicsInterface }> {
    return this.http.post<{
      success: boolean;
      message: string;
      data: EpicsInterface;
    }>(this.api, payload);
  }

  updateEpics(
    id: number,
    payload: EpicsInterface
  ): Observable<{ success: boolean; message: string; data: EpicsInterface }> {
    return this.http.put<{
      success: boolean;
      message: string;
      data: EpicsInterface;
    }>(`${this.api}/${id}`, payload);
  }

  deleteEpics(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.api}/${id}`
    );
  }
}
