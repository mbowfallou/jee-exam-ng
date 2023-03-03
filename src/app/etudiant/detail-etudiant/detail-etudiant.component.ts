import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styles: [
  ]
})
export class DetailEtudiantComponent implements OnInit {
  student: Student | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private etudiantService: EtudiantService) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get("id");
    if (studentId) {
      this.etudiantService.getStudentById(+studentId)
        .subscribe(std => this.student = std);
    }
  }

  deleteStudent(student: Student) {
    this.etudiantService.deleteStudentById(student.id)
      .subscribe(() => this.goToStudentList());
  }

  goToStudentList(){
    this.router.navigate(['/etudiant']);
  }

  goToEditStudent(student: Student){
    this.router.navigate(['/etudiant/edit', student.id]);
  }
}

