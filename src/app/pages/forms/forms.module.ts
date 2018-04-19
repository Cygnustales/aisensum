import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
