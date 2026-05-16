import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

export interface IResponse {
  data: {
    hasMore: boolean;
    products: IProduct[];
  };
}

export interface IProduct {
  canDelete: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rate: number;
  spiciness: number;
  vegeterian: number;
}

@Injectable({
  providedIn: 'root',
})
export class RestaurntService {
  private http = inject(HttpClient);

  public getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.baseUrl}/products`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': environment.api_key,
      },
    });
  }
}
