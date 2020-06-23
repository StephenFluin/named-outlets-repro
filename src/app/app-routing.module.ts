import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


const routes: Routes = [
  {path: '', component: Home1Component},
  {path: '2', component: Home2Component},
  {path: '', component: Child1Component, outlet: 'tutorial'},
  {path: 'b', component: Child2Component, outlet: 'tutorial'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
