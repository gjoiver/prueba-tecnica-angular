import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CustomerResponseEntity } from '../../entities/customer-response.entity';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
  standalone: false,
})
export class CustomerComponent implements OnInit, OnDestroy {
  @Input() customer!: CustomerResponseEntity;
  @Input() refresh!: Subject<unknown>;
  @Output() errorLoadEvent = new EventEmitter();

  public refreshSubscription!: Subscription;

  public ngOnInit(): void {
    if (this.refresh) {
       this.refreshSubscription = this.refresh.subscribe((change) => {
        this.onRefresh(change);
      })
    }
  }

  public ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  public onErrorLoad(event: unknown): void {
    this.errorLoadEvent.emit(event);
  }

  public onRefresh(change: unknown): void {
    console.log('Refresh', change);
  }
}
