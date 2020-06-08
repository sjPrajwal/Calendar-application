import { Component, OnInit } from '@angular/core';
import { AddEventService } from 'src/app/services/add-event.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  showDialog: any = {};
  eventForm: FormGroup;
  i = 0;

  constructor(
    private addEventService: AddEventService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.addEventService.getEventDetais().subscribe(result => {
      console.log(result);
      this.showDialog = result;
    })
  }

  initializeForm() {
    this.eventForm = this.formBuilder.group({
      id: [""],
      title: ["", [Validators.required]],
      date: ["", [Validators.required]],
      type: ["primary", [Validators.required]],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]]
    });
  }

  closePopUp() {
    this.resetForm();
    this.showDialog.isOpen = false;
  }

  resetForm() {
    this.eventForm.reset();
    this.eventForm.controls['type'].setValue('primary');
  }

  createEvent() {
    this.eventForm.value.id = this.i++;
    this.addEventService.setEventDetails(this.eventForm.value);
    this.closePopUp();
  }

}
