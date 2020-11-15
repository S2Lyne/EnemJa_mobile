import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistirPageRoutingModule } from './assistir-routing.module';

import { AssistirPage } from './assistir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistirPageRoutingModule
  ],
  declarations: [AssistirPage]
})
export class AssistirPageModule {}
