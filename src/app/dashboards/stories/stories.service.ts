import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { StoriesInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  api: string = `${BACKEND_URL}/story`;

  getStories(): Observable<StoriesInterface[]> {
    return this.http.get<StoriesInterface[]>(this.api);
  }

  getStory(id: number): Observable<StoriesInterface> {
    return this.http.get<StoriesInterface>(`${this.api}/${id}`);
  }

  createStory(
    payload: StoriesInterface
  ): Observable<{ success: boolean; message: string; data: StoriesInterface }> {
    return this.http.post<{
      success: boolean;
      message: string;
      data: StoriesInterface;
    }>(this.api, payload);
  }

  updateStory(
    id: number,
    payload: StoriesInterface
  ): Observable<{ success: boolean; message: string; data: StoriesInterface }> {
    return this.http.put<{
      success: boolean;
      message: string;
      data: StoriesInterface;
    }>(`${this.api}/${id}`, payload);
  }

  deleteStory(id: number): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.api}/${id}`
    );
  }
}
