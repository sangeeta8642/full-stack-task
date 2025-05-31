import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpicsComponent } from './epics.component';

const routes: Routes = [{ path: 'dashboard', component: EpicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpicsRoutingModule {}
