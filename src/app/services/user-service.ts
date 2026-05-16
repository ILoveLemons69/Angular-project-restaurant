import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  public register(data: IRegister): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/auth/register`, data, {
      headers: {
        'Conetent-Type': 'application/json',
        'X-API-KEY': environment.api_key,
      },
    });
  }

  public login(data: ILogin): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/auth/login`, data, {
      headers: {
        'Conetent-Type': 'application/json',
        'X-API-KEY': environment.api_key,
      },
    });
  }

  public storeJWTToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getJWTToken() {
    localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
