import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  messaageInvalid : string
logInFormGroup : FormGroup
  constructor(private formBuilder : FormBuilder , private loginService: AuthenticationService , private route : Router , private auth: AuthenticationService) { }

  ngOnInit() {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: new FormControl('', [Validators.required, SpaceValidator.noOnlyWithSpace]),
        passWord: new FormControl('' , Validators.required)
      })
    });
  }
  OnSubmit() {
    if(this.logInFormGroup.invalid){
      this.logInFormGroup.markAsTouched();
    }else {
      /*const result=this.loginService.login(this.logInFormGroup.get('admin').value.userName , this.logInFormGroup.get('admin').value.passWord);
      if(result == true) {
        this.route.navigateByUrl('students');
      }
      else {
        this.messaageInvalid = 'Incorrect Username or Password'

      }

       */
      this.auth.executeAuthentication(this.logInFormGroup.get('admin').value.userName , this.logInFormGroup.get('admin').value.passWord)
        .subscribe(
          data => {
              console.log(data);
              this.route.navigateByUrl('students')

          } ,
          error => {
      console.log(error);
            this.messaageInvalid = 'Incorrect Username or Password';
            alert(error)

          }
        )
    }


  }
  get Username(){
    return this.logInFormGroup.get('admin.userName');
  }
  get Password(){
    return this.logInFormGroup.get('admin.passWord');

  }
}
