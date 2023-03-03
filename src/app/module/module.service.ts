import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Module } from './module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  readonly API_URL = 'http://localhost:8081/api/modules';

  constructor(private http: HttpClient) { }

  getModuleList(): Observable<Module[]> {
    return this.http.get<Module[]>(this.API_URL).pipe(
      tap((modulesList) => this.log(modulesList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getModuleById(moduleId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${moduleId}`).pipe(
      tap((module) => this.log(module)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addModule(module: Module): Observable<Module> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Module>(this.API_URL, module, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }  

  updateModule(module: Module): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(`${this.API_URL}/${module.id}`, module, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteModuleById(moduleId: number): Observable<null> {
    return this.http.delete<Module>(`${this.API_URL}/${moduleId}`).pipe(
      tap((module) => this.log(module)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchModuleList(query: string): Observable<Module[]> {
    if(query.length <= 1) {
      return of([]);
    }
    
    return this.http.get<Module[]>(`${this.API_URL}/nom/${query}`).pipe(
      tap((modulesList) => this.log(modulesList)),
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