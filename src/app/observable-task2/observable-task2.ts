import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-observable-task2',
  imports: [],
  templateUrl: './observable-task2.html',
  styleUrl: './observable-task2.css'
})
export class ObservableTask2 {
  array :any = []
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getSomeData();
  }

getSomeData() {
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => 
     this.array = data.slice(0, 10));

}
}
