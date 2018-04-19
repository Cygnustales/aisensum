import { Component } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { color } from 'd3-color';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  title:any;
  params:any;
  themeSubscription: any;
  charts:any;

  constructor(private routes:Router, private theme: NbThemeService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.params =  this.route.snapshot.queryParamMap.get('id');
    if(this.params === '1'){
      this.title = 'Kalideres'
    }else if(this.params === '2'){
      this.title = 'Cengkareng'
    }else if(this.params === '3'){
      this.title = 'Kebon Jeruk'
    }else if(this.params === '4'){
      this.title = 'Grogol'
    }else if(this.params === '5'){
      this.title = 'Kembangan'
    }else if(this.params === '6'){
      this.title = 'Jakarta Barat'
    }
    this.segment();
  }

  segment(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
  
      this.charts = {
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
              magicType: {show: true, type: ['bar'], title:{bar:'Bar Chart'}},
              restore : {show: true, title:'Original'},
              saveAsImage : {show: true, title: 'Save', name:'Potential Lost due to churn (in Million)', type: 'png', color:'#fff', borderColor: '#FFFFF',}
          }
      },
        legend: {
          left: 'left',
          data: ['Increasing Value', 'Decreasing Value', 'Churned'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['Trial', 'Onboarding', 'Growth', 'Renewall'],
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
            data: [85,85,65,53],
          },
          {
            name: 'Decreasing Value',
            type: 'line',
            data: [85,85,35,47],
          },
          {
            name: 'Churned',
            type: 'line',
            data: [65,15,20,12],
          }
        ],
      };
    });
  }
}
