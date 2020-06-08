import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from './date.formater';
import { AddEventService } from 'src/app/services/add-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class DashboardComponent implements OnInit {

  view = 'month';
  refresh: Subject<any> = new Subject();
  viewDate: Date = new Date();
  events: Array<object> = [];
  lang: string = 'en';
  selectedDate: any = '';

  constructor(
    private cd: ChangeDetectorRef,
    private addEventService: AddEventService
  ) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.addEventService.getEventDetails().subscribe(result => {
      let addedEvent = { ...result.event };
      addedEvent.start = moment(result.event.date, 'DD-MM-YYYY ').toDate();
      this.events.push(addedEvent);
      this.refresh.next();
      this.cd.markForCheck();
    })
  }

  OnDateClick(e: any) {
    this.selectedDate = e;
  }

  clearFromSelectedList(deletingEvent) {
    this.selectedDate.events = this.selectedDate.events.filter((event: any) =>
      event.id != deletingEvent.id
    )
    console.log(this.selectedDate);
  }

  removeEvent(deletingEvent: any) {
    this.clearFromSelectedList(deletingEvent)
    this.events.forEach((event: any, index) => {
      if (event.id == deletingEvent.id) {
        this.events.splice(index, 1);
        this.refresh.next();
        return;
      }
    })
    console.log(this.events);
  }

  monthChanged(e: any) {
  }

}
