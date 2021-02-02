import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students: Student[] = []
  message : string
  student : Student


  constructor(private studentService: StudentService, private route : ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe(() => {
    const result = this.route.snapshot.paramMap.has('id');
    if(result == true){
      const id = +this.route.snapshot.paramMap.get('id');
      this.getStudentsById(id);
    }else{
      this.getStudents();
    }
  });
  }
  getStudentsById(id:number){
  this.studentService.getOneStudent(id).subscribe(
    response => this.student = response
  )
  }
getStudents(){
  this.studentService.getStudents().subscribe(
    data => this.students = data
  );
}
removeStudent(id:number){
  this.studentService.removeStudent(id).subscribe(

    response => {
      this.getStudents(),
        this.message = 'Deleted Complete'+ `${id}`;
      this.showMessage()
      this.done()
    }

  )
}
showMessage(){
  setTimeout(()=>{
    this.message = ''
    }
  , 3000)
}

  done() {
    this.getStudents();
  }
}
