import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCursoPage } from './show-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCursoPageRoutingModule {}
