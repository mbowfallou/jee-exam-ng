import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-add-etudiant',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-etudiant-form [student]="student" ></app-etudiant-form>
  `,
  styles: [
  ]
})
export class AddEtudiantComponent implements OnInit {
  student: Student;

  ngOnInit(){
    this.student = new Student(); 
  }
}