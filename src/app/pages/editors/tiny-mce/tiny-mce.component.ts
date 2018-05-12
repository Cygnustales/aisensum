import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'ngx-tiny-mce-page',
  templateUrl: 'tiny-mce.component.html',
  styleUrls: ['./style.scss'],
})
export class TinyMCEComponent {
  export: any;
  loading: boolean = true;
  constructor(private routes:Router, private data:DataService) {

  }
  ngOnInit(): void {
    this.data.getData().subscribe(res => {
      //console.log(res);
      this.export = res;
      this.loading = false;
    })
  }

}
