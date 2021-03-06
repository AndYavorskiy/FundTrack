﻿import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MapComponent } from "./shared/components/map/map.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UniversalModule } from 'angular2-universal';
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule } from "@agm/core";
import { MapRoutingModule } from "./routes/map-routing.module";
import { TestMap } from "./components/test-map/test-map";

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD7ERhdsJHPHRAkxeRuBm4e0pekX1H2lZ8',
            libraries: ['places'],
            language: 'uk'
        }),
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MapRoutingModule
    ],
    declarations: [
        TestMap,
        MapComponent
    ],
    exports: [
        TestMap,
        MapComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class MapModule { }
