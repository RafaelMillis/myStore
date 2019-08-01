import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons;
  constructor(private personsService: CartService) {
    this.getPersons();
  }

  ngOnInit() {
  }

  getPersons()
  {
    this.persons =  this.personsService.getPersons();
  }
}
