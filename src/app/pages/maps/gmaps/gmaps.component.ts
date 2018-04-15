import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
  // template: `
  //   <nb-card>
  //     <nb-card-header>Google Maps</nb-card-header>
  //     <nb-card-body>
  //       <agm-map [latitude]="lat" [longitude]="lng">
  //         <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
  //       </agm-map>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class GmapsComponent {

  options: any = {};
  line: any = {};
  themeSubscription: any;
  areai = 'Adding Lever';
  areas = ['New Launch', 'Product Innovation', 'Social Media Buzz', 'Brand Equity/ATL', 'Socio Cultural Study'];
  addMode: boolean = false;
  lever: any = [];
  optimized = [80, 70, 85, 55, 52, 36, 42, 51, 45, 36, 50, 40];
  churns = [80, 70, 85, 55, 61, 50, 59, 71, 78, 81, 87, 92]
  global: number = 10;
  segment: any = 0;
  selectedSegment: any = 0;
  segmentArray: any = [
    { 
      name: 'Segment',
      value:0
    },
    { 
      name: 'Milenials',
      value:4
    },
    { 
      name: 'Young Adult',
      value:3
    },
    { 
      name: 'Families',
      value:2
    },
    { 
      name: 'Traditional',
      value:1
    }

      ]
    area:any=0;
    selectedArea:any=0;
    areaArray:any = [
      { 
        name: 'Area',
        value:0
      },
      { 
        name: 'PIK',
        value:1
      },
      { 
        name: 'Mangga Dua',
        value:4
      },
      { 
        name: 'Mangga Besar',
        value:3
      },
      { 
        name: 'Glodok',
        value:1
      }
  
        ]

  constructor(private service: SmartTableService,private theme: NbThemeService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  goAdd(){
    this.addMode = true;
  }

  goRemove(i){
    this.lever.splice(i, 1);
  }

  cancel(){
    this.addMode = false;
  }

  selectLever(t){
    this.areai = t;
  }

  saveLever(){
    this.lever.push(this.areai);
    this.addMode = false;
  }

  getGlobal(event){
    this.segment = 0;
    this.selectedSegment = 0;
    this.area = 0;
    this.selectedArea = 0;
    for (let i = 0; i < this.segmentArray.length; i++) {
      if(i > 0){
       var val = Math.floor(this.global * ( this.segmentArray[i].value / 3));
       this.segmentArray[i].value = val
      } 
    }
    for (let a = 0; a < this.areaArray.length; a++) {
      if(a > 0){
        var vals = Math.floor(this.global * ( this.areaArray[a].value / (this.areaArray[a].value / 1)));
        this.areaArray[a].value = vals/5
       } 
      
    }
  }

  getSegment(){
    this.selectedSegment = this.segment;
  }
  getArea(){
    this.selectedArea = this.area;
  }
  optBtn(){
    const optemp = [80, 70, 85, 55];
    const multi = 1.5 - (this.global/100);
    const hr = multi * 100;
    for (let i = 0; i < this.churns.length; i++) {
      if( i === 4 ){
        var fr = Math.floor(this.churns[i] * (0.1 * hr));
        var g =  this.churns[i] - Math.floor(fr/100);
        optemp.push(g);
      }
      if( i === 5 || i === 6 || i === 7 ){
        var fr = Math.floor(this.churns[i] * (0.2 * hr));
        var g =  this.churns[i] - Math.floor(fr/100);
        optemp.push(g);
      }
      if( i === 8 || i === 10 ){
        var fr = Math.floor(this.churns[i] * (0.3 * hr));
        var g =  this.churns[i] - Math.floor(fr/100);
        optemp.push(g);
      }
      if( i === 9 || i === 11 ){
        var fr = Math.floor(this.churns[i] * (0.4 * hr));
        var g =  this.churns[i] - Math.floor(fr/100);
        optemp.push(g);
      }
      
    }
    this.optimized = optemp;
    this.buildChart();
  }

  ngAfterViewInit() {
   this.buildChart();
   this.lineChart();
  };
  buildChart(){
     
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['Churn', 'Optimized'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.primary,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Optimized  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.danger,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Churn  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Churn',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: this.churns,
          },
          {
            name: 'Optimized',
            type: 'line',
            smooth: true,
            data: this.optimized,
          },
        ],
      };
    });
  }
  
  lineChart(){
     
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.line = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.success, colors.warning],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Churned', 'Increasing', 'Decreasing'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['Trial', 'Onboarding', 'Growth', 'Renewal'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'Churned',
            type: 'line',
            data: [85, 15, 20, 32],
          },
          {
            name: 'Increasing',
            type: 'line',
            data: [85, 85, 65, 53],
          },
          {
            name: 'Decreasing',
            type: 'line',
            data: [85, 85, 35, 47],
          },
        ],
      };
    });
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: '',
        type: 'string',
      },
      firstName: {
        title: '',
        type: 'string',
      },
      lastName: {
        title: 'Trial',
        type: 'string',
      },
      username: {
        title: 'Onboarding',
        type: 'string',
      },
      email: {
        title: 'Growth',
        type: 'string',
      },
      age: {
        title: 'Renewal',
        type: 'number',
      },
    },
  }
  source: LocalDataSource = new LocalDataSource();


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
