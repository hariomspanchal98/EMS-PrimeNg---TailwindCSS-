import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DEPARTMENTS } from '../auth.constant';
import { Auth } from '../services/auth';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  visible = true;
  countries: any = [];
  departments = DEPARTMENTS;
  registrationForm: any;
  country:any;
  department:any;
  password:any;
  confirmPassword:any;

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.authService.getCountries().subscribe({
      next: (data) => {
        data.forEach((ele:any) => this.countries.push({name :ele?.name?.common}));
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });

    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      role: new FormControl('User', Validators.required),
    });


  }
  register() {
    console.log(this.countries);
    this.registrationForm.value.password = this.password;
    this.registrationForm.value.country = this.country.name;
    this.registrationForm.value.department = this.department.name;
    console.log('register', this.registrationForm.value.department, this.registrationForm.value);
    this.setLocalStorage();
    this.registrationForm.reset();
    this.password = '';
    this.country = '';
    this.department = '';
    this.confirmPassword ='';
  }

  setLocalStorage(){
    if(localStorage.getItem('users')){
      const users:[] = JSON.parse(JSON.stringify(localStorage.getItem('users')));
      users.push(this.registrationForm.value);
      console.log('if');
    } else {
      localStorage.setItem('users', JSON.stringify([this.registrationForm.value]));
      console.log('else');
    }
  }
}
