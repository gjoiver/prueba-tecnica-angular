import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { Customer } from './components/customer/customer';
import { CustomerService } from './services/customer-service';


@NgModule({
  declarations: [Home, Customer],
  imports: [
    CommonModule,
  ],
  exports: [Home],
  providers: [CustomerService]
})
export class CustomersModule { }
