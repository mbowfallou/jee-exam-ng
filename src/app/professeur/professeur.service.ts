import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  readonly API_URL = 'http://localhost:8081/api/profs';

  constructor(private http: HttpClient) { }

  getProfessorList(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.API_URL).pipe(
      tap((professorsList) => this.log(professorsList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getProfessorById(professorId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${professorId}`).pipe(
      tap((professor) => this.log(professor)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getProfByCredentials(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/account/${username}/${password}`).pipe(
      tap((role) => this.log(role)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addProfessor(professor: Professor): Observable<Professor> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Professor>(this.API_URL, professor, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }  

  updateProfessor(professor: Professor): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(`${this.API_URL}/${professor.id}`, professor, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteProfessorById(professorId: number): Observable<null> {
    return this.http.delete<Professor>(`${this.API_URL}/${professorId}`).pipe(
      tap((professor) => this.log(professor)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchProfessorList(query: string): Observable<Professor[]> {
    if(query.length <= 1) {
      return of([]);
    }
    
    return this.http.get<Professor[]>(`${this.API_URL}/nom/${query}`).pipe(
      tap((professorsList) => this.log(professorsList)),
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
