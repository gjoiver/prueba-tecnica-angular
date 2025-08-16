import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerResponseEntity } from '../../entities/customer-response.entity';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
  standalone: false,
})
export class Customer implements OnInit, OnDestroy {
  @Input() customer!: CustomerResponseEntity;
  @Input() refresh!: Subject<unknown>;
  @Output() errorLoadEvent = new EventEmitter();

  public ngOnInit(): void {
    if (this.refresh) {
      this.refresh.subscribe((change) => {
        this.onRefresh(change);
      })
    }
  }

  public ngOnDestroy(): void {
    if (this.refresh) {
      this.refresh.unsubscribe();
    }
  }

  private onRefresh(change: unknown): void {
    this.refresh.next(change);
  }
}
