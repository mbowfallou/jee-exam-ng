import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Filiere } from './filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  readonly API_URL = 'http://localhost:8081/api/filieres';

  constructor(private http: HttpClient) { }

  getFiliereList(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(this.API_URL).pipe(
      tap((filieresList) => this.log(filieresList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getFiliereById(filiereId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${filiereId}`).pipe(
      tap((filiere) => this.log(filiere)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addFiliere(filiere: Filiere): Observable<Filiere> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Filiere>(this.API_URL, filiere, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }  

  updateFiliere(filiere: Filiere): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(`${this.API_URL}/${filiere.id}`, filiere, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteFiliereById(filiereId: number): Observable<null> {
    return this.http.delete<Filiere>(`${this.API_URL}/${filiereId}`).pipe(
      tap((filiere) => this.log(filiere)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchFiliereList(query: string): Observable<Filiere[]> {
    if(query.length <= 1) {
      return of([]);
    }
    
    return this.http.get<Filiere[]>(`${this.API_URL}/nom/${query}`).pipe(
      tap((filieresList) => this.log(filieresList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}
