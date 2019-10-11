import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  checkLogin(logindata: any) {
    return this.http.post('http://192.168.0.120:8080/login', logindata);
  }
}
