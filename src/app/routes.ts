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
  {
    path: 'boards',
    children: [{ path: 'dashboard', component: BoardsComponent }],
  },
  {
    path: 'sprints',
    children: [{ path: 'dashboard', component: SprintsComponent }],
  },
  {
    path: 'stories',
    children: [{ path: 'dashboard', component: StoriesComponent }],
  },
  {
    path: 'releases',
    children: [{ path: 'dashboard', component: ReleasesComponent }],
  },
  {
    path: 'epic',
    children: [{ path: 'dashboard', component: EpicsComponent }],
  },
  {
    path: 'user',
    children: [{ path: 'dashboard', component: UsersComponent }],
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
