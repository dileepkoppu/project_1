import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  otpForm: any;

  constructor(private fb: FormBuilder) { 
    this.otpForm = this.fb.group({
      otp: ['']
    })
  }

  ngOnInit(): void {
  }

}
