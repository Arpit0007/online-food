import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { error } from 'util';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  loginForm: FormGroup;
  submited = false;
  success = false;
  loginData: any;
  result: any ;
  constructor(private formbuilder: FormBuilder , private loginservice: LoginService) { }
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }
  onSubmit() {
    this.submited = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.success = true;
    this.loginData = {
      email : this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.loginservice.checkLogin(this.loginData).subscribe(
      response => {
        this.result = response;
      },
    );
    // alert(this.result.error);
    console.log(this.result);
   // localStorage.setItem('token', this.dataSource.length);
  }
}
