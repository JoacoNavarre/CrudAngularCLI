import { Injectable, booleanAttribute } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor( private userService: UserService,
               private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      this.userService.validateToken()
        .pipe(
          tap( (isAuthenticated:boolean) => {
            if(!isAuthenticated){
              this.router.navigateByUrl('/login');
            }
          })
        );

      console.log("boocaa")

      return true
    }
}

