import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { ReleaseInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor(private http: HttpClient) { }

  api: string = `${BACKEND_URL}/releases`;

  getReleases(): Observable<{ success: boolean; message: string; data: ReleaseInterface[] }> {
    return this.http.get<{ success: boolean; message: string; data: ReleaseInterface[] }>(this.api);
  }

  createReleases(
    payload: ReleaseInterface
  ): Observable<{ success: boolean; message: string; data: ReleaseInterface }> {
    return this.http.post<{
      success: boolean;
      message: string;
      data: ReleaseInterface;
    }>(this.api, payload);
  }

  updateReleases(
    id: number,
    payload: ReleaseInterface
  ): Observable<{ success: boolean; message: string; data: ReleaseInterface }> {
    return this.http.put<{
      success: boolean;
      message: string;
      data: ReleaseInterface;
    }>(`${this.api}/${id}`, payload);
  }

  deleteReleases(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.api}/${id}`
    );
  }
}
