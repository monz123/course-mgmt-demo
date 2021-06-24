import { UpdateCourseComponent } from './update-course/update-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';



const routes: Routes = [
  {path:'courses', component: CourseListComponent},
  {path:'', redirectTo:'courses', pathMatch:'full' },
  {path:'addCourse', component: AddCourseComponent},
  {path:'editCourse/:id', component: UpdateCourseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
