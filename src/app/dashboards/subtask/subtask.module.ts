import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtaskRoutingModule } from './subtask-routing.module';
import { SubtaskComponent } from './subtask.component';
import { CreateSubtaskComponent } from './components/create-subtask/create-subtask/create-subtask.component';
import { SharedModules } from 'src/app/shared.module';


@NgModule({
  declarations: [
    SubtaskComponent,
    CreateSubtaskComponent
  ],
  imports: [
    CommonModule,
    SubtaskRoutingModule,
    SharedModules
  ]
})
export class SubtaskModule { }
