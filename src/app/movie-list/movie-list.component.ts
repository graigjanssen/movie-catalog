import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service'; 
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.fetchMovies().subscribe(data => {
      this.movies = data.results;
    });
  }
}
