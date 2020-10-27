import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface
import { LuggageStoreInterface } from '../business/interfaces/luggageStore.interface';

@Injectable({
  providedIn: 'root'
})

export class LuggageStoreService {

  constructor(private http: HttpClient) {}

  public getCurrentLuggageCount() : Observable<any> {
    return this.http.get('https://localhost:44378/luggage/LuggageCount');
  }
  public saveNewLuggage(luggage): Observable<LuggageStoreInterface> {
    return this.http.post<LuggageStoreInterface>('https://localhost:44378/Luggage', luggage);
  }
}