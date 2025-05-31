import { NgModule } from '@angular/core';
import { CountCardComponent } from './components/count-card/count-card.component';
import { matModules } from './utils/constants';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableViewComponent } from './components/table-view/table-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleDialogComponent } from './components/role-dialog/role-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    ...matModules,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    ...matModules,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CountCardComponent,
    NavbarComponent,
    SidebarComponent,
    TableViewComponent,
  ],
  providers: [],
  declarations: [
    CountCardComponent,
    TableViewComponent,
    RoleDialogComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModules {}
