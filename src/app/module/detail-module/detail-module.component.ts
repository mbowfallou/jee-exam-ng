import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styles: [
  ]
})
export class DetailModuleComponent implements OnInit {
  module: Module | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private moduleService: ModuleService) { }

  ngOnInit() {
    const moduleId = this.route.snapshot.paramMap.get("id");
    if (moduleId) {
      this.moduleService.getModuleById(+moduleId)
        .subscribe(fil => this.module = fil);
    }
  }

  deleteModule(module: Module) {
    this.moduleService.deleteModuleById(module.id)
      .subscribe(() => this.goToModuleList());
  }

  goToModuleList(){
    this.router.navigate(['/module']);
  }

  goToEditModule(module: Module){
    this.router.navigate(['/module/edit', module.id]);
  }
}
