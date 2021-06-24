import { Router } from '@angular/router';
import { CourseService } from '../courseService.service';
import { Course } from '../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creating-course',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses!: Course[];
  constructor(private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }
  private getCourses() {
    this.courseService.getCourseList().subscribe(data => {
      this.courses = data;
      console.log(data);
    },
    error =>{
      console.log(error)
    })
  }

  public updateCourse(id:number){
    this.router.navigate(['editCourse',id]);
  }

  public deleteCourse(id:number){
    this.courseService.deleteCourse(id).subscribe(data =>{
      console.log(data);
        this.getCourses();
    },
    error =>{
      console.log(error);
    })
  }

}


