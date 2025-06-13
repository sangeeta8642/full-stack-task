import { Routes } from '@angular/router';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UnauthComponent } from './pages/unauth/unauth.component';
import { authOnlyGuard, guestOnlyGuard, roleBasedGuard } from './auth/auth.gaurd';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [authOnlyGuard]
  },
  {
    path: 'boards',
    canActivate: [authOnlyGuard],
    loadChildren: () =>
      import('./dashboards/boards/boards-routing.module').then(
        (m) => m.BoardRoutingModule
      ),
  },
  {
    path: 'sprints'
    , canActivate: [authOnlyGuard],
    loadChildren: () =>
      import('./dashboards/sprints/sprints-routing.module').then(
        (m) => m.SprintRoutingModule
      ),
  },
  {
    path: 'stories',
    canActivate: [authOnlyGuard],
    loadChildren: () =>
      import('./dashboards/stories/stories-routing.module').then(
        (m) => m.StoriesRoutingModule
      ),
  },
  {
    path: 'releases',
    canActivate: [authOnlyGuard],
    loadChildren: () =>
      import('./dashboards/releases/releases-routing.module').then(
        (m) => m.ReleaseRoutingModule
      ),
  },
  {
    path: 'epic',
    canActivate: [authOnlyGuard],
    loadChildren: () =>
      import('./dashboards/epics/epics-routing.module').then(
        (m) => m.EpicsRoutingModule
      ),
  },
  {
    path: 'user',
    canActivate: [roleBasedGuard],
    loadChildren: () =>
      import('./dashboards/users/users-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'create',
    component: FormViewComponent,
    canActivate: [roleBasedGuard]
  },
  {
    path: 'update/:dashboard/:id',
    component: FormViewComponent,
    canActivate: [roleBasedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestOnlyGuard]
  },
  {
    path: 'unauth',
    component: UnauthComponent,
  },
];
