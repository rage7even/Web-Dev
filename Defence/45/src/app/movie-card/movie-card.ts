import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Movie} from '../models/movie-model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [
    NgClass
  ],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie!: Movie;

  @Output() remove = new EventEmitter<number>();

  upvote () {
    this.movie.votes += 1;
  }

  onRemove () {
    this.remove.emit(this.movie.id);
  }

}
