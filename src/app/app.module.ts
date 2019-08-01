import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PersonListComponent } from './person-list/person-list.component';

import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core'; 
import { PersonListTestComponent } from './person-list-test/person-list-test.component';
import { PersonDetailsTestComponent } from './person-details-test/person-details-test.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      FooterContentComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent,
      PersonListComponent,
      FilterPipe,
      PersonListTestComponent,
      PersonDetailsTestComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent },
         { path: 'shipping', component: ShippingComponent },
         { path: 'persons', component: PersonListComponent},
         { path: 'personstest', component: PersonListTestComponent},
         { path: 'personstest/:personId', component: PersonDetailsTestComponent}
       ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
