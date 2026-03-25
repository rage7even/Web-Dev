import {inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/${id}`);
  }
}
