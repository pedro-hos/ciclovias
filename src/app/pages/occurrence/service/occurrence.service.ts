import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import {Occurrence} from "../model/occurrence.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OccurrenceService {

  private occurrenceUrl = `${environment.resouceUrl}/occurrences`;

  constructor(private http: HttpClient) { }

  getOccurrences(): Observable<Occurrence[]> {
    return this.http.get<Occurrence[]>(this.occurrenceUrl)
      .pipe(
        tap(status => console.log(`fetched occurrences`)),
        catchError(this.handleError('getOccurrences', []))
      );
    }

  addOccurrence(occurrence: Occurrence): Observable<Occurrence> {
    return this.http.post<Occurrence>(this.occurrenceUrl, occurrence, httpOptions).pipe(
      tap((occurrence: Occurrence) => console.log(`added occurrence w/ id=${occurrence.id}`)),
      catchError(this.handleError<Occurrence>('addOccurrence'))
    );
  }

  upload(formData: FormData): Observable<Occurrence> {
    return this.http.post(this.occurrenceUrl + '/upload', formData).pipe(
      tap((occurrence: Occurrence) => console.log(`added occurrence w/ id=${occurrence.id}`)),
      catchError(this.handleError<Occurrence>('addOccurrence'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
