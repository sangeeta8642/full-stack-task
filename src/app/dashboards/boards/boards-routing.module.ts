import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards.component';
import { authOnlyGuard, roleBasedGuard } from 'src/app/auth/auth.gaurd';

const routes: Routes = [{ path: 'dashboard', component: BoardsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule { }
