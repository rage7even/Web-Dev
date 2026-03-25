import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from "./posts/posts";
import {PostDetailComponent} from './post-detail/post-detail';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Posts, PostDetailComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('p3');
}
