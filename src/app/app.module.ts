import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GetHelpComponent } from './get-help/get-help.component';
import { IssueComponent } from './issue/issue.component';
import { ActionComponent } from './action/action.component';
import { ContactComponent } from './contact/contact.component';
import { HousingComponent } from './housing/housing.component';
import { FoodComponent } from './food/food.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { CauseComponent } from './cause/cause.component';
import { ScreeningComponent } from './screening/screening.component';
import { JobComponent } from './job/job.component';
import { ViolenceComponent } from './violence/violence.component';
import { ProstitutionComponent } from './prostitution/prostitution.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { ChildcareComponent } from './childcare/childcare.component';
import { FinancialComponent } from './financial/financial.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  {path: 'help', component:GetHelpComponent},
  {path: 'help/housing', component:HousingComponent},
  {path: 'help/food', component:FoodComponent},
  {path: 'help/job', component:JobComponent},
  {path: 'help/domestic-violence', component:ViolenceComponent},
  {path: 'help/prostitution', component:ProstitutionComponent},
  {path: 'help/healthcare', component:HealthcareComponent},
  {path: 'help/childcare', component:ChildcareComponent},
  {path: 'help/financial', component:FinancialComponent},
  {path: 'issue', component:IssueComponent},
  {path: 'action', component:ActionComponent},
  {path:'action/volunteer', component:VolunteerComponent},
  {path:'action/cause', component:CauseComponent},
  {path:'action/screening', component:ScreeningComponent},
  {path: 'contact', component:ContactComponent},
  { path: '', component: HomeComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GetHelpComponent,
    IssueComponent,
    ActionComponent,
    ContactComponent,
    HousingComponent,
    FoodComponent,
    VolunteerComponent,
    CauseComponent,
    ScreeningComponent,
    JobComponent,
    ViolenceComponent,
    ProstitutionComponent,
    HealthcareComponent,
    ChildcareComponent,
    FinancialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export class NgbdCarouselConfig {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
  }
}
