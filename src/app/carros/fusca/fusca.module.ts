import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuscaPageRoutingModule } from './fusca-routing.module';

import { FuscaPage } from './fusca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuscaPageRoutingModule
  ],
  declarations: [FuscaPage]
})
export class FuscaPageModule {}
