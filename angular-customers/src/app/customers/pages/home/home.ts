import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import { CustomerResponseEntity } from '../../entities/customer-response.entity';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: false,
})
export class Home implements OnInit, OnDestroy {
  public customers: CustomerResponseEntity[] = [];
  public customerService: CustomerService;
  public refreshSubject = new Subject<unknown>();
  public customerSelected: CustomerResponseEntity | null = null;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  public ngOnInit(): void {
    this.loadCustomers();
  }

  public ngOnDestroy(): void {
    this.customerService.unsubscribe();
  }

  public onSelect(customer: CustomerResponseEntity): void {
   this.customerSelected = this.customerService.selectCustomer(customer);
  }

  private loadCustomers(): void { 
    this.customerService.getCustomers();
    this.customers = this.customerService.customersList;
  }
}
