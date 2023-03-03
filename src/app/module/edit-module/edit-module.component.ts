import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-edit-module',
  template: `
    <h2 class="center">Edit {{ module?.name }}</h2>
    <app-form-module *ngIf="module" [module]="module" ></app-form-module>
  `,
  styles: [
  ]
})
export class EditModuleComponent implements OnInit {
  module: Module | undefined = undefined;

  constructor(private route: ActivatedRoute, private moduleService: ModuleService){ }

  ngOnInit() {
    const moduleId: string | null = this.route.snapshot.paramMap.get('id');
    if(moduleId){
      this.moduleService.getModuleById(+moduleId)
        .subscribe(module => this.module = module);
    } 
  }
}
