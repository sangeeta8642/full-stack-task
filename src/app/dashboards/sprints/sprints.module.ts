import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { SprintsComponent } from './sprints.component';

@NgModule({
  declarations: [SprintsComponent],
  imports: [CommonModule, SharedModules],
  exports: [SprintsComponent],
})
export class SprintsModule {}
