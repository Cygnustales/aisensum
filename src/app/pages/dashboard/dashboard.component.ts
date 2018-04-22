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
  stages = ['Life Stages', 'Banking Products ', 'Segment']
  areai = 'Month';
  areas = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018'];
  month = "Month";
  months = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018'];
  options: any = {};
  losted: any = {};
  pies: any = {};
  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';
  colors: any;
  themeSubscription: any;
  img:any;

  constructor(private routes:Router, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
  ngOnInit(): void {
    this.areaChart();
    this.lost();
    this.pie();
  }

  tabs(event){
    console.log(event.tabTitle)
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
            saveAsImage : {show: true, title: 'Save', name:'Lost Contribution', type: 'png', icon:'image://./assets/images/icon/save.png'}
        }
    },
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['Millenials', 'Young Adult', 'Famuilies', 'Traditional'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Lost Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 10, name: 'Millenials' },
            { value: 40, name: 'Young Adult' },
            { value: 20, name: 'Families' },
            { value: 30, name: 'Traditional' },
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
            saveAsImage : {show: true, title: 'Save', name:'Lost Contribution (banking)', icon:'image://./assets/images/icon/save.png'}
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
          name: 'Lost Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 25, name: 'Creadit Card' },
            { value: 40, name: 'Saving' },
            { value: 10, name: 'Insurance' },
            { value: 5, name: 'Investment' },
            { value: 20, name: 'Loan' },
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
            saveAsImage : {show: true, title: 'Save', name:'Lost Contribution', type: 'png', icon:'image://./assets/images/icon/save.png'}
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
          name: 'Lost Contribution',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 25, name: 'Hi Net' },
            { value: 30, name: 'Deal Hunter' },
            { value: 20, name: 'Occasional' },
            { value: 25, name: 'Opportunity' },
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
    this.routes.navigateByUrl('/churn/lost/area?id='+p)
  }

  goAway(){
    this.routes.navigateByUrl('/churn/maps/gmaps')
    //go to gmap
  }
}
