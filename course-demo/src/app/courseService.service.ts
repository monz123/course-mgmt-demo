import { Course } from './course';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = "http://localhost:8080/api/v1/courses"
  constructor(private httpClient:HttpClient) { }

  getCourseList(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseUrl}`);
  }

  addCourse(course:Course): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,course);
  }

  updateCourse(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
  }

  deleteCourse(id:number):Observable<Course>{
    return this.httpClient.delete<Course>(`${this.baseUrl}/${id}`);
  }
}


