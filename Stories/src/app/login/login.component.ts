import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private fb: FormBuilder, private route: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      pwd: ['']
    })
   }

  ngOnInit(): void {
  }

  logIn(): void {
    if(this.loginForm.value.email === 'ADMIN' && this.loginForm.value.pwd === 'ADMIN') {
      this.route.navigate(['/']);
      console.log("data", this.loginForm.value.email, this.loginForm.value.pwd);
    } else {
      alert(1)
    }
  }

}
