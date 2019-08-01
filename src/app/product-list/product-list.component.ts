import { Component, OnInit } from '@angular/core';
import { products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

  share(name){
    window.alert("The product has been shared " + name);
  }

  onNotify(){
    window.alert("You will be notified when the product the product go on sale ");
  }
}
