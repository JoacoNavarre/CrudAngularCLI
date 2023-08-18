import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroments';

import { tap, map, Observable, catchError, of } from 'rxjs';

import { RegisterForm } from '../auth/interfaces/register-user.interfaces';
import { LoginForm } from '../auth/interfaces/login-user.interfaces';
import { User } from '../models/user.models';

const base_url = enviroment.bas_url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor( private http: HttpClient ) {}

  validateToken(): Observable<boolean>{

    const token = localStorage.getItem('token') || '';


    return this.http.get( `${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res: any) => {
        const { nombre, email, img, google, role, uid } = res.usuario;
        this.user = new User(nombre, email, "" , google, img, role, uid)
        localStorage.setItem('token', res.token)
      }),
      map( res => true),
      catchError( err => of(false))
    )
  }

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

  userLogout(){
    localStorage.removeItem('token')
  }

}
