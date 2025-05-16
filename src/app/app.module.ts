import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModules } from './shared.module';
import { FormsModule } from '@angular/forms';

import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matModules } from './utils/constants';
import { StoreModule } from '@ngrx/store';
import { BoardsComponent } from './dashboards/boards/boards.component';
import { SprintsComponent } from './dashboards/sprints/sprints.component';
import { ReleasesComponent } from './dashboards/releases/releases.component';
import { StoriesComponent } from './dashboards/stories/stories.component';

@NgModule({
  declarations: [
    // ...matModules,
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BoardsComponent,
    SprintsComponent,
    ReleasesComponent,
    StoriesComponent
  ],
  imports: [
    ...matModules,
    BrowserModule,
    AppRoutingModule,
    // NavbarComponent
    SharedModules,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
