import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSelectModule } from '@angular/material/select';;
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table'

export const matModules = [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatStepperModule,
    // MatFormFieldModule,
    MatInputModule,
    // MatButtonModule
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
]

export const card_colours = [
    '#f4b8f4', '#9afc9a', '#9c9cfe', '#f8c971', '#f8f867', '#89dcf8'
]

export const users = [
    {
        id: 1,
        name: "manager",
        role: "manager",
        username: "manager",
        password: "manager"
    },
    {
        id: 2,
        name: "team lead",
        role: "team lead",
        username: "lead1",
        password: "lead"
    },
    {
        id: 3,
        name: "developer",
        role: "developer",
        username: "developer",
        password: "developer"
    }
]