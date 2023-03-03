import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styles: [
  ]
})
export class EtudiantFormComponent implements OnInit {

  isAddForm: boolean;

  @Input() student: Student;

  constructor(private etudiantService: EtudiantService, private router: Router) { } 

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(){
    if(this.isAddForm){
      this.etudiantService.addStudent(this.student)
        .subscribe((student: Student) => this.router.navigate(['/etudiant', student.id]));
    } else {
      this.etudiantService.updateStudent(this.student)
        .subscribe(() => this.router.navigate(['/etudiant', this.student.id]));
    }
  }

  goToStudentList(){
    this.router.navigate(['/etudiant']);
  }
}
