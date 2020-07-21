import { Component, OnInit } from '@angular/core';
import { AddEventService } from 'src/app/services/add-event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private addEventService: AddEventService) { }

  ngOnInit(): void {
  }

  sort(value){
    this.addEventService.setEventDetails(value)
  }

}
