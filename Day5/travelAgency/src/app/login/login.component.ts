import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isError: boolean;

  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.isError = false;
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {

    const name = this.loginForm.controls.userName.value;
    const password = this.loginForm.controls.password.value;

    if (name === 'india' && password === 'india') {
      this.router.navigate(['/holidays']);
      this.isError = false;
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      this.router.navigate(['/login']);
      this.isError = true;
    }

    if (this.loginForm.status.toUpperCase() === 'INVALID') {
      this.isError = true;
      console.log('value= ' + this.loginForm.value);
    }
  }

}
