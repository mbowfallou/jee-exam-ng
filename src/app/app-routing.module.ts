import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
import { ListFiliereComponent } from './filiere/list-filiere/list-filiere.component';
import { LoginComponent } from './login/login.component';
import { ListModuleComponent } from './module/list-module/list-module.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProfesseurComponent } from './professeur/list-professeur/list-professeur.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'filiere', component: ListFiliereComponent},
  {path:'professeur', component: ListProfesseurComponent},
  {path:'module', component: ListModuleComponent},
  {path:'etudiant', component: ListEtudiantComponent},
  {path:'contact', component: ContactComponent},
  {path:'auth', component: LoginComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
