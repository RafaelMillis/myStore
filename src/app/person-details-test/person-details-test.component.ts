import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products} from '../products';

@Component({
  selector: 'app-person-details-test',
  templateUrl: './person-details-test.component.html',
  styleUrls: ['./person-details-test.component.css']
})
export class PersonDetailsTestComponent implements OnInit {
  product;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('personId')];
    });
  }

}
