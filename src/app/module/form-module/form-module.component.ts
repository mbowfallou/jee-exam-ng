import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styles: [
  ]
})
export class FormModuleComponent implements OnInit {

  isAddForm: boolean;

  @Input() module: Module;

  constructor(private moduleService: ModuleService, private router: Router) { } 

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit(){
    if(this.isAddForm){
      this.moduleService.addModule(this.module)
        .subscribe((module: Module) => this.router.navigate(['/module', module.id]));
    } else {
      this.moduleService.updateModule(this.module)
        .subscribe(() => this.router.navigate(['/module', this.module.id]));
    }
  }

  goToModuleList(){
    this.router.navigate(['/module']);
  }
}
