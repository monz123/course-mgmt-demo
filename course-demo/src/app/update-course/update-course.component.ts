import { CourseService } from './../courseService.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  id:number = 0;
  course: Course =new Course();
  constructor(private courseService:CourseService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.courseService.updateCourse(this.id).subscribe(data => {
        this.course = data;
    },
    error =>{
      console.log(error);
    });
  }

  onSubmit(){
    this.saveCourse();
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
}
