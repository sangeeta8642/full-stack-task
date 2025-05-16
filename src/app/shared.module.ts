import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CountCardComponent } from './components/count-card/count-card.component';
import { matModules } from "./utils/constants";

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
        ...matModules
    ],
    exports: [
        // MatSidenavModule,
        // MatIconModule,
        // MatButtonModule,
        // MatButtonModule,
        // MatToolbarModule,
        // MatFormFieldModule,
        // CountCardComponent
        ...matModules
    ],
    providers: [],
    declarations: [
      CountCardComponent
    ]
})

export class SharedModules { }