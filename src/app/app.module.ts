import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModules } from './shared.module';
import { FormsModule } from '@angular/forms';

import {
  provideAnimations,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './pages/home/home.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { LoginComponent } from './pages/login/login.component';
import { appReducer } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardModule } from './dashboards/boards/boards.module';
import { EpicsModule } from './dashboards/epics/epics.module';
import { SprintsModule } from './dashboards/sprints/sprints.module';
import { StoriesModule } from './dashboards/stories/stories.module';
import { UsersModule } from './dashboards/users/users.module';
import { ReleaseModule } from './dashboards/releases/releases.module';
import { BoardEffect } from './dashboards/boards/store/boards.effects';
import { UserEffect } from './dashboards/users/store/users.effects';
import { UnauthComponent } from './pages/unauth/unauth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SprintEffect } from './dashboards/sprints/store/sprints.effects';
import { RoleEffect } from './ngrx/roles/role.effects';
import { EpicEffect } from './dashboards/epics/store/epics.effects';
import { StoryEffect } from './dashboards/stories/store/stories.effects';
import { SubtaskModule } from './dashboards/subtask/subtask.module';
import { SubtaskEffects } from './dashboards/subtask/store/subtask.effects';
import { ReleaseEffect } from './dashboards/releases/store/releases.effects';

const customModuls = [
  SprintsModule,
  BoardModule,
  EpicsModule,
  UsersModule,
  SubtaskModule,
  StoriesModule,
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormViewComponent,
    LoginComponent,
    UnauthComponent,
  ],
  imports: [
    ...customModuls,
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
    ReleaseModule,
    // NavbarComponent
    SharedModules,
    FormsModule,
    BrowserAnimationsModule,

    // CountCardComponent,

    StoreModule.forRoot(appReducer),

    EffectsModule.forRoot([
      BoardEffect,
      UserEffect,
      SprintEffect,
      RoleEffect,
      EpicEffect,
      StoryEffect,
      SubtaskEffects,
      ReleaseEffect
    ]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimations(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
