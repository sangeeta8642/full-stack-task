import { Routes } from '@angular/router';
import { BoardsComponent } from './dashboards/boards/boards.component';
import { EpicsComponent } from './dashboards/epics/epics.component';
import { ReleasesComponent } from './dashboards/releases/releases.component';
import { SprintsComponent } from './dashboards/sprints/sprints.component';
import { StoriesComponent } from './dashboards/stories/stories.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './dashboards/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'boards',
  //   children: [{ path: 'dashboard', component: BoardsComponent }],
  // },
  {
    path: 'boards',
    loadChildren: () =>
      import('./dashboards/boards/boards-routing.module').then(
        (m) => m.BoardRoutingModule
      ),
  },
  // {
  //   path: 'sprints',
  //   children: [{ path: 'dashboard', component: SprintsComponent }],
  // },

  {
    path: 'sprints',
    loadChildren: () =>
      import('./dashboards/sprints/sprints-routing.module').then(
        (m) => m.SprintRoutingModule
      ),
  },
  // {
  //   path: 'stories',
  //   children: [{ path: 'dashboard', component: StoriesComponent }],
  // },
  {
    path: 'stories',
    loadChildren: () =>
      import('./dashboards/stories/stories-routing.module').then(
        (m) => m.StoriesRoutingModule
      ),
  },
  // {
  //   path: 'releases',
  //   children: [{ path: 'dashboard', component: ReleasesComponent }],
  // },
  {
    path: 'releases',
    loadChildren: () =>
      import('./dashboards/releases/releases-routing.module').then(
        (m) => m.ReleaseRoutingModule
      ),
  },
  // {
  //   path: 'epic',
  //   children: [{ path: 'dashboard', component: EpicsComponent }],
  // },

  {
    path: 'epic',
    loadChildren: () =>
      import('./dashboards/epics/epics-routing.module').then(
        (m) => m.EpicsRoutingModule
      ),
  },
  // {
  //   path: 'user',
  //   children: [{ path: 'dashboard', component: UsersComponent }],
  // },
  {
    path: 'user',
    loadChildren: () =>
      import('./dashboards/users/users-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'create',
    component: FormViewComponent,
  },
  {
    path: 'update/:dashboard/:id',
    component: FormViewComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
