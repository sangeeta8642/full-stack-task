import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../utils/constants';
import { map, Observable } from 'rxjs';
import { UserInterface } from '../utils/types';
import { Store } from '@ngrx/store';
import { getAllUsers } from '../dashboards/users/store/users.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store

  ) { }


  createStaggedUser(user: UserInterface): Observable<{ message: string, data: UserInterface, sucess: boolean }> {
    return this.http.post<{ message: string, data: UserInterface, sucess: boolean }>(`${BACKEND_URL}/users`, user)
  }


  checkEmail(email: string): Observable<{ status?: string, error?: string }> {
    return this.http.post<{ status: string, error?: string }>(`${BACKEND_URL}/auth/check-email`, { email })
  }

  loginFirstTime(payload: { email: string, defaultPassword: string, newPassword: string }): Observable<{ message: string, user: UserInterface, token: string }> {
    return this.http.post<{ message: string, user: UserInterface, token: string }>(`${BACKEND_URL}/auth/first-time-login`, payload)
  }

  login(payload: { email: string, password: string }): Observable<{ message: string, success: boolean, token: string, user: UserInterface }> {
    return this.http.post<{ message: string, success: boolean, token: string, user: UserInterface }>(`${BACKEND_URL}/auth/login`, payload)
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token")
  }

  clearToken() {
    localStorage.removeItem("token")
  }

  setUser(user: UserInterface) {
    localStorage.setItem("user", JSON.stringify(user))
  }

  getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }

  clearUser() {
    localStorage.removeItem("user")
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(getAllUsers)
      .pipe(map(res => res.user !== null))
  }

}
