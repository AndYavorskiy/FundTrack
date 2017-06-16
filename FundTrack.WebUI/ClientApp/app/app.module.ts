import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeModule } from "./home.module";
import { SharedModule } from "./shared.module";
import { AuthorizationModule } from "./authorization.module";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        HomeModule,
        SharedModule,
        AuthorizationModule,
        RouterModule.forRoot([
        ])
    ]
})
export class AppModule { }
