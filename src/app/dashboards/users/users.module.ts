import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, SharedModules],
  exports: [UsersComponent],
})
export class UsersModule {}
