﻿import { NgModule } from "@angular/core";
import { OfferManagementRoutingModule } from "./routes/offer-management-routing.module";
import { CommonModule } from "@angular/common";
import { OrganizationManagementModule } from "./organization-management.module";
import { FormsModule } from '@angular/forms';
import { OfferItemManagementComponent } from "./components/offer-management/offer-list/offer-management.component";
import { OfferListComponent } from "./components/offer-management/offer-list/offer-list.component";
import { OfferDetailComponent } from "./components/offer-management/offer-list/offer-detail.component";



@NgModule({
    declarations: [
        OfferItemManagementComponent,
        OfferListComponent,
        OfferDetailComponent
    ],
    imports: [
        CommonModule,
        OfferManagementRoutingModule,
        OrganizationManagementModule,
        FormsModule
        
    ]
})
export class OfferManagementModule { }