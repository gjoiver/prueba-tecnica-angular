import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerEntity } from '../../entities/customer.entity';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
  standalone: false,
})
export class Customer implements OnInit {
  @Input() customer!: CustomerEntity;
  @Input() refresh!: Subject<unknown>;
  @Output() errorLoadEvent = new EventEmitter();

  public ngOnInit(): void {
   this.refresh.subscribe((change) => {
     this.onRefresh(change);
   })
  }

  private onRefresh(change: unknown): void {
    console.log(change);
  }
}
