import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('OnlyLoginUsersGuard');
      if(this.userService.isLoggedIn()){
        return true;
      } else {
        window.alert("You don't have permission to view this page");      
        this.router.navigate(['home']);
        return false;
      }      
  }
}
