import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filiere } from '../filiere';
import { FiliereService } from '../filiere.service';

@Component({
  selector: 'app-edit-filiere',
  template: `
    <h2 class="center">Edit {{ filiere?.name }}</h2>
    <app-filiere-form *ngIf="filiere" [filiere]="filiere" ></app-filiere-form>
  `,
  styles: [
  ]
})
export class EditFiliereComponent implements OnInit {
  filiere: Filiere | undefined = undefined;

  constructor(private route: ActivatedRoute, private filiereService: FiliereService){ }

  ngOnInit() {
    const filiereId: string | null = this.route.snapshot.paramMap.get('id');
    if(filiereId){
      this.filiereService.getFiliereById(+filiereId)
        .subscribe(filiere => this.filiere = filiere);
    } 
  }
}
