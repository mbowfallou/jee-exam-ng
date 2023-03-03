import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFiliereComponent } from './list-filiere/list-filiere.component';
import { DetailFiliereComponent } from './detail-filiere/detail-filiere.component';
import { EditFiliereComponent } from './edit-filiere/edit-filiere.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { FiliereFormComponent } from './filiere-form/filiere-form.component';
import { SearchFiliereComponent } from './search-filiere/search-filiere.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FiliereService } from './filiere.service';

const filiereRoutes: Routes = [
  {path:'filiere/edit/:id', component: EditFiliereComponent},
  {path:'filiere/add', component: AddFiliereComponent},
  {path:'filieres', component: ListFiliereComponent},
  {path:'filiere/:id', component: DetailFiliereComponent}
];

@NgModule({
  declarations: [
    ListFiliereComponent,
    DetailFiliereComponent,
    EditFiliereComponent,
    AddFiliereComponent,
    FiliereFormComponent,
    SearchFiliereComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filiereRoutes)
  ]
})
export class FiliereModule { }
