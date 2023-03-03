import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const etudiantRoutes: Routes = [
  {path:'etudiant/edit/:id', component: EditEtudiantComponent},
  {path:'etudiant/add', component: AddEtudiantComponent},
//  {path:'etudiants', component: ListEtudiantComponent},
  {path:'etudiant/:id', component: DetailEtudiantComponent}
];


@NgModule({
  declarations: [
    ListEtudiantComponent,
    DetailEtudiantComponent,
    EtudiantFormComponent,
    AddEtudiantComponent,
    EditEtudiantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(etudiantRoutes)
  ]
})
export class EtudiantModule { }
