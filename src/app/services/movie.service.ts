import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchMovies(): Observable<ApiResponse> {
    const apiKey = 'acf94717a95138be94844cc49daf08a9';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    return this.http.get<ApiResponse>(url);
  }
}
