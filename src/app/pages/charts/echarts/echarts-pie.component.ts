import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {d}%',
        },
        legend: {
          orient: 'horizontal',
          top: 'top',
          data: ['Millenials', 'Young Adult', 'Famuilies', 'Traditional', 'XX%'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Lost Contribution',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: 10, name: 'Millenials' },
              { value: 30, name: 'Young Adult' },
              { value: 20, name: 'Famuilies' },
              { value: 30, name: 'Traditional' },
              { value: 10, name: 'XX%' },
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

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
