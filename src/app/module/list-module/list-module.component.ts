import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styles: [
  ]
})
export class ListModuleComponent implements OnInit {
  moduleList: Module[];

  constructor(private router: Router, private moduleService: ModuleService){}

  ngOnInit(): void {
    this.moduleService.getModuleList()
      .subscribe(moduleList => this.moduleList = moduleList);
  }

  goToModule(module: Module) {
    this.router.navigate(['/module', module.id]);
  }
}
