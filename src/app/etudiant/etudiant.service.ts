import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  readonly API_URL = 'http://localhost:8081/api/students';

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL).pipe(
      tap((studentsList) => this.log(studentsList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getStudentById(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${studentId}`).pipe(
      tap((student) => this.log(student)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Student>(this.API_URL, student, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }  

  updateStudent(student: Student): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(`${this.API_URL}/${student.id}`, student, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteStudentById(studentId: number): Observable<null> {
    return this.http.delete<Student>(`${this.API_URL}/${studentId}`).pipe(
      tap((student) => this.log(student)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchStudentList(query: string): Observable<Student[]> {
    if(query.length <= 1) {
      return of([]);
    }
    
    return this.http.get<Student[]>(`${this.API_URL}/nom/${query}`).pipe(
      tap((studentsList) => this.log(studentsList)),
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