import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private router: Router){ }

  goToFilieres() {
    this.router.navigate(['/filiere']);
    console.log('Filieeere');
    
  }
}
