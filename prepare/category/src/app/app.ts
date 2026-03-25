import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategorySelector} from './category-selector/category-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategorySelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('category');
}
