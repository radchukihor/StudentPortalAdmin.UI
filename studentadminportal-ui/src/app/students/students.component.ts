import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private studentServiice: StudentService) {}

  ngOnInit(): void {
    this.studentServiice.getStudent().subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
