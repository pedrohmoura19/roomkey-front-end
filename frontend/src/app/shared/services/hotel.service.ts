import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }

  getHotels(checkIn: string, checkOut:string): Observable<any> {
    const URL = `/api/locations/:locationId/hotels?checkin=${checkIn}&checkout=${checkOut}`;
    return this.httpClient.get(URL);
  }

  getHotel(checkIn: string, checkOut:string, hotelId: string): Observable<any> {
    const URL = `/api/locations/:locationId/hotels/${hotelId}?checkin=${checkIn}&checkout=${checkOut}`;
    return this.httpClient.get(URL);
  }
}
