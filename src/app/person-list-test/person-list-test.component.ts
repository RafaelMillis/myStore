import { Component, OnInit } from '@angular/core';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-person-list-test',
  templateUrl: './person-list-test.component.html',
  styleUrls: ['./person-list-test.component.css']
})
export class PersonListTestComponent implements OnInit {

  persons;
  constructor( private personService: PersonService ) {
    this.persons = personService.getPersons();
  }

  ngOnInit() {
  }

}
