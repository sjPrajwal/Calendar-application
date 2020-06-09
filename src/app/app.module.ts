import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*******************External packages *******************/
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ToastrModule } from 'ngx-toastr';

/****************Components******************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarHeaderComponent } from './shared/calendar-header/calendar-header.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddEventComponent } from './shared/add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarHeaderComponent,
    HeaderComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TooltipModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [{ provide: OWL_DATE_TIME_LOCALE, useValue: 'en' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
