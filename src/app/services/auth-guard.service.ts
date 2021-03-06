import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {
  constructor( private authservices: AuthService,
               private router: Router
            ) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): any {
            this.authservices.is_authenticated()
            .then(
              (authenticated: boolean) => {
                if (authenticated) {
                  return true;
                } else {
                  this.router.navigate(['/']);
                }
              }
            );
          }
}
