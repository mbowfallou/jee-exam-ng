import { Component, OnInit } from '@angular/core';
import { Filiere } from '../filiere';

@Component({
  selector: 'app-add-filiere',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-filiere-form [filiere]="filiere" ></app-filiere-form>
  `,
  styles: [
  ]
})
export class AddFiliereComponent implements OnInit {
  filiere: Filiere;

  ngOnInit(){
    this.filiere = new Filiere();
  }
}