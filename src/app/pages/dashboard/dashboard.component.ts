import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { color } from 'd3-color';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  currentTheme:any;
  type = 'Jakarta';
  types = ['Jakarta'];
  stage = "Life Stage"
  stages = ['Life Stages', 'Banking Products ', 'Customer Value']
  areai = 'Month';
  areas = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018'];
  month = "Jan 2018";
  months = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018'];
  options: any = {};
  losted: any = {};
  pies: any = {};
  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';
  data1:any;
  data2:any;
  data3:any;
  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';
  colors: any;
  themeSubscription: any;
  img:any;
  selectedMonth : any;
  indo: boolean = true;
  life = {
    month: [
      {
        name : 'Jan 2018',
        data : {
          1 : 10,
          2 : 40,
          3 : 20,
          4 : 30
        }
      },
      {
        name :'Feb 2018',
        data : {
          1 : 11,
          2 : 42,
          3 : 19,
          4 : 28
        }
      },
      {
        name : 'March 2018',
        data: {
          1 : 12,
          2 : 41,
          3 : 18,
          4 : 29
        }
      },
      {
        name :'April 2018', 
        data : {
          1 : 11,
          2 : 40,
          3 : 19,
          4 : 30
        }
      },
      {
        name:'May 2018',
        data: {
          1 : 10,
          2 : 42,
          3 : 20,
          4 : 28
        }
      },
      {
        name:'June 2018', 
        data: {
          1 : 9,
          2 : 41,
          3 : 21,
          4 : 29
        }
      }
    ]
  }

  customer = {
    month: [
      {
        name : 'Jan 2018',
        data : {
          1 : 25,
          2 : 30,
          3 : 20,
          4 : 25
        }
      },
      {
        name :'Feb 2018',
        data : {
          1 : 27,
          2 : 32,
          3 : 21,
          4 : 20
        }
      },
      {
        name : 'March 2018',
        data: {
          1 : 31,
          2 : 31,
          3 : 22,
          4 : 16
        }
      },
      {
        name :'April 2018', 
        data : {
          1 : 32,
          2 : 31,
          3 : 23,
          4 : 18
        }
      },
      {
        name:'May 2018',
        data: {
          1 : 31,
          2 : 29,
          3 : 23,
          4 : 14
        }
      },
      {
        name:'June 2018', 
        data: {
          1 : 32,
          2 : 30,
          3 : 20,
          4 : 18
        }
      }
    ]
  }

  bank = {
    month: [
      {
        name : 'Jan 2018',
        data : {
          1 : 25,
          2 : 40,
          3 : 10,
          4 : 5,
          5 : 20
        }
      },
      {
        name :'Feb 2018',
        data : {
          1 : 26,
          2 : 41,
          3 : 10,
          4 : 6,
          5 : 17
          
        }
      },
      {
        name : 'March 2018',
        data: {
          1 : 26,
          2 : 41,
          3 : 12,
          4 : 8,
          5 : 12
        }
      },
      {
        name :'April 2018', 
        data : {
          1 : 27,
          2 : 41,
          3 : 12,
          4 : 8,
          5 : 12
        }
      },
      {
        name:'May 2018',
        data: {
          1 : 28,
          2 : 42,
          3 : 13,
          4 : 9,
          5 : 8
        }
      },
      {
        name:'June 2018', 
        data: {
          1 : 28,
          2 : 42,
          3 : 13,
          4 : 10,
          5 : 7
        }
      }
    ]
  }

  constructor(private routes:Router, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
  ngOnInit(): void {
    this.areaChart();
    this.lost();
    //this.pie();
    this.selectedMonth = 'Jan 2018';
    //console.log(this.life.month)
    this.selctLost('Life Stages');
    this.selectMonth('Jan 2018');
  }

  tabs(event){
    //console.log(event.tabTitle)
    if(event.tabTitle === 'Customer Feedback'){
      this.img = './assets/images/cf.png';
    }else{
      this.img = './assets/images/sm.png';
    }
  }

  selctLost(p){
    this.stage = p;
    if(p === 'Life Stages'){
      this.pie();
    }else if(p === 'Banking Products '){
      this.banking();
    }else{
      this.segment();
    }
  }

  selectMonth(t){
    console.log(t)
    console.log(this.stage)
    // this.selectedMonth = t;
    this.month = t;
   // this.pie();
    if(this.stage === 'Life Stages'){
      this.pie();
    }else if(this.stage === 'Banking Products '){
      this.banking();
    }else{
      this.segment();
    }
  }

  areaChart(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.primary, colors.danger],
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
              magicType: {show: true, type: ['line'], title:{line:'Line Chart'}},
              restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
              saveAsImage : {show: true, title: 'Save', name:'New vs Churned Customers', type: 'png', icon:'image://./assets/images/icon/save.png'}
          }
      },
      calculable : true,
        legend: {
          data: ['New Customer','Churn', 'Net Churn'],
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
            splitArea:{
              show:true,
              areaStyle:{
               color:['rgba(255,0,0,0.0)','rgba(255,0,0,0.0)','rgba(255,0,0,0.0)','rgba(0,0,0,.2)','rgba(0,0,0,.2)','rgba(0,0,0,.2)']
               }
             },
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
              'Jun'
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
              'Actual',
              'Actual',
              'Actual',
              'Prediction',
              'Prediction',
              'Prediction'
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
            name: 'New Customer',
            type: 'bar',
            xAxisIndex: 1,
            smooth: true,
            data: [23000, 29000, 21000, 18000, 17000, 17500]
          },
          {
            name: 'Churn',
            type: 'bar',
            xAxisIndex: 1,
            smooth: true,
            data: [12000, 22000, 23000, 24500, 20000, 15000]
          },
          {
            name: 'Net Churn',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbolSize: 10,
            data: [24000, 18000, 12000, 7000, 9000, 11500],
            markPoint : {
              symbol:'circle',
              symbolSize: 35,
              data : [
                {name: 'markPoint1', value: 48+'%', xAxis: 'Jan', yAxis: 24000},
                {name: 'markPoint1', value: 24+'%', xAxis:'Feb', yAxis: 18000},
                {name: 'markPoint1', value: -10+'%', xAxis:'Mar', yAxis: 12000},
                {name: 'markPoint1', value: -36+'%', xAxis:'Apr', yAxis: 7000},
                {name: 'markPoint1', value: -18+'%', xAxis:'May', yAxis: 9000},
                {name: 'markPoint1', value: 14+'%', xAxis:'Jun', yAxis: 11500},
              ]
            },
          },
        ],
      };
    });
};

lost(){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors: any = config.variables;
    const echarts: any = config.variables.echarts;

    this.losted = {
      backgroundColor: echarts.bg,
      color: [colors.warning, colors.primary ],
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
            saveAsImage : {show: true, title: 'Save', name:'Potential Loss due to churn (in Million)', icon:'image://./assets/images/icon/save.png'}
        }
    },
      legend: {
        left: 'left',
        data: ['Potential Loss due to churn (in Million)', '2 Year Average'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      xAxis: [
        {
          
          type: 'category',
          splitArea:{
            show:true,
            areaStyle:{
             color:['rgba(255,0,0,0.0)','rgba(255,0,0,0.0)','rgba(255,0,0,0.0)','rgba(0,0,0,.2)','rgba(0,0,0,.2)','rgba(0,0,0,.2)']
             }
           },
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: colors.primary,
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
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#fff',
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
                  'Prediction  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              },
            },
          },
          data: [
            'Actual',
            'Actual',
            'Actual',
            'Prediction',
            'Prediction',
            'Prediction'
          ],
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
        
          name: '2 Year Average',
          type: 'line',
          smooth:true,
          data: [450,450,450,450,450,450],
          markPoint : {
            symbol:'circle',
            symbolSize: 25,
            data : [
              {name: 'markPoint1', value: 450, xAxis: 'Jun', yAxis: 450},
            ]
          },
        },
        {
          showAllSymbol: true,
          symbolSize: 10,
          smooth: true,
          name: 'Potential Loss due to churn (in Million)',
          type: 'line',
          data: [300,400,450,500,600,550],
          markPoint : {
            symbol:'circle',
            symbolSize: 35,
            data : [
              {name: 'markPoint1', value: 300, xAxis: 'Jan', yAxis: 300},
              {name: 'markPoint1', value: 400, xAxis:'Feb', yAxis: 400},
              {name: 'markPoint1', value: 450, xAxis:'Mar', yAxis: 450},
              {name: 'markPoint1', value: 500, xAxis:'Apr', yAxis: 500},
              {name: 'markPoint1', value: 600, xAxis:'May', yAxis: 600},
              {name: 'markPoint1', value: 550, xAxis:'Jun', yAxis: 550},
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

    this.life.month.forEach(arr => {  
      if(arr.name == this.month){
        this.data1 = arr.data;
      }
    });

    this.pies = {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%',
      },
      toolbox: {
        show : false,
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
            magicType: {show: true, type: ['line'], title:{line:'Line Chart'}},
            restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
            saveAsImage : {show: true, title: 'Save', name:'Loss Contribution', type: 'png', icon:'image://./assets/images/icon/save.png'}
        }
    },
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['Millenials', 'Young Adult', 'Family', 'Traditional'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Loss Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: this.data1['1'], name: 'Millenials' },
            { value: this.data1['2'], name: 'Young Adult' },
            { value: this.data1['3'], name: 'Family' },
            { value: this.data1['4'], name: 'Traditional' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  });
}

banking(){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors = config.variables;
    const echarts: any = config.variables.echarts;

    this.bank.month.forEach(arr => {  
      if(arr.name == this.month){
        this.data2 = arr.data;
      }
    });

    this.pies = {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%',
      },
      toolbox: {
        show : false,
        orient: 'horizontal',
        x: 'right',
        y: 'bottom',
        z: 3,
        color : ['#1e90ff','#22bb22','#4b0082'],
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#FFFFF', 
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false, title: 'Data View'},
            magicType: {show: true, type: ['bar'], title:{bar:'Bar Chart'}},
            restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
            saveAsImage : {show: true, title: 'Save', name:'Loss Contribution (banking)', icon:'image://./assets/images/icon/save.png'}
        }
    },
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['Creadit Card', 'Saving', 'Insurance', 'Investment', 'Loan'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Loss Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: this.data2['1'], name: 'Creadit Card' },
            { value: this.data2['2'], name: 'Saving' },
            { value: this.data2['3'], name: 'Insurance' },
            { value: this.data2['4'], name: 'Investment' },
            { value: this.data2['5'], name: 'Loan' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  });
}


segment(){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors = config.variables;
    const echarts: any = config.variables.echarts;
    this.customer.month.forEach(arr => {  
      if(arr.name == this.month){
        this.data3 = arr.data;
      }
    });
    this.pies = {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%',
      },
      toolbox: {
        show : false,
        orient: 'horizontal',
        x: 'right',
        y: 'bottom',
        z: 3,
        color : ['#1e90ff','#22bb22','#4b0082'],
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#FFFFF', 
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false, title: 'Data View'},
            magicType: {show: true, type: ['bar'], title:{bar:'Bar Chart'}},
            restore : {show: true, title:'Original', icon:'image://./assets/images/icon/restore.png'},
            saveAsImage : {show: true, title: 'Save', name:'Loss Contribution', type: 'png', icon:'image://./assets/images/icon/save.png'}
        }
    },
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['Hi Net', 'Deal Hunters', 'Occasional', 'Opportunity'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Loss Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: this.data3['1'], name: 'Hi Net' },
            { value: this.data3['2'], name: 'Deal Hunters' },
            { value: this.data3['3'], name: 'Occasional' },
            { value: this.data3['4'], name: 'Opportunity' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  });
}


  mapBtn(p){
    if(p === 0){
      this.indo = false
    }else{
      this.routes.navigateByUrl('/churn/lost/area?id='+p)
    }
  }

  goAway(){
    this.routes.navigateByUrl('/churn/maps/gmaps')
    //go to gmap
  }
}
