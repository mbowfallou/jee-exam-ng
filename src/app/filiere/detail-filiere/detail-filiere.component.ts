import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filiere } from '../filiere';
import { FiliereService } from '../filiere.service';

@Component({
  selector: 'app-detail-filiere',
  templateUrl: './detail-filiere.component.html',
  styles: [
  ]
})
export class DetailFiliereComponent implements OnInit {
  filiere: Filiere | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private filiereService: FiliereService) { }

  ngOnInit() {
    const filiereId = this.route.snapshot.paramMap.get("id");
    if (filiereId) {
      this.filiereService.getFiliereById(+filiereId)
        .subscribe(fil => this.filiere = fil);
    }
  }

  deleteFiliere(filiere: Filiere) {
    this.filiereService.deleteFiliereById(filiere.id)
      .subscribe(() => this.goToFiliereList());
  }

  goToFiliereList(){
    this.router.navigate(['/filiere']);
  }

  goToEditFiliere(filiere: Filiere){
    this.router.navigate(['/filiere/edit', filiere.id]);
  }
}
