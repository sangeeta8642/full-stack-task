import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { SprintsComponent } from './sprints.component';
import { SprintViewComponent } from './components/sprint-view/sprint-view.component';

@NgModule({
  declarations: [SprintsComponent, SprintViewComponent],
  imports: [CommonModule, SharedModules],
  exports: [SprintsComponent],
})
export class SprintsModule {}
