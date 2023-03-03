import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from '../filiere';
import { FiliereService } from '../filiere.service';

@Component({
  selector: 'app-list-filiere',
  templateUrl: './list-filiere.component.html',
  styles: [
  ]
})
export class ListFiliereComponent {
  filiereList: Filiere[];

  constructor(private router: Router, private filiereService: FiliereService){}

  ngOnInit(): void {
    this.filiereService.getFiliereList()
      .subscribe(filiereList => this.filiereList = filiereList);
  }

  goToFiliere(filiere: Filiere) {
    this.router.navigate(['/filiere', filiere.id]);
  }
}
