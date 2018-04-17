import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  created: boolean = false;
  project:boolean = false;
  error:boolean = false;
  cp:boolean = false;
  pt:boolean = false;
  pmc:boolean = false;
  plmc:boolean = false;
  cf:boolean = false;
  errorMessage: string;
  projectName:string;
  projectList:any = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private routes: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }
 
  cpBtn(){
    this.cp = true;
  }
  ptBtn(){
    this.pt = true;
  }
  pmcBtn(){
    this.pmc = true;
  }
  plmcBtn(){
    this.plmc = true;
  }
  cfBtn(){
    this.cf = true;
  }
  newProject(){
    this.project = true;
    this.projectList = [];
  }
  // settings = {
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<i class="nb-edit"></i>',
  //     saveButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true,
  //   },
  //   columns: {
  //     id: {
  //       title: 'ID',
  //       type: 'number',
  //     },
  //     firstName: {
  //       title: 'First Name',
  //       type: 'string',
  //     },
  //     lastName: {
  //       title: 'Last Name',
  //       type: 'string',
  //     },
  //     username: {
  //       title: 'Username',
  //       type: 'string',
  //     },
  //     email: {
  //       title: 'E-mail',
  //       type: 'string',
  //     },
  //     age: {
  //       title: 'Age',
  //       type: 'number',
  //     },
  //   },
  // };

  Project(){
    this.project = true;
    this.error = false;
  }

  lastProject(){
    this.project = false;
    const projects = localStorage.project;
    if(!projects){
      this.error = true;
      this.errorMessage = 'No Existing Project';
    }else{
      this.error = false;
      this.projectList = JSON.parse(projects)
      console.log(this.projectList)
    }
  }
  saveProject(){
    if(!this.projectName){
      this.error = true;
      this.errorMessage = 'Project Name can not Empty!';
    }else{
      this.error = false;
      this.created = true;
      
    }
    

  }


  submit(){
    var date = new Date();
    const project = [{
      name: this.projectName,
      date: date,
      lever: []
    }]
    localStorage.setItem('project', JSON.stringify(project))
    this.routes.navigateByUrl('/pages/dashboard')
  }

  loadProject(){
    this.routes.navigateByUrl('/pages/dashboard')
  }

  deleteProject(){
    this.project = false;
    this.projectList = [];
    localStorage.removeItem('project')
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
