import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './components/view/landing-view/landing-view.component';
import { HeaderComponent } from './components/landing/header/header.component';
import { AboutComponent } from './components/landing/about/about.component';
import { SkillComponent } from './components/landing/skill/skill.component';
import { SchollComponent } from './components/landing/scholl/scholl.component';
import { JobComponent } from './components/landing/job/job.component';
import { ContactComponent } from './components/landing/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    HeaderComponent,
    AboutComponent,
    SkillComponent,
    SchollComponent,
    JobComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
