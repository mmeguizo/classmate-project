import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbDatepickerModule,
  NbWindowModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbCalendarModule,
} from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DataTablesModule } from "angular-datatables";
import { UpdateProfileComponent } from "../shared/update-profile/update-profile.component";
import { UploadsComponent } from "../shared/uploads/uploads.component";
import { FilesComponent } from "./files/files.component";

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbCheckboxModule,
  NbDialogModule.forChild(),
  NbInputModule,
  NbPopoverModule,
  NbCalendarModule,
];

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    // BsDropdownModule.forRoot(),
    NbActionsModule,
    SharedModule,
    DataTablesModule,
    // ImageCropperModule,
    ...NB_MODULES,
    // NgApexchartsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UpdateProfileComponent,
    FilesComponent,
    UploadsComponent,
  ],
  entryComponents: [UpdateProfileComponent, FilesComponent, UploadsComponent],
  exports: [],
  providers: [UpdateProfileComponent, FilesComponent, UploadsComponent],
})
export class AdminModule {}
