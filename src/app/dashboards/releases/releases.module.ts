import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModules } from 'src/app/shared.module';
import { ReleasesComponent } from './releases.component';

@NgModule({
  declarations: [ReleasesComponent],
  imports: [CommonModule, SharedModules],
  exports: [ReleasesComponent],
})
export class ReleaseModule {}
