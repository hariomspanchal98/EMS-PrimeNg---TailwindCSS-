import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http: HttpClient) { }

  private CountryApiUrl = 'https://restcountries.com/v3.1/all?fields=name';
  private apiKey = 'API_KEY'; // Replace with your actual key

  getCountries(): Observable<any> {
    return this.http.get(this.CountryApiUrl);
  }
}
