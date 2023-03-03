import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté (fallou/mbow).";
  name: string;
  password: string;
  authService: AuthService;

  constructor(private router: Router, private auth: AuthService) { 
    
  }

  ngOnInit(): void {
      this.authService = this.auth;
  }

  setMessage() {
    if(this.authService.isLoggedIn){
      this.message = "Vous êtes connecté.";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  login() {
    this.message = "Tentative de connexion en cours ...";

    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['']);
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }

      })
  }

  logout() {
    this.authService.logout();
    this.message = "Vous êtes déconnecté.";
  }

}
