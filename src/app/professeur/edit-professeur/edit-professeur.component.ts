import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../professor';
import { ProfesseurService } from '../professeur.service';
@Component({
  selector: 'app-edit-professeur',
  template: `
    <h2 class="center">Edit {{ professor?.nom }}</h2>
    <app-professeur-form *ngIf="professor" [professor]="professor" ></app-professeur-form>
  `,
  styles: [
  ]
})
export class EditProfesseurComponent implements OnInit {
  professor: Professor | undefined = undefined;

  constructor(private route: ActivatedRoute, private professeurService: ProfesseurService){ }

  ngOnInit() {
    const professorId: string | null = this.route.snapshot.paramMap.get('id');
    if(professorId){
      this.professeurService.getProfessorById(+professorId)
        .subscribe(professor => this.professor = professor);
    } 
  }
}
