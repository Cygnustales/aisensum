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
  created: boolean = true;
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
  database:any;
  browse:boolean = false;
  browse2:boolean = false;

  source: LocalDataSource = new LocalDataSource();
  exc=[
    {
        "name" : "Excel",
        "logo" : "./assets/images/logo/excel.png"
    },
    {
        "name" : "CSV",
        "logo" : "./assets/images/logo/csv.png"
    }
  ];
  list=[
    {
        "name" : "Hadoop",
        "logo" : "./assets/images/logo/hadoop.png"
    },
    {
        "name" : "Hive",
        "logo" : "./assets/images/logo/hive.png"
    },
    {
        "name" : "Apache Pig",
        "logo" : "./assets/images/logo/pig.png"
    },
    {
        "name" : "Storm",
        "logo" : "./assets/images/logo/storm.png"
    },
    {
        "name" : "Spark",
        "logo" : "./assets/images/logo/spark.png"
    },
    {
        "name" : "MySql",
        "logo" : "./assets/images/logo/mysql.png"
    },
    {
        "name" : "PostgreSQL",
        "logo" : "./assets/images/logo/postgresql.png"
    },
    {
        "name" : "Oracle",
        "logo" : "./assets/images/logo/oracle.png"
    },
    {
        "name" : "Redis",
        "logo" : "./assets/images/logo/redis.png"
    },
    {
        "name" : "MongoDB",
        "logo" : "./assets/images/logo/mongodb.png"
    },
    {
        "name" : "Google Analytics",
        "logo" : "./assets/images/logo/google-analytics.png"
    },
    {
        "name" : "Kibana",
        "logo" : "./assets/images/logo/kibana.png"
    },
    {
        "name" : "Elastic Search",
        "logo" : "./assets/images/logo/elastic.png"
    },
    {
        "name" : "Sales Force",
        "logo" : "./assets/images/logo/salesforce.png"
    },
    {
        "name" : "Big Query",
        "logo" : "./assets/images/logo/bigquery.png"
    },
    {
        "name" : "Hbase",
        "logo" : "./assets/images/logo/hbase.png"
    }

    ];
    cptext:any;
    pttext:any;
    pmctext:any;
    plmctext:any;
    cftext:any;
  constructor(private service: SmartTableService, private routes: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  selected(p,q){
    console.log(p)
    if(p=='Customer Profile'){
      this.cptext = p+' loaded from '+q+' Database'
    }else if(p=='Past Transactions'){
      this.pttext = p+' loaded from '+q+' Database'
    }else if(p=='Past Marketing Calendar'){
      this.pmctext = p+' loaded from '+q+' Database'
    }else if(p=='Planned Marketing Calendar'){
      this.plmctext = p+' loaded from '+q+' Database'
    }else if(p=='Customer Feedback Data'){
      this.cftext = p+' loaded from '+q+' File'
    }
    this.browse = false;
    this.browse2 = false;
  }
  
  cpBtn(p){
    this.cp = true;
    this.browse = true;
    this.database = p;
  }
  ptBtn(p){
    this.pt = true;
    this.browse = true;
    this.database = p;
  }
  pmcBtn(p){
    this.pmc = true;
    this.browse = true;
    this.database = p;
  }
  plmcBtn(p){
    this.plmc = true;
    this.browse = true;
    this.database = p;
  }
  cfBtn(p){
    this.cf = true;
    this.browse2 = true;
    this.database = p;
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
    this.routes.navigateByUrl('/churn/dashboard')
  }

  loadProject(){
    this.routes.navigateByUrl('/churn/dashboard')
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
