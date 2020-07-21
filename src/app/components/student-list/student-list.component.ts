import { Component, OnInit } from '@angular/core';
import { AddEventService } from 'src/app/services/add-event.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList: any = {
    "totalNoOfWorkingDays": 95,
    "students": [
      {
        "name": "David",
        "dept": "CSE",
        "score": 7.8,
        "attendance": 57
      },
      {
        "name": "John",
        "dept": "ECE",
        "score": 8.8,
        "attendance": 77
      },
      {
        "name": "Praju",
        "dept": "ECE",
        "score": 3.5,
        "attendance": 77
      },
      {
        "name": "Vasu",
        "dept": "ECE",
        "score": 4.8,
        "attendance": 77
      }
    ]
  }
  constructor(private addEventService: AddEventService) { }

  ngOnInit(): void {
    this.calculateGradeandPercentage();
    this.sortList();
  }

  sortList() {
    this.addEventService.getEventDetails().subscribe(res => {
      this.sort(res)
    })
  }

  sort(res) {
    console.log('sort');
    if (res.event == 'Scrore') {
      this.studentList.students.sort((a, b) => b.score - a.score);
    } else if (res.event == 'Attendace') {
      this.studentList.students.sort((a, b) => b.attendance - a.attendance);
    } else if (res.event == 'Grade') {
      this.studentList.students.sort((a, b) =>  a.grade.localeCompare(b.grade));
    }

    console.log(this.studentList.students);
  }

  calculateGradeandPercentage() {
    this.studentList.students = this.studentList.students.map(stud => {
      if (stud.score > 7.7) {
        return { ...stud, grade: 'A' }
      } else if (stud.score >= 4.5 && stud.score <= 7.5) {
        return { ...stud, grade: 'B' }
      } else if (stud.score <= 4.5) {
        return { ...stud, grade: 'C' }
      }
    })
  }

}
