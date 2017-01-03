import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GetHelpComponent } from './get-help/get-help.component';
import { FilmComponent } from './film/film.component';
import { IssueComponent } from './issue/issue.component';
import { ActionComponent } from './action/action.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  {path: 'help', component:GetHelpComponent},
  {path: 'issue', component:IssueComponent},
  {path: 'action', component:ActionComponent},
  {path: 'contact', component:ContactComponent},

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
    FilmComponent,
    IssueComponent,
    ActionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
