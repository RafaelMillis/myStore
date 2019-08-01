import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

constructor( private http: HttpClient  ) { }

getPersons()
{
  return this.http.get('http://localhost:5000/api/person');
}

}
