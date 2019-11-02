import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginSvc: LoginService, private router: Router) { }

  getLogin(username, password){
    this.loginSvc.loginUser(username, password)
    .subscribe(token => {
      console.table(token);
      this.router.navigate(['products']);
    }, error => {
      console.table(error);
    });
  }

}
