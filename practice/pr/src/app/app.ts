import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pr');

  myName: string = "John";
  langs: string[] = ['TypeScript', 'JavaScript', 'Python'];

  isVisible: boolean = true;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  cnt: number = 0;

  increment(): void {
    this.cnt++;
  }

  decrement(): void {
    this.cnt--;
  }

  students = [
    {id: 1, name: 'Alice', grade: 10},
    { id: 2, name: 'Bob', grade: 8},
    { id: 3, name: 'Charlie', grade: 9}
  ]

  searchQuery: string = '';
}
