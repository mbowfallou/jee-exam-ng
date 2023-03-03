import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../professor';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-list-professeur',
  templateUrl: './list-professeur.component.html',
  styles: [
  ]
})
export class ListProfesseurComponent {
  professorList: Professor[];

  constructor(private router: Router, private professeurService: ProfesseurService){}

  ngOnInit(): void {
    this.professeurService.getProfessorList()
      .subscribe(professorList => this.professorList = professorList);
  }

  goToProfessor(professor: Professor) {
    this.router.navigate(['/professeur', professor.id]);
  }
}
