import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";

import { MyApp } from "./app.component";

import { UsersPage } from "../pages/users/users";
import { ReposPage } from "../pages/repos/repos";
import { OrganisationsPage } from "../pages/organisations/organisations";

@NgModule({
  declarations: [MyApp, UsersPage, ReposPage, OrganisationsPage],
  //imports: [IonicModule.forRoot(MyApp)],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, UsersPage, ReposPage, OrganisationsPage],
  providers: []
})
export class AppModule {}
