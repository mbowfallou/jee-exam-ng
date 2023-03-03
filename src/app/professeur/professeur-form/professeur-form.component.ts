import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../professor';
import { ProfesseurService } from '../professeur.service';

@Component({
  selector: 'app-professeur-form',
  templateUrl: './professeur-form.component.html',
  styles: [
  ]
})
export class ProfesseurFormComponent implements OnInit {

  isAddForm: boolean;

  @Input() professor: Professor;

  constructor(private professeurService: ProfesseurService, private router: Router) { } 

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(){
    if(this.isAddForm){
      this.professeurService.addProfessor(this.professor)
        .subscribe((professor: Professor) => this.router.navigate(['/professeur', professor.id]));
    } else {
      this.professeurService.updateProfessor(this.professor)
        .subscribe(() => this.router.navigate(['/professeur', this.professor.id]));
    }
  }

  goToProfessorList(){
    this.router.navigate(['/professeur']);
  }
}
