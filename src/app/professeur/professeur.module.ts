import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfesseurComponent } from './list-professeur/list-professeur.component';
import { DetailProfesseurComponent } from './detail-professeur/detail-professeur.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseurFormComponent } from './professeur-form/professeur-form.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { EditProfesseurComponent } from './edit-professeur/edit-professeur.component';
import { SearchProfesseurComponent } from './search-professeur/search-professeur.component';

const professeurRoutes: Routes = [
  {path:'professeur/edit/:id', component: EditProfesseurComponent},
  {path:'professeur/add', component: AddProfesseurComponent},
  {path:'professeurs', component: ListProfesseurComponent},
  {path:'professeur/:id', component: DetailProfesseurComponent}
];

@NgModule({
  declarations: [
    ListProfesseurComponent,
    DetailProfesseurComponent,
    ProfesseurFormComponent,
    AddProfesseurComponent,
    EditProfesseurComponent,
    SearchProfesseurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(professeurRoutes)
  ]
})
export class ProfesseurModule { }
