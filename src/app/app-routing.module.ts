import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BoardsComponent } from './dashboards/boards/boards.component';
import { SprintsComponent } from './dashboards/sprints/sprints.component';
import { StoriesComponent } from './dashboards/stories/stories.component';
import { ReleasesComponent } from './dashboards/releases/releases.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
