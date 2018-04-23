import { Component } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { color } from 'd3-color';
import { DomSanitizer } from '@angular/platform-browser';

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
  data:any;
  kali = {
    p1: ['20%', '126 M', 'green', '96%', 'green', '96%', 'green', '96%', 'green', '96%'],
    p2: ['8%', '76 M', 'red', '78%', 'red', '78%', 'red', '78%', 'red', '78%'],
    p3: ['12%', '74 M', 'orange', '84%', 'orange', '84%', 'orange', '84%', 'orange', '84%'],
    p4: ['5%', '34 M', 'green', '96%', 'green', '96%', 'green', '96%', 'green', '96%'],
    p5: ['30%', '67 M', 'green', '95%', 'green', '95%', 'green', '95%', 'green', '95%'],
    p6: ['10%', '32 M', 'green', '96%', 'green', '96%', 'green', '96%', 'green', '96%'],
    p7: ['15%', '87 M', 'orange', '89%', 'orange', '89%', 'orange', '89%', 'orange', '89%'],
    p8: ['60%','56%','52%','49%'],
    p9: ['7%','6%'],
    p10: ['4%','4%','3%'],
  }

  kembang = {
    p1: ['9%', '51 M', 'green', '93%', 'orange', '89%', 'orange', '82%', 'red', '73%'],
    p2: ['16%', '105 M', 'orange', '80%', 'red', '73%', 'red', '76%', 'red', '94%'],
    p3: ['10%', '70 M', 'green', '93%', 'orange', '81%', 'green', '95%', 'orange', '84%'],
    p4: ['17%', '112 M', 'green', '95%', 'orange', '82%', 'orange', '86%', 'red', '78%'],
    p5: ['17%', '74 M', 'orange', '83%', 'orange', '84%', 'red', '72%', 'green', '92%'],
    p6: ['20%', '135 M', 'green', '92%', 'orange', '80%', 'orange', '88%', 'orange', '88%'],
    p7: ['12%', '84 M', 'red', '76%', 'orange', '85%', 'orange', '86%', 'green', '90%'],
    p8: ['51%','48%','44%','41%'],
    p9: ['6%','5%'],
    p10: ['3%','3%','3%'],
  }

  grogol = {
    p1: ['8%', '31 M', 'orange', '80%', 'red', '75%', 'orange', '85%', 'orange', '87%'],
    p2: ['14%', '84 M', 'orange', '86%', 'orange', '80%', 'red', '77%', 'green', '95%'],
    p3: ['12%', '132 M', 'green', '94%', 'red', '75%', 'orange', '87%', 'red', '73%'],
    p4: ['16%', '127 M', 'green', '93%', 'red', '74%', 'green', '89%', 'red', '73%'],
    p5: ['14%', '45 M', 'red', '79%', 'orange', '80%', 'orange', '81%', 'red', '74%'],
    p6: ['20%', '60 M', 'red', '79%', 'green', '94%', 'red', '79%', 'orange', '80%'],
    p7: ['16%', '123 M', 'red', '73%', 'red', '77%', 'red', '77%', 'orange', '85%'],
    p8: ['85%','81%','76%','72%'],
    p9: ['8%','7%'],
    p10: ['4%','4%','4%'],
  }
 
  jeruk = {
    p1: ['26%', '54 M', 'orange', '80%', 'orange', '87%', 'orange', '89%', 'green', '78%'],
    p2: ['9%', '34 M', 'red', '72%', 'orange', '85%', 'red', '75%', 'orange', '85%'],
    p3: ['8%', '50 M', 'red', '74%', 'orange', '84%', 'red', '77%', 'red', '74%'],
    p4: ['19%', '55 M', 'green', '94%', 'green', '90%', 'green', '93%', 'red', '76%'],
    p5: ['13%', '81 M', 'red', '76%', 'green', '92%', 'green', '90%', 'green', '91%'],
    p6: ['17%', '36 M', 'red', '79%', 'red', '75%', 'orange', '81%', 'red', '75%'],
    p7: ['8%', '66 M', 'red', '74%', 'red', '76%', 'green', '95%', 'green', '93%'],
    p8: ['64%','60%','56%','53%'],
    p9: ['7%','6%'],
    p10: ['4%','4%','4%'],
  }

  ceng = {
    p1: ['7%', '115 M', 'orange', '82%', 'red', '79%', 'orange', '86%', 'red', '78%'],
    p2: ['18%', '102 M', 'red', '77%', 'orange', '84%', 'orange', '84%', 'orange', '85%'],
    p3: ['8%', '93 M', 'red', '74%', 'orange', '82%', 'green', '92%', 'green', '92%'],
    p4: ['15%', '171 M', 'orange', '81%', 'green', '94%', 'red', '75%', 'green', '92%'],
    p5: ['19%', '118 M', 'red', '75%', 'green', '95%', 'green', '91%', 'orange', '87%'],
    p6: ['16%', '66 M', 'red', '75%', 'orange', '82%', 'red', '76%', 'red', '72%'],
    p7: ['16%', '108 M', 'red', '76%', 'red', '78%', 'orange', '80%', 'orange', '84%'],
    p8: ['51%','48%','44%','41%'],
    p9: ['6%','5%'],
    p10: ['4%','4%','4%'],
  }
 
  bar = {
    p1: ['6%', '83 M', 'red', '76%', 'orange', '89%', 'red', '72%', 'green', '96%'],
    p2: ['17%', '64 M', 'green', '95%', 'green', '90%', 'orange', '85%', 'red', '78%'],
    p3: ['17%', '46 M', 'green', '94%', 'orange', '80%', 'orange', '82%', 'orange', '84%'],
    p4: ['14%', '40 M', 'green', '93%', 'green', '93%', 'orange', '84%', 'green', '96%'],
    p5: ['15%', '52 M', 'red', '79%', 'red', '72%', 'orange', '88%', 'green', '95%'],
    p6: ['12%', '92 M', 'green', '95%', 'green', '81%', 'orange', '87%', 'green', '96%'],
    p7: ['18%', '27 M', 'red', '75%', 'orange', '83%', 'green', '95%', 'orange', '89%'],
    p8: ['75%','71%','66%','63%'],
    p9: ['8%','7%'],
    p10: ['4%','4%','4%'],
  }
  constructor(private routes:Router, private theme: NbThemeService, private route: ActivatedRoute, private _sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
    this.params =  this.route.snapshot.queryParamMap.get('id');
    if(this.params === '1'){
      this.title = 'Kalideres';
      console.log(this.kali);
      this.data = this.kali;
    }else if(this.params === '2'){
      this.title = 'Cengkareng'
      this.data = this.ceng
    }else if(this.params === '3'){
      this.title = 'Kebon Jeruk'
      this.data = this.jeruk
    }else if(this.params === '4'){
      this.title = 'Grogol'
      this.data = this.grogol
    }else if(this.params === '5'){
      this.title = 'Kembangan'
      this.data = this.kembang
    }else if(this.params === '6'){
      this.title = 'Jakarta Barat'
      this.data = this.bar
    }
    this.segment();
    this.pie();
  }

  getWidth(w) {
    return this._sanitizer.bypassSecurityTrustStyle(w);
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
                  {name: 'markPoint1', value: this.data.p8[0], xAxis: '1', yAxis:30},
                  {name: 'markPoint1', value: this.data.p8[1], xAxis: '4', yAxis:40},
                  {name: 'markPoint1', value: this.data.p8[2], xAxis: '7' , yAxis: 55},
                  {name: 'max' , value: this.data.p8[3], xAxis: '10', yAxis: 70},
  
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
                  {name: 'markPoint1', value: this.data.p9[0], xAxis: '6' , yAxis:30},
                  {name: 'markPoint1', value: this.data.p9[1], xAxis: '9' , yAxis: 34},
  
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
                  {name: 'markPoint1', value: this.data.p10[0], xAxis: '4', yAxis: 18},
                  {name: 'markPoint1', value: this.data.p10[1], xAxis:'7', yAxis: 19},
                  {name: 'markPoint1', value: this.data.p10[2], xAxis:'10', yAxis: 20},
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
