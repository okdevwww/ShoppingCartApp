
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDialogComponent } from './order-dialog.component';
import { DetailItemModule, SectionModule, RadioGroupModule } from '../../components';

@NgModule({
    declarations: [
      OrderDialogComponent,
    ],
    imports: [
      CommonModule,
      DetailItemModule,
      SectionModule,
      RadioGroupModule,
    ],
    exports: [
      OrderDialogComponent
    ],
    providers: [
    ],
})

export class OrderDialogModule {}
