import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../auth/interfaces/register-user.interfaces';
import { enviroment } from 'src/enviroments/enviroments';

const base_url = enviroment.bas_url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {}

  crateUser( formData: RegisterForm ) {

    return this.http.post( `${base_url}/usuarios`, formData );
  }
}
