import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CountCardComponent } from './components/count-card/count-card.component';
import { matModules } from "./utils/constants";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TableViewComponent } from './components/table-view/table-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RoleDialogComponent } from './components/role-dialog/role-dialog.component';

// const matModules = [

// ]


@NgModule({
    imports: [
        // MatSidenavModule,s
        // MatIconModule,
        // MatButtonModule,
        // MatButtonModule,
        // MatToolbarModule,
        // MatFormFieldModule
        ...matModules,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule
        // CountCardComponent
    ],
    exports: [
        // MatSidenavModule,
        // MatIconModule,
        // MatButtonModule,
        // MatButtonModule,
        // MatToolbarModule,
        // MatFormFieldModule,
        // CountCardComponent
        ...matModules,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CountCardComponent,
        TableViewComponent
    ],
    providers: [],
    declarations: [
        CountCardComponent,
        TableViewComponent,
        RoleDialogComponent
    ]
})

export class SharedModules { }