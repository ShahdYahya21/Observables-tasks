import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-http-request-test',
  standalone: true,
  imports: [],
  templateUrl: './http-request-test.html',
  styleUrl: './http-request-test.css'
})
export class HttpRequestTest {
  dataArray: any[] = [];  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSomeData().subscribe(value => {
      console.log(value);
      this.dataArray = value;  
    });
  }

  getSomeData(): Observable<any[]> {
    return this.http.get<any[]>('https://mocki.io/v1/57a37016-9226-4661-b423-537488387cf3');
  }
}