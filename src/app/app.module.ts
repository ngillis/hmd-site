import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  {path: 'help', component:GetHelpComponent},
  {path: 'help/housing', component:HousingComponent},
  {path: 'help/food', component:FoodComponent},
  {path: 'issue', component:IssueComponent},
  {path: 'action', component:ActionComponent},
  {path:'action/volunteer', component:VolunteerComponent},
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
    VolunteerComponent
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
