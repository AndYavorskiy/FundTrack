﻿import { NgModule } from "@angular/core";
import { OrganizationManagementComponent } from "./components/organization-management/organization-management.component";
import { CommonModule } from "@angular/common";
import { OrganizationManagementRoutingModule } from "./routes/organization-management-routing.module";
import { OrganizationManagementEventComponent } from "./components/organization-management-event/organization-management-event.component";
import { FormsModule } from "@angular/forms";
import { TruncatePipe } from "./shared/pipes/truncate.pipe";
import { OrganizationBannedComponent } from './shared/components/error-pages/organization-banned.component';
import { OrganizationManagementRequestComponent } from "./components/organization-management-request/organization-management-request.component";
import { OrganizationCreateRequestComponent } from "./components/organization-management-request/organization-create-request.component";
import { OrganizationDeleteRequestComponent } from "./components/organization-management-request/organization-delete-request.component";

@NgModule({
    declarations: [
        OrganizationManagementComponent,
        OrganizationManagementEventComponent,
        TruncatePipe,
        OrganizationBannedComponent,
        OrganizationManagementRequestComponent,
        OrganizationCreateRequestComponent,
        OrganizationDeleteRequestComponent,
        TruncatePipe
    ],
    imports: [
        FormsModule,
        CommonModule,
        OrganizationManagementRoutingModule
    ],
    exports: [
        TruncatePipe
    ]
})
export class OrganizationManagementModule { }