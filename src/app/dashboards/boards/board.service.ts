import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from 'src/app/utils/constants';
import { BoardsInterface } from 'src/app/utils/types';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardsInterface[]> {
    return this.http.get<BoardsInterface[]>(`${BACKEND_URL}/boards`)
  }

  createBoards(payload: BoardsInterface): Observable<{ success: boolean, message: string, data: BoardsInterface }> {
    return this.http.post<{ success: boolean, message: string, data: BoardsInterface }>(`${BACKEND_URL}/boards`, payload)
  }

  updateBoards(id: number, payload: BoardsInterface): Observable<{ success: boolean, message: string, data: BoardsInterface }> {
    return this.http.put<{ success: boolean, message: string, data: BoardsInterface }>(`${BACKEND_URL}/boards/${id}`, payload)
  }

  deleteBoards(id: number): Observable<{ success: boolean, message: string }> {
    return this.http.delete<{ success: boolean, message: string }>(`${BACKEND_URL}/boards/${id}`)
  }
}
