import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { Subscription } from 'rxjs';
import { CustomerResponseEntity } from '../entities/customer-response.entity';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private $customerSubscription!: Subscription;
  private apiUrl = enviroment.apiUrl;
  private action = '/users';
  private http: HttpClient;
  private customers: CustomerResponseEntity[] = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCustomers() {
    console.log('Start');
    this.$customerSubscription = this.http.get<CustomerResponseEntity[]>(`${this.apiUrl}${this.action}`).subscribe((customers: CustomerResponseEntity[]) => {
      this.setCustomers(customers);
      console.log('getCustomers');
    })

    console.log('End');
  }

  public setCustomers(customers: CustomerResponseEntity[]): void {
    this.customers = customers;
  }

  public get customersList(): CustomerResponseEntity[] {
    return this.customers;
  }

  public selectCustomer(customer: CustomerResponseEntity): CustomerResponseEntity | null {
    const selectedCustomer = this.customers.find(customerItem => customerItem.id === customer.id);

    if (selectedCustomer) {
      return selectedCustomer;
    }

    console.log('Customer not found:', customer);
    return null
  }

  public unsubscribe(): void {
    if (this.$customerSubscription) {
      this.$customerSubscription.unsubscribe();
      console.log('Unsubscribed from customer service');
    }
  }
}
