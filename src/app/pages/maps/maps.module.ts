import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EchartsBarComponent } from '../charts/echarts/echarts-bar.component';


@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    
  ],
  exports: [],
  declarations: [
    ...routedComponents,
    EchartsBarComponent
  ],
})
export class MapsModule { }
