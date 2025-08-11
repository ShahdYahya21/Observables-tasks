import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestTest } from './http-request-test/http-request-test';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable_task1/observable_task1';
import { ObservableTask2 } from './observable-task2/observable-task2';
import { ObservableTask3 } from './observable-task3/observable-task3';
import { ObservableTask4 } from './observable-task4/observable-task4';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, HttpRequestTest,HttpClientModule,
    ObservableComponent,ObservableTask2,ObservableTask3,ObservableTask4
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HttpReuest-test');
}
