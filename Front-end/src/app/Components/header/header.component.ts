import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private loginService : AuthenticationService , private route : Router) { }

  ngOnInit(): void {
  }

  isAuthenticaterUser() {
    return this.loginService.isLogin();

  }
  logout(){
    sessionStorage.removeItem('isRegister');
    this.route.navigateByUrl('reg')
  }
  Done(id:number){
    this.route.navigateByUrl(`students/${id}`);
  }
  }
