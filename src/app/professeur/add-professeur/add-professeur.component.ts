import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';

@Component({
  selector: 'app-add-professeur',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-professeur-form [professor]="professor" ></app-professeur-form>
  `,
  styles: [
  ]
})
export class AddProfesseurComponent implements OnInit {
  professor: Professor;

  ngOnInit(){
    this.professor = new Professor(); 
  }
}