import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { EpicsComponent } from './epics.component';

@NgModule({
  declarations: [EpicsComponent],
  imports: [CommonModule, SharedModules],
  exports: [EpicsComponent],
})
export class EpicsModule {}
