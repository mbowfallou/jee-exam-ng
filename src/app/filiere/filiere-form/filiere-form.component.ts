import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from '../filiere';
import { FiliereService } from '../filiere.service';

@Component({
  selector: 'app-filiere-form',
  templateUrl: './filiere-form.component.html',
  styleUrls: ['../filiere-form.component.css']
})
export class FiliereFormComponent implements OnInit {

  isAddForm: boolean;

  @Input() filiere: Filiere;
  
  types: string[];

  constructor(private filiereService: FiliereService, private router: Router) { } 

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(){
    if(this.isAddForm){
      this.filiereService.addFiliere(this.filiere)
        .subscribe((filiere: Filiere) => this.router.navigate(['/filiere', filiere.id]));
    } else {
      this.filiereService.updateFiliere(this.filiere)
        .subscribe(() => this.router.navigate(['/filiere', this.filiere.id]));
    }
  }

  goToFiliereList(){
    this.router.navigate(['/filiere']);
  }
}
