import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroments';

import { tap } from 'rxjs';

import { RegisterForm } from '../auth/interfaces/register-user.interfaces';
import { LoginForm } from '../auth/interfaces/login-user.interfaces';

const base_url = enviroment.bas_url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {}

  crateUser( formData: RegisterForm ) {

    return this.http.post( `${base_url}/usuarios`, formData )
                .pipe(
                  tap((res:any) => localStorage.setItem('token', res.token))
                )
  };

  userLogin( loginForm: any){

    return this.http.post( `${base_url}/login`, loginForm )
              .pipe(
                tap((res:any) => localStorage.setItem('token', res.token))
              )
  }
}
