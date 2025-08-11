import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { of, merge, interval, combineLatest, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable_task1.html',
  styleUrl: './observable_task1.css'
})
export class ObservableComponent {
  numbers: number[] = [];
  ngOnInit() {
    this.createobservable();
  }



  createobservable() {
    const observable = new Observable<number>(observable => {
      let count = 1;
      setInterval(() => {
        observable.next(count);
        count++;

        if (count > 3)
          observable.complete();

      }, 1000)

    });

    observable.subscribe(value => this.numbers.push(value))

  }
}


