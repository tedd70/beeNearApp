import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface
import { LuggagePickUpInterface } from '../business/interface/luggagePickUp.interface';

@Injectable({
  providedIn: 'root'
})

export class LuggagePickUpService {

  constructor(private http: HttpClient) {}

  public getLuggage(accessCode): Observable<LuggagePickUpInterface> {
    return this.http.get<LuggagePickUpInterface>(`https://localhost:44378/luggage/GetLuggage?accessCode=${accessCode}`);
  }
}