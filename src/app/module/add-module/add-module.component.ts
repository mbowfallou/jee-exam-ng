import { Component, OnInit } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-add-module',
  template: `
    <h2 class="center">Ajouter un Module</h2>
    <app-form-module [module]="module" ></app-form-module>
  `,
  styles: [
  ]
})
export class AddModuleComponent implements OnInit {
  module: Module;

  ngOnInit(){
    this.module = new Module();
  }
}