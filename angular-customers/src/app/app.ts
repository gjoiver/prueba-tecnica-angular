import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersModule } from './customers/customers-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomersModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-customers');
}
