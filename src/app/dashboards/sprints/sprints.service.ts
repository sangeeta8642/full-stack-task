import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { EpicsInterface, SprintsInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {

  constructor(private http: HttpClient) { }

  getSprints(): Observable<SprintsInterface[]> {
    return this.http.get<SprintsInterface[]>(`${BACKEND_URL}/sprints`)
  }

  createSprint(payload: SprintsInterface): Observable<{ success: boolean, message: string, data: SprintsInterface }> {
    return this.http.post<{ success: boolean, message: string, data: SprintsInterface }>(`${BACKEND_URL}/sprints`, payload)
  }

  updateSprint(id: number, payload: SprintsInterface): Observable<{ success: boolean, message: string, data: SprintsInterface }> {
    return this.http.put<{ success: boolean, message: string, data: SprintsInterface }>(`${BACKEND_URL}/sprints/${id}`, payload)
  }

  deleteSprint(id: number): Observable<{ success: boolean, message: string }> {
    return this.http.delete<{ success: boolean, message: string }>(`${BACKEND_URL}/sprints/${id}`)
  }

  getCurrentSprint(id: number): Observable<{ success: boolean, message: string, data: EpicsInterface[] }> {
    return this.http.get<{ success: boolean, message: string, data: EpicsInterface[] }>(`${BACKEND_URL}/sprints/${id}/epics-with-stories`)
  }

  updateStoryStatus(storyId: number, status: string) {
  return this.http.patch(`${BACKEND_URL}/story/stories/${storyId}/status`, { status });
}
}
