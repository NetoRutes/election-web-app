import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './services/myhttpinterceptor';
import { ManageElectionComponent } from './manage-election/manage-election.component';
import { ApirestService } from './services/apirest/apirest.service';
import { ElectionsListComponent } from './elections-list/elections-list.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'manageElections', component: ManageElectionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'elections', component: ElectionsListComponent },
  { path: "", redirectTo: "/login", pathMatch: "full"} 
];

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ManageElectionComponent,
    ElectionsListComponent
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    TabMenuModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    AuthenticationService, 
    ApirestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
