import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { SubtaskInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root',
})
export class SubtaskService {
  constructor(private http: HttpClient) {}

  api: string = `${BACKEND_URL}/subtasks`;

  getSubtasks(): Observable<{
    success: boolean;
    message: string;
    data: SubtaskInterface[];
  }> {
    return this.http.get<{
      success: boolean;
      message: string;
      data: SubtaskInterface[];
    }>(this.api);
  }

  getSubtasksByStory(storyId?: number): Observable<{
    success: boolean;
    message: string;
    data: SubtaskInterface[];
  }> {
    return this.http.get<{
      success: boolean;
      message: string;
      data: SubtaskInterface[];
    }>(`${this.api}/story/${storyId}`);
  }

  getSubtask(id: number): Observable<{
    success: boolean;
    message: string;
    data: SubtaskInterface;
  }> {
    return this.http.get<{
      success: boolean;
      message: string;
      data: SubtaskInterface;
    }>(`${this.api}/${id}`);
  }

  createSubtask(
    payload: SubtaskInterface
  ): Observable<{ success: boolean; message: string; data: SubtaskInterface }> {
    return this.http.post<{
      success: boolean;
      message: string;
      data: SubtaskInterface;
    }>(this.api, payload);
  }

  updateSubtask(
    id: number,
    payload: SubtaskInterface
  ): Observable<{ success: boolean; message: string; data: SubtaskInterface }> {
    return this.http.put<{
      success: boolean;
      message: string;
      data: SubtaskInterface;
    }>(`${this.api}/${id}`, payload);
  }

  deleteSubtask(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.api}/${id}`
    );
  }
}
