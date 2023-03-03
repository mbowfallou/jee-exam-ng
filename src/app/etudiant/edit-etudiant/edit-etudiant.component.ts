import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  template: `
    <h2 class="center">Edit {{ student?.nom }}</h2>
    <app-etudiant-form *ngIf="student" [student]="student" ></app-etudiant-form>
  `,
  styles: [
  ]
})
export class EditEtudiantComponent implements OnInit {
  student: Student | undefined = undefined;

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService){ }

  ngOnInit() {
    const studentId: string | null = this.route.snapshot.paramMap.get('id');
    if(studentId){
      this.etudiantService.getStudentById(+studentId)
        .subscribe(student => this.student = student);
    } 
  }
}
