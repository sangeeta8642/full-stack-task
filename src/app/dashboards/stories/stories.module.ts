import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { StoriesComponent } from './stories.component';
import { StoryViewComponent } from './components/story-view/story-view.component';
import { CreateCommentComponent } from './components/create-comment/create-comment/create-comment.component';

@NgModule({
  declarations: [StoriesComponent, StoryViewComponent, CreateCommentComponent],
  imports: [CommonModule, SharedModules],
  exports: [StoriesComponent],
})
export class StoriesModule {}
