import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCursoPageRoutingModule } from './show-curso-routing.module';

import { ShowCursoPage } from './show-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCursoPageRoutingModule
  ],
  declarations: [ShowCursoPage]
})
export class ShowCursoPageModule {}
