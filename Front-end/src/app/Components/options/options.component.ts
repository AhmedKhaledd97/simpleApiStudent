import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
opGroup : FormGroup
  id : number
  myStudent: Student = new Student( this.id,'','','','','');
  constructor(private opBuilder : FormBuilder , private seervicStudent : StudentService , private route : ActivatedRoute) { }

  ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id');
  if (this.id != 0){
 this.seervicStudent.getOneStudent(this.id).subscribe(
  response => {this.myStudent = response
  , this.opGroup.get('admin.userName').patchValue(response.name),
    this.opGroup.get('admin.Age').patchValue(response.age),
    this.opGroup.get('admin.Adress').patchValue(response.address),
    this.opGroup.get('admin.Phone').patchValue(response.phone),
    this.opGroup.get('admin.Gender').patchValue(response.gender)
  }
)
  }

  this.opGroup = this.opBuilder.group({
    admin :this.opBuilder.group({
      userName: new FormControl('' ,[ Validators.required, SpaceValidator.noOnlyWithSpace]),
      Age: new FormControl('' , [Validators.required, SpaceValidator.noOnlyWithSpace, Validators.pattern('^[0-9]*$')]),
      Adress: new FormControl('' , [Validators.required, SpaceValidator.noOnlyWithSpace]),
      Phone: new FormControl('' , [Validators.required, SpaceValidator.noOnlyWithSpace, Validators.pattern('^[0-9]*$')]),
      Gender : new FormControl('' , [Validators.required, SpaceValidator.noOnlyWithSpace])
    })
  })
  }

  getName(){
  return this.opGroup.get('admin').value.userName;
  }
  getAge(){
    return this.opGroup.get('admin').value.Age;
  }
  getAdress(){
    return this.opGroup.get('admin').value.Adress;
  }
  getPhone(){
    return this.opGroup.get('admin').value.Phone;
  }
  getGender(){
    return this.opGroup.get('admin').value.Gender;
  }
  onSumpit(){
    if(this.opGroup.invalid){
      this.opGroup.markAsTouched();
    }else{
      const student = new Student(this.id, this.getAdress() , this.getAge() , this.getName(), this.getGender(), this.getPhone());
      if (this.id=0){
        this.seervicStudent.addStudent(student).subscribe(
          response => alert('Added Complete')
        )
      }
      else {
        this.seervicStudent.editStudent(student , this.id).subscribe(
          response => {alert('Ubdated Complete')} ,
          error => {alert (error)}
        )
      }
    }

    console.log(this.getName());
    console.log(this.getAge());
    console.log(this.getAdress());
    console.log(this.getPhone());
    console.log(this.getGender());
  }
  get Username(){
    return this.opGroup.get('admin.userName');
  }
  get Age(){
    return this.opGroup.get('admin.Age');
  }
  get Adress(){
    return this.opGroup.get('admin.Adress');
  }
  get Phone(){
    return this.opGroup.get('admin.Phone');
  }
  get Gender(){
    return this.opGroup.get('admin.Gender');
  }


}
