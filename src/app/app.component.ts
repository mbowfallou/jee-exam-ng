import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private router: Router){ }

  goHome() {
    this.router.navigate(['']);
  }

  goToFilieres() {
    this.router.navigate(['/filiere']);
    
  }

  goToModules(){
    this.router.navigate(['/module']);
  }

  goToStudent(){
    this.router.navigate(['/etudiant']);
  }

  goToProfessors(){
    this.router.navigate(['/professeur']);
  }

  goContact(){
    this.router.navigate(['/contact']);
  }
}
