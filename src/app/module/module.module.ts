import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModuleComponent } from './list-module/list-module.component';
import { DetailModuleComponent } from './detail-module/detail-module.component';
import { FormModuleComponent } from './form-module/form-module.component';
import { SearchModuleComponent } from './search-module/search-module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [
  {path:'module/edit/:id', component: EditModuleComponent},
  {path:'module/add', component: AddModuleComponent},
  {path:'modules', component: ListModuleComponent},
  {path:'module/:id', component: DetailModuleComponent}
];


@NgModule({
  declarations: [
    ListModuleComponent,
    DetailModuleComponent,
    FormModuleComponent,
    SearchModuleComponent,
    AddModuleComponent,
    EditModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(moduleRoutes)
  ]
})
export class ModuleModule { }
