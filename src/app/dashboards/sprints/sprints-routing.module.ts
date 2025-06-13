import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintsComponent } from './sprints.component';
import { SprintViewComponent } from './components/sprint-view/sprint-view.component';

const routes: Routes = [
  { path: 'dashboard', component: SprintsComponent },
  { path: 'dashboard/:id', component: SprintViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprintRoutingModule { }
