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
                  {name: 'markPoint1', value: 85+'%', xAxis: '1', yAxis:30},
                  {name: 'markPoint1', value: 85+'%', xAxis: '4', yAxis:40},
                  {name: 'markPoint1', value: 65+'%', xAxis: '7' , yAxis: 55},
                  {name: 'max' , value: 53+'%', xAxis: '10', yAxis: 70},
  
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
                  {name: 'markPoint1', value: 35+'%', xAxis: '6' , yAxis:30},
                  {name: 'markPoint1', value: 47+'%', xAxis: '9' , yAxis: 34},
  
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
                  {name: 'markPoint1', value: 15+'%', xAxis: '4', yAxis: 18},
                  {name: 'markPoint1', value: 20+'%', xAxis:'7', yAxis: 19},
                  {name: 'markPoint1', value: 12+'%', xAxis:'10', yAxis: 20},
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
