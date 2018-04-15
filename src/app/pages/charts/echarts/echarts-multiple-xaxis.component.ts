import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['Prediction'],
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
                color: colors.info,
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
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
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
            data:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
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
            name: 'Prediction',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [11000,7000,12000,10000,13000,9000],
          },
          
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
