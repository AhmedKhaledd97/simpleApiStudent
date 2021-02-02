import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../model/student';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private urlStudent = 'http://localhost:8080/system/students'
  constructor(private httpStudent: HttpClient) {}

  getStudents(): Observable<Student[]> {
  let header = new HttpHeaders({
    Authorization: this.createBasicAuthenticationHttpHeader()
  })
    return this.httpStudent.get<Student[]>(this.urlStudent , {headers : header}).pipe(
      map(response => response)
    );
  }
  removeStudent (id : number){
  return this.httpStudent.delete(this.urlStudent + '/10');
  }
  addStudent(student: Student) {
    let header = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    })
    return this.httpStudent.post(this.urlStudent, student);
  }
  getOneStudent(id : number) : Observable<Student>{
    let header = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    })
  return this.httpStudent.get<Student>(this.urlStudent + '/5').pipe(
    map(response => response)
  );
  }
  editStudent(student : Student , id: number){
  return this.httpStudent.put(this.urlStudent+ '/2', student);
  }
  createBasicAuthenticationHttpHeader() {
    let userName = `ahmed`;
    let password = `ahmed`;
    let basicAuthHeaderString = `Basic ` + window.btoa(userName + `:` + password); // 64
    return basicAuthHeaderString;
  }
}
// interface GetResponseStudents {
  // _embedded: {
    // students: Student[]
 // };
// }
