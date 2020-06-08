import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {
  addEvents = new Subject<any>();
  eventDetails = new Subject<any>();

  constructor() { }

  getEventDetais(): Observable<any> {
    return this.addEvents.asObservable();
  }

  openAddEventDialog(isOpen: boolean) {
    this.addEvents.next({ isOpen: isOpen});
  }

  getEventDetails(): Observable<any> {
    return this.eventDetails.asObservable();
  }

  setEventDetails(details: object) {
    this.eventDetails.next({ event: details });
  }
}
