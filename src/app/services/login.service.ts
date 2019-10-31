import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  checkLogin(logindata: any) {
    console.log(logindata);
    return this.http.post('http://192.168.0.120/car_rental/api/login', logindata);
  }
}
