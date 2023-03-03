import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { Professor } from './professeur/professor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesseurService } from './professeur/professeur.service';
import { EtudiantService } from './etudiant/etudiant.service';
import { Student } from './etudiant/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  utilisateur: Student | Professor | any;

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, 
    private router: Router, 
    private professeurService: ProfesseurService,
    private etudiantService: EtudiantService
    ) 
    { }

  login(username: string, password: string): Observable<boolean>{
    try {
      this.utilisateur = this.professeurService.getProfByCredentials(username, password)
      .subscribe(prof => {
        this.utilisateur = prof;
        this.isLoggedIn = (username == this.utilisateur.email && password == this.utilisateur.password);
        console.log(this.utilisateur);
      });
    } catch (error) {
      if(this.utilisateur == null || this.utilisateur == undefined){
        this.utilisateur = this.etudiantService.getEtudiantByCredentials(username, password)
        .subscribe(etd => {
          this.utilisateur = etd;
          this.isLoggedIn = (username == this.utilisateur.email && password == this.utilisateur.password);
          console.log(this.utilisateur);
        });
      }
    }

    

    //const isLoggedIn = (username == 'fallou' && password == 'mbow');
    return of(this.isLoggedIn).pipe(
      delay(1000), 
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}
