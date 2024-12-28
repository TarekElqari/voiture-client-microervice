import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CarResponse {
  id: number;
  brand: string;
  model: string;
  matricule: string;
  client: Client;
}
export interface Client {
  id: number;
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8888/SERVICE-CAR/api/car';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarResponse[]> {
    return this.http.get<CarResponse[]>(this.apiUrl);
  }

  getCarById(id: number): Observable<CarResponse> {
    return this.http.get<CarResponse>(`${this.apiUrl}/${id}`);
  }
}
