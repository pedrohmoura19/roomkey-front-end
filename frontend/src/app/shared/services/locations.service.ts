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

  getLocations(): Observable<any> {
    const URL = `/api/locations`
    return this.httpClient.get(URL);
  }

  getLocation(locationId: String): Observable<any> {
    const URL = `/api/locations/${locationId}`
    return this.httpClient.get(URL);
  }
}
