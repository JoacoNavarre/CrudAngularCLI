import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroments';

import { tap, Observable, catchError, of } from 'rxjs';

import { RegisterForm } from '../auth/interfaces/register-user.interfaces';
import { User } from '../models/user.models';

const base_url = enviroment.bas_url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor( private http: HttpClient ) {}

  validateToken(): Observable<boolean>{


    return this.http.get( `${base_url}/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      tap( (res: any) => {
        const { nombre, email, img, google, role, uid } = res.usuario;
        this.user = new User(nombre, email, "" , google, img, role, uid)
        localStorage.setItem('token', res.token)
        return true
      }),
      catchError( err => of(false))
    )
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.user.uid || '';
  }

  crateUser( formData: RegisterForm ) {

    return this.http.post( `${base_url}/usuarios`, formData )
                .pipe(
                  tap((res:any) => localStorage.setItem('token', res.token))
                )
  };

  updateProfile( formData: {email:string, nombre:string } ) {

    const data = {  ...formData, role: this.user.role}

    return this.http.put( `${base_url}/usuarios/${this.uid}`, data, {
      headers: {
        'x-token': this.token
      }
    } )
  }

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
