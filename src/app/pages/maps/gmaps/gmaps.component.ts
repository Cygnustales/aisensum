import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  title:any;
  params:any;
  peta:any;
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
  segment: any = 10;
  selectedSegment: any = 10;
  saveFile:boolean = false;
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
      name: 'Family',
      value:2
    },
    { 
      name: 'Traditional',
      value:1
    }

      ]
    area:any=1;
    selectedArea:any=1;
    areaArray:any = [
      { 
        name: 'Area',
        value:0
      },
      { 
        name: 'Kalideres',
        value:1
      },
      { 
        name: 'Kembangan',
        value:4
      },
      { 
        name: 'Grogol',
        value:3
      },
      { 
        name: 'Kebon Jeruk',
        value:1
      }
      ,
      { 
        name: 'Cengkareng',
        value:5
      },
      { 
        name: 'Jakarta Barat',
        value:1
      }
  
        ];
  btl:any = 30;
  btl1:any = 0;
  btl2:any = 0;
  btl3:any = 0;
  btl4:any = 0;
  pe1:any = 0;
  pe2:any = 0;
  pe3:any = 0;
  pe4:any = 0;
  dg1:any = 0;
  dg2:any = 0;
  dg3:any = 0;
  dg4:any = 0;
  tl1:any = 0;
  tl2:any = 0;
  tl3:any = 0;
  tl4:any = 0;
  vc1:any = 0;
  vc2:any = 0;
  vc3:any = 0;
  vc4:any = 0;
  cs:any = 0;
  cs1:any = 0;
  cs2:any = 0;
  cs3:any = 0;
  cs4:any = 0;
  sum:any = 0;

  inc11:any = 0;
  inc2:any = 0;
  inc3:any = 0;
  inc4:any = 0;
  ch1:any = 0;
  ch2:any = 0;
  ch3:any = 0;
  dec1:any = 0;
  dec2:any = 0;
  peta1:any;
  peta2:any;
  peta3:any;
  peta4:any;
  constructor(private service: SmartTableService,private theme: NbThemeService, private route: ActivatedRoute, private routes:Router) {
    const data = this.service.getData();
    this.source.load(data);
    var lv =  JSON.parse(localStorage.project)
    this.lever = lv[0].lever
  }

  ngOnInit(): void {
    this.params =  this.route.snapshot.queryParamMap.get('id');
    if(this.params === '1'){
      this.title = 'Kalideres'
      this.peta1 = './assets/images/maps/kalideres/1.png';
      this.peta2 = './assets/images/maps/kalideres/2.png';
      this.peta3 = './assets/images/maps/kalideres/3.png';
      this.peta4 = './assets/images/maps/kalideres/4.png';
    }else if(this.params === '2'){
      this.title = 'Cengkareng'
      this.peta1 = './assets/images/maps/Cengkareng/1.png';
      this.peta2 = './assets/images/maps/Cengkareng/2.png';
      this.peta3 = './assets/images/maps/Cengkareng/3.png';
      this.peta4 = './assets/images/maps/Cengkareng/4.png';
    }else if(this.params === '3'){
      this.title = 'Kebon Jeruk'
      this.peta1 = './assets/images/maps/Kebon-Jeruk/1.png';
      this.peta2 = './assets/images/maps/Kebon-Jeruk/2.png';
      this.peta3 = './assets/images/maps/Kebon-Jeruk/3.png';
      this.peta4 = './assets/images/maps/Kebon-Jeruk/4.png';
    }else if(this.params === '4'){
      this.title = 'Grogol'
      this.peta1 = './assets/images/maps/kalideres/1.png';
      this.peta2 = './assets/images/maps/kalideres/2.png';
      this.peta3 = './assets/images/maps/kalideres/3.png';
      this.peta4 = './assets/images/maps/kalideres/4.png';
    }else if(this.params === '5'){
      this.title = 'Kembangan'
      this.peta1 = './assets/images/maps/Kembangan/1.png';
      this.peta2 = './assets/images/maps/Kembangan/2.png';
      this.peta3 = './assets/images/maps/Kembangan/3.png';
      this.peta4 = './assets/images/maps/Kembangan/4.png';
    }else if(this.params === '6'){
      this.title = 'Jakarta Barat'
      this.peta1 = './assets/images/maps/Jakbar/1.png';
      this.peta2 = './assets/images/maps/Jakbar/2.png';
      this.peta3 = './assets/images/maps/Jakbar/3.png';
      this.peta4 = './assets/images/maps/Jakbar/4.png';
    }
    //this.segment();
    this.btlVal();
  }


  btlVal(){
    this.cs = 100 - this.btl;
    this.btl1 = Math.round(this.btl * 0.2)
    this.btl2 = Math.round(this.btl * 0.3)
    this.btl3 = Math.round(this.btl * 0.2)
    this.btl4 = Math.round(this.btl * 0.4)
    this.pe1 = Math.round(this.btl1 * 0.3)
    this.pe2 = Math.round(this.btl2 * 0.3)
    this.pe3 = Math.round(this.btl3 * 0.3)
    this.pe4 = Math.round(this.btl4 * 0.3)
    this.dg1 = Math.round(this.btl1 * 0.3)
    this.dg2 = Math.round(this.btl2 * 0.3)
    this.dg3 = Math.round(this.btl3 * 0.3)
    this.dg4 = Math.round(this.btl4 * 0.3)
    this.tl1 = Math.round(this.btl1 * 0.1)
    this.tl2 = Math.round(this.btl2 * 0.1)
    this.tl3 = Math.round(this.btl3 * 0.1)
    this.tl4 = Math.round(this.btl4 * 0.1)
    this.vc1 = Math.round(this.btl1 * 0.3)
    this.vc2 = Math.round(this.btl2 * 0.3)
    this.vc3 = Math.round(this.btl3 * 0.3)
    this.vc4 = Math.round(this.btl4 * 0.3)
    this.cs1 = Math.round(this.cs * 0.2)
    this.cs2 = Math.round(this.cs * 0.3)
    this.cs3 = Math.round(this.cs * 0.2)
    this.cs4 = Math.round(this.cs * 0.4)
    this.sum = this.btl1 + this.btl2 + this.btl3 + this.btl4 + this.pe1 + this.pe2+ this.pe3+ this.pe4 +
      this.dg1 + this.dg2 + this.dg3 + this.dg4 + this.tl1 + this.tl2 + this.tl3 + this.tl4 + this.vc1 + 
      this.vc2 + this.vc3 + this.vc4 + this.cs1 + this.cs2 + this.cs3 + this.cs4;
    console.log(this.sum)
    var inc = 85;
    var inc1 = Math.round(inc * (this.sum - 0.9)/100);
    this.inc11 = Math.round(inc1/5.2);
    this.inc2 = Math.round(this.inc11 - (this.inc11/this.sum)*this.global)
    this.inc3 = Math.round(this.inc2 - (this.inc11/this.sum)*this.global)
    this.inc4 = Math.round(this.inc3 - (this.inc3/this.sum)*this.global)
    this.ch1 = Math.round(this.inc11 - this.inc2)
    this.ch2 = Math.round(this.inc2 - this.inc3)
    this.ch3 = Math.round(this.inc3 - this.inc4)
    this.dec1 = Math.round(this.ch2 * 1.8)
    this.dec2 = Math.round(this.ch3 * 1.8)
    const optemp = [80, 70, 85, 55];
    const rand = Math.floor(Math.random() * 10);
    const lev = this.global - ( rand * 5);
    const multi = 1.5 - (lev/100);
    const hr = multi * 100;
    
    for (let i = 0; i < this.churns.length; i++) {
      if( i === 4 ){
        var fr = Math.round(this.churns[i] * (0.1 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 5 || i === 6 || i === 7 ){
        var fr = Math.round(this.churns[i] * (0.2 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 8 || i === 10 ){
        var fr = Math.round(this.churns[i] * (0.3 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 9 || i === 11 ){
        var fr = Math.round(this.churns[i] * (0.4 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      
    }
    this.optimized = optemp;
    this.buildChart();
    this.lineChart();
   // console.log(this.churns.length)
  }
  
  saveThis(){
    this.saveFile = true;
  }  

  saveIt(){
    this.saveFile = false;
  }

  goAdd(){
    this.addMode = true;
  }

  goRemove(i){
    this.lever.splice(i, 1);
    var projects = localStorage.project;
    var data = JSON.parse(projects);
      data[0].lever = this.lever
      localStorage.setItem('project', JSON.stringify(data)) 
  }

  cancel(){
    this.addMode = false;
  }

  selectLever(t){
    this.areai = t;
  }

  saveLever(){
    var projects = localStorage.project;
    if(projects){
      this.lever.push(this.areai);
      this.addMode = false;
      var data = JSON.parse(projects);
      data[0].lever = this.lever
      localStorage.setItem('project', JSON.stringify(data)) 
      // console.log(data)
      // console.log(JSON.parse(localStorage.project));
    }
    
  }

  getGlobal(event){
    this.segment = 0;
    this.selectedSegment = 0;
    this.area = 0;
    this.selectedArea = 0;
    for (let i = 0; i < this.segmentArray.length; i++) {
      if(i > 0){
       var val = Math.round(this.global * ( this.segmentArray[i].value / 3));
       //this.segmentArray[i].value = val
      } 
    }
    for (let a = 0; a < this.areaArray.length; a++) {
      if(a > 0){
        var vals = Math.round(this.global * ( this.areaArray[a].value / (this.areaArray[a].value / 1)));
        this.areaArray[a].value = vals/5
       } 
      
    }
  }

  getSegment(){
    this.selectedSegment = this.segment;
  }
  getArea(){
    console.log(this.area)
    this.selectedArea = this.area;
  }
  optBtn(){
    const optemp = [80, 70, 85, 55];
    const multi = 1.5 - (this.global/100);
    const hr = multi * 100;
    for (let i = 0; i < this.churns.length; i++) {
      if( i === 4 ){
        var fr = Math.round(this.churns[i] * (0.1 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 5 || i === 6 || i === 7 ){
        var fr = Math.round(this.churns[i] * (0.2 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 8 || i === 10 ){
        var fr = Math.round(this.churns[i] * (0.3 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      if( i === 9 || i === 11 ){
        var fr = Math.round(this.churns[i] * (0.4 * hr));
        var g =  this.churns[i] - Math.round(fr/100);
        optemp.push(g);
      }
      
    }
    this.optimized = optemp;
    this.buildChart();
  }

  sim(){
    if(this.lever.length !== 0){
      const optemp = [80, 70, 85, 55];
      const lev = this.global - (this.lever.length *5);
      const multi = 1.5 - (lev/100);
      const hr = multi * 100;
      for (let i = 0; i < this.churns.length; i++) {
        if( i === 4 ){
          var fr = Math.round(this.churns[i] * (0.1 * hr));
          var g =  this.churns[i] - Math.round(fr/100);
          optemp.push(g);
        }
        if( i === 5 || i === 6 || i === 7 ){
          var fr = Math.round(this.churns[i] * (0.2 * hr));
          var g =  this.churns[i] - Math.round(fr/100);
          optemp.push(g);
        }
        if( i === 8 || i === 10 ){
          var fr = Math.round(this.churns[i] * (0.3 * hr));
          var g =  this.churns[i] - Math.round(fr/100);
          optemp.push(g);
        }
        if( i === 9 || i === 11 ){
          var fr = Math.round(this.churns[i] * (0.4 * hr));
          var g =  this.churns[i] - Math.round(fr/100);
          optemp.push(g);
        }
        
      }
      this.optimized = optemp;
      this.btlVal();
      this.buildChart();
    }
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
        color: [colors.warning, colors.primary],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        toolbox: {
          show : true,
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          z: 3,
          color : ['#1e90ff','#22bb22','#4b0082'],
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#FFFFF', 
          feature : {
              mark : {show: false},
              dataView : {show: false, readOnly: false, title: 'Data View'},
              magicType: {show: true, type: ['bar'], title:{bar:'Bar Chart'}},
              restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
              saveAsImage : {show: true, title: 'Save', name:'Churn', type: 'png', icon:'image://./assets/images/icon/save.png'}
          }
      },
        legend: {
          center: 'center',
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
                color: colors.warning,
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
        color: [colors.success, colors.warning, colors.danger],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        toolbox: {
          show : true,
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          z: 3,
          color : ['#1e90ff','#22bb22','#4b0082'],
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#FFFFF', 
          feature : {
              mark : {show: false},
              dataView : {show: false, readOnly: false, title: 'Data View'},
              magicType: {show: false, type: ['bar'], title:{bar:'Bar Chart'}},
              restore : {show: true, title:'Original',icon:'image://./assets/images/icon/restore.png'},
              saveAsImage : {show: true, title: 'Save', name:'Churned', type: 'png',icon:'image://./assets/images/icon/save.png'}
          }
      },
        legend: {
          center: 'center',
          data: ['Increasing Value', 'Decreasing Value', 'Churned'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
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
          {
            type: 'category',
            position: 'top',
            data: ['Trial','Onboarding', 'Growth','Renewal'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: 'white',
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
            name: 'Increasing Value',
            type: 'line',
            data: ['-', 32,  {value:36, symbol:'arrow',symbolSize:15, symbolRotate:285}, '-', 43,  {value:48, symbol:'arrow',symbolSize:15, symbolRotate:285}
            , '-', 55,  {value:62, symbol:'arrow',symbolSize:15, symbolRotate:285}],
            smooth: true,
            markPoint : {
              symbol:'circle',
              symbolSize: 50,
              itemStyle: {
                normal: { 
                    label: {
                        show: true,
                        color: '#000', 
                        fontWeight:'bold'
                    }
                },
                emphasis: {
                    borderColor: '#1e90ff',
                    borderWidth: 5,
                    label: {
                        show: false
                    }
                }
            },
              data : [
                {name: 'markPoint1', value: this.inc11+'%', xAxis: '1', yAxis:30},
                {name: 'markPoint1', value: this.inc2+'%', xAxis: '4', yAxis:40},
                {name: 'markPoint1', value: this.inc3+'%', xAxis: '7' , yAxis: 55},
                {name: 'max' , value: this.inc4+'%', xAxis: '10', yAxis: 70},

              ]
            },
          },
          {
            name: 'Decreasing Value',
            type: 'line',
            data: [ '-', '-', '-', '-', 40, {value:36, symbol:'arrow',symbolSize:15, symbolRotate:255},'-',50, {value:40, symbol:'arrow',symbolSize:15, symbolRotate:240},
            '-',
          ],
            smooth: true,
            markPoint : {
              symbol:'circle',
              symbolSize: 35,
              itemStyle: {
                normal: { 
                    label: {
                        show: true,
                        color: '#000', 
                        fontWeight:'bold'
                    }
                },
                emphasis: {
                    borderColor: '#1e90ff',
                    borderWidth: 5,
                    label: {
                        show: false
                    }
                }
            },
              data : [
                {name: 'markPoint1', value: this.dec1+'%', xAxis: '6' , yAxis:30},
                {name: 'markPoint1', value: this.dec2+'%', xAxis: '9' , yAxis: 34},

              ]
            },
          },
          {
            name: 'Churned',
            type: 'line',
            data: ['-', '-','-','-','-',25,{value:22, symbol:'arrow',symbolSize:15, symbolRotate:250}, '-',28,{value:23, symbol:'arrow',symbolSize:15, symbolRotate:250}],
            //   '-', '-','-',34,{
            //   value:27, symbol:'arrow',symbolSize:15, symbolRotate:240
            // }, '-',40, {value:23, symbol:'arrow',symbolSize:15, symbolRotate:220}
          
            smooth: true,
            markPoint : {
              symbol:'circle',
              symbolSize: 26,
              itemStyle: {
                normal: { 
                    label: {
                        show: true,
                        color: '#000', 
                        fontWeight:'bold'
                    }
                },
                emphasis: {
                    borderColor: '#1e90ff',
                    borderWidth: 5,
                    label: {
                        show: false
                    }
                }
            },
              data : [
                {name: 'markPoint1', value: this.ch1+'%', xAxis: '4', yAxis: 18},
                {name: 'markPoint1', value: this.ch2+'%', xAxis:'7', yAxis: 19},
                {name: 'markPoint1', value: this.ch3+'%', xAxis:'10', yAxis: 20},
              ]
            },
          }
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

  mapBtn(){
    this.routes.navigateByUrl('/churn/lost/area?id='+this.params)
  }
}
