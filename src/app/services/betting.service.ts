import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BettingService {
  private apiUrl = 'https://api.the-odds-api.com/v4/sports/'; // API endpoint (use your provider's URL)
  private apiKey = 'a82642602652d2c5fb862f47cdba9c98'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  // get in season sports
  getSports(): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&region=us`; // Modify based on API parameters
    return this.http.get<any>(url);
  }

  // Method to get odds data
  getOdds(): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&region=us`; // Modify based on API parameters
    return this.http.get<any>(url);
  }
}
