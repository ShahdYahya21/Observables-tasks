import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-task4',
  templateUrl: './observable-task4.html',
  styleUrls: ['./observable-task4.css']
})
export class ObservableTask4 implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchInput();
  }

  searchInput() {
    const inputText = document.querySelector('.myInput');
    if (inputText) {
      fromEvent<KeyboardEvent>(inputText, 'keyup').pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm => this.getSomeData(searchTerm))
      ).subscribe(data => this.posts = data);
    }
  }

  getSomeData(input: string): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(data =>
        data.filter(item =>
          item.title.toLowerCase().includes(input.toLowerCase()) ||
          item.body.toLowerCase().includes(input.toLowerCase())
        )
      )
    );
  }
}
