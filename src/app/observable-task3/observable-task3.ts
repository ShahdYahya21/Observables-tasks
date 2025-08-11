import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable-task3',
  imports: [],
  templateUrl: './observable-task3.html',
  styleUrl: './observable-task3.css'
})
export class ObservableTask3 {
  currentTime :string = '';
  ngOnInit(){
    this.getObservable().subscribe(time => 
      this.currentTime = time
    );
  }

  getObservable(): Observable<string> {
    return new Observable(observable =>{
      setInterval(() => {
         const now = new Date();
         observable.next(now.toLocaleString());
      },1000);
  });

  }
  

}
