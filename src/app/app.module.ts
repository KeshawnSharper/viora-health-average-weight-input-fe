import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideContentComponent } from './side-content/side-content.component';
import {MatInputModule} from '@angular/material/input';
import { TrendsComponent } from './trends/trends.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    SidenavComponent,
    SideContentComponent,
    TrendsComponent,
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    HttpClientModule,
    NgChartsModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
