import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApisService {

  constructor(private http: HttpClient) { }

  // get character api data
  getcharacterapi(page: number) {
    const chApiUrl = 'https://rickandmortyapi.com/api/character/?page='+page;
    return this.http.get(chApiUrl);
  }
}
