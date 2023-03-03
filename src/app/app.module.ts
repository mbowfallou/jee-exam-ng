import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EtudiantModule } from './etudiant/etudiant.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { FiliereModule } from './filiere/filiere.module';
import { ModuleModule } from './module/module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FiliereService } from './filiere/filiere.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EtudiantModule,
    ProfesseurModule,
    FiliereModule,
    ModuleModule,
    AppRoutingModule
  ],
  providers: [FiliereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
