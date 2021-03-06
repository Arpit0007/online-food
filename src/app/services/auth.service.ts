import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() { }
  is_authenticated() {
    const promise = new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
