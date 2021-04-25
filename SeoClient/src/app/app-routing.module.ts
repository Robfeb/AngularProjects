import { Seo3Component } from './seo3/seo3.component';
import { Seo2Component } from './seo2/seo2.component';
import { Seo1Component } from './seo1/seo1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'seo1',
    component: Seo1Component
  },
  {
    path: 'seo2',
    component: Seo2Component
  },
  {
    path: 'seo3',
    component: Seo3Component
  },
  {
    path: '**',
    component: Seo1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
