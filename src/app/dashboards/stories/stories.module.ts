import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { StoriesComponent } from './stories.component';
import { StoryViewComponent } from './components/story-view/story-view.component';

@NgModule({
  declarations: [StoriesComponent, StoryViewComponent],
  imports: [CommonModule, SharedModules],
  exports: [StoriesComponent],
})
export class StoriesModule {}
