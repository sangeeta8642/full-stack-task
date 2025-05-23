import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoardsComponent } from './dashboards/boards/boards.component';
import { SprintsComponent } from './dashboards/sprints/sprints.component';
import { StoriesComponent } from './dashboards/stories/stories.component';
import { ReleasesComponent } from './dashboards/releases/releases.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { LoginComponent } from './pages/login/login.component';
import { EpicsComponent } from './dashboards/epics/epics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'boards', children: [
      { path: 'dashboard', component: BoardsComponent }
    ]
  },
  {
    path: 'sprints', children: [
      { path: 'dashboard', component: SprintsComponent }
    ]
  },
  {
    path: 'stories', children: [
      { path: 'dashboard', component: StoriesComponent }
    ]
  },
  {
    path: 'releases', children: [
      { path: 'dashboard', component: ReleasesComponent }
    ]
  },
  {
    path: 'epic', children: [
      { path: 'dashboard', component: EpicsComponent }
    ]
  },
  {
    path: 'create', component: FormViewComponent
  },
  {
    path: 'login', component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
