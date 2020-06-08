import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddEventService } from 'src/app/services/add-event.service';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale;

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  @Output() todayClicked: EventEmitter<Date> = new EventEmitter();

  userId: any;
  showToggleButton: any = false;
  isSecMentor: any;
  currentViewSub: Subscription;
  currentRole: string;
  lang: string;

  constructor(
    private addEventService: AddEventService
  ) {
    this.lang = 'en';
  }

  ngOnInit() {
  }


  createEvents() {
    this.addEventService.openAddEventDialog(true);
  }
}
