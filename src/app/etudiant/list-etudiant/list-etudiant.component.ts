import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-etudiant.component.html',
  styles: [
  ]
})
export class ListEtudiantComponent implements OnInit {
  studentList: Student[];

  constructor(private router: Router, private etudiantService: EtudiantService){}

  ngOnInit(): void {    
    this.etudiantService.getStudentList()
      .subscribe(studentList => this.studentList = studentList);
  }

  goToStudent(student: Student) {
    this.router.navigate(['/etudiant', student.id]);
  }

  // getFiliere(student: Student){
  //   if (student.filiere_id) {
  //     this.filiereService.getFiliereById(+filiereId)
  //       .subscribe(fil => this.filiere = fil);
  //   }
  // }
}
