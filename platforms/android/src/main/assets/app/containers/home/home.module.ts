import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { OrderDialogModule } from '../order-dialog';

import {
  ProductGroupComponent,
  ProductItemComponent,
  DetailItemModule,
 } from '../../components';

@NgModule({
    declarations: [
      HomeComponent,
      ProductGroupComponent,
      ProductItemComponent,
    ],
    imports: [
      CommonModule,
      DetailItemModule,
      OrderDialogModule,      
    ],

    providers: [
    ]
})

export class HomeModule {}
