import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [StoriesComponent],
  imports: [CommonModule, SharedModules],
  exports: [StoriesComponent],
})
export class StoriesModule {}
