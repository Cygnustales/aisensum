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
  pies: any = {};

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
    this.pie();
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
              restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
              saveAsImage : {show: true, title: 'Save', name:'Potential Lost due to churn (in Million)', type: 'png', icon:'image://./assets/images/icon/save.png'}
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
            data: ['Trial', 'Onboarding', 'Growth', 'Renewal'],
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
            data: [ {
              value: 35,
              symbol: 'circle',
              symbolSize : 0,
              symbolRotate : 10,
              itemStyle: {  
                  normal: {
                      color: 'white',
                      lineStyle: {   
                        width: 2,
                        type: 'dash'
                      }
                  },
                  emphasis: {
                      color: 'orange',
                  }
              }
          },{
              value: 46,
              symbol: 'arrow',
              symbolSize : 0,
              symbolRotate : 10,
              itemStyle: {   
                  normal: {
                      color: 'white',
                      lineStyle: { 
                        width: 2,
                        type: 'dash'
                      }
                  },
                  emphasis: {
                      color: 'orange',
                  }
              }
            },60,73],
            smooth: true,
            markPoint : {
              symbol:'circle',
              symbolSize: 60,
              data : [
                {name: 'markPoint1', value: 85+'%', xAxis: 'Trial', yAxis:35},
                {name: 'markPoint1', value: 65+'%', xAxis: 'Growth' , yAxis: 60},
                {name: 'max' , value: 53+'%', xAxis: 'Renewal', yAxis: 73},

              ]
            },
          },
          {
            name: 'Decreasing Value',
            type: 'line',
            data: [ 35, 25, 60,33],
            smooth: true,
            markPoint : {
              symbol:'circle',
              symbolSize: 45,
              data : [
                {name: 'markPoint1', value: 35+'%', xAxis: 'Onboarding', yAxis:25},
                {name: 'markPoint1', value: 47+'%', xAxis: 'Renewal' , yAxis: 33},

              ]
            },
          },
          {
            name: 'Churned',
            type: 'line',
            data: ['-', 25,20,12],
            smooth: true,
            symbol:'arrow',
            symbolSize: 10,
            symbolRotate:'-85',
            markPoint : {
              symbol:'circle',
              symbolSize: 35,
              data : [
                {name: 'markPoint1', value: 15+'%', xAxis: 'Onboarding', yAxis: 15},
                {name: 'markPoint1', value: 20+'%', xAxis:'Growth', yAxis: 20},
                {name: 'markPoint1', value: 12+'%', xAxis:'Renewal', yAxis: 12},
              ]
            },
          }
        ],
      };
    });
  }

  pie(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0.2)',
            label: {show:true},
            labelLine: {show:true}
        },
        emphasis : {
            color: 'rgba(0,0,0,1)'
        }
    };
    this.pies = {
        title: {
            text: '你幸福吗？',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle : {
                color : 'rgba(30,144,255,0.8)',
                fontFamily : '微软雅黑',
                fontSize : 35,
                fontWeight : 'bolder'
            }
        },
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 10,
            y : 45,
            itemGap:12,
            data:['Trial','Onboarding','Growth','Renewal']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [42, 50],
                itemStyle : dataStyle,
                data:[
                    {
                        value:82,
                        name:'Trial'
                    },
                    {
                        value:18,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'2',
                type:'pie',
                clockWise:false,
                radius : [32, 40],
                itemStyle : dataStyle,
                data:[
                    {
                        value:29, 
                        name:'Onboarding'
                    },
                    {
                        value:71,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
              name:'3',
              type:'pie',
              clockWise:false,
              radius : [24, 30],
              itemStyle : dataStyle,
              data:[
                  {
                      value:30, 
                      name:'Growth'
                  },
                  {
                      value:70,
                      name:'invisible',
                      itemStyle : placeHolderStyle
                  }
              ]
          },
          {
            name:'3',
            type:'pie',
            clockWise:false,
            radius : [14, 20],
            itemStyle : dataStyle,
            data:[
                {
                    value:30, 
                    name:'Renewal'
                },
                {
                    value:70,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
        ]
    };
                              
    });
  }

  mapBtn(p){
    this.routes.navigateByUrl('/churn/play/book?id='+p)
  }
  backBtn(){
    this.routes.navigateByUrl('/churn/dashboard')
  }
}
