import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistirPage } from './assistir.page';

const routes: Routes = [
  {
    path: '',
    component: AssistirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistirPageRoutingModule {}
