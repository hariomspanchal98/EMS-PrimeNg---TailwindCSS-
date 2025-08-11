import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
visible = true;
loginForm: any;

constructor(private route: Router) {}

ngOnInit(): void {
  this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      // captcha: new FormControl('',[Validators.required]),
    })
}
login(){
    // console.log(this.loginForm.value);
    // this.loginForm.reset();
    this.route.navigate(['/user/dashboard']);
  }
}
