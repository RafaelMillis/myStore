import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
persons;
items = [];
constructor( private http: HttpClient) { }

addToCart(product)
{
  this.items.push(product);
}

getItems()
{
  return this.items;
}

clearCart()
{
  this.items = [];
  return this.items;
}

getShippingPrices(){
  return this.http.get('/assets/shipping.json');
}

getPersons()
{
  return this.http.get('http://localhost:5000/api/person');
  // this.http.get('http://localhost:5000/api/person').subscribe( data =>
  //   this.persons = data
  //   );
  //   return this.persons;
}

}

export interface Person {
  PersonId: number;
  Name: string;
}
