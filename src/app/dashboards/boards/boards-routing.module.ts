import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';

const routes: Routes = [{ path: 'dashboard', component: BoardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
