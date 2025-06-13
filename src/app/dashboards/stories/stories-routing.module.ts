import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories.component';
import { StoryViewComponent } from './components/story-view/story-view.component';

const routes: Routes = [
  { path: 'dashboard', component: StoriesComponent },
  { path: 'dashboard/:id', component: StoryViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule { }
