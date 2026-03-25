import {Component, EventEmitter, Input, model, Output,} from '@angular/core';
import { Movie} from './models/movie-model';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'My Movie List';

  movies: Movie[] = [
    {id:1, title: 'Blabla', year: 1999, isWatched: true, votes: 5 },
    {id:2, title: 'Goy', year: 2001, isWatched: true, votes: 67 }
  ];
  @Input() movie!: string;
  @Output() remove = new EventEmitter<number>();

  onRemoveMovie(movieId: number) {
    this.movies = this.movies.filter(movie => movie.id !== movieId);
  }


}
