import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../courseService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course =new Course();
  constructor(private courseService:CourseService,
              private router:Router) {

   }

  ngOnInit(): void {

  }

  saveCourse(){
    this.courseService.addCourse(this.course).subscribe(data =>{
        console.log(data);
        this.goToCourseList();
    },
    error =>{
      console.log(error);
    }
    );
  }

  goToCourseList(){
    this.router.navigate(['courses']);
  }

  onSubmit(){
    this.saveCourse();
  }

}
