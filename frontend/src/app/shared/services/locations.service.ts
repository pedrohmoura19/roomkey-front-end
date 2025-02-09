import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private apiUrl = 'http://localhost:3000';

  getLocations(): Observable<any> {
    const URL = `${this.apiUrl}/api/locations`
    return this.httpClient.get(URL);
  }

  getLocation(locationId: String): Observable<any> {
    const URL = `${this.apiUrl}/api/locations/${locationId}`
    return this.httpClient.get(URL);
  }
}
