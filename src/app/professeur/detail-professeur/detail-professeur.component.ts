import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../professor';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-detail-professeur',
  templateUrl: './detail-professeur.component.html',
  styles: [
  ]
})
export class DetailProfesseurComponent implements OnInit {
  professor: Professor;

  constructor(private route: ActivatedRoute, private router: Router, private professeurService: ProfesseurService) { }

  ngOnInit() {
    const professorId = this.route.snapshot.paramMap.get("id");
    if (professorId) {
      this.professeurService.getProfessorById(+professorId)
        .subscribe(prof => this.professor = prof);
    }
  }

  deleteProfessor(professor: Professor) {
    this.professeurService.deleteProfessorById(professor.id)
      .subscribe(() => this.goToProfessorList());
  }

  goToProfessorList(){
    this.router.navigate(['/professeur']);
  }

  goToEditProfessor(professor: Professor){
    this.router.navigate(['/professeur/edit', professor.id]);
  }
}

