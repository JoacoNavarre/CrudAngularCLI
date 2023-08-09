import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmited = false;

  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [ localStorage.getItem('remember') === "true" ?? false]
  })

  constructor( private router: Router,
               private fb: FormBuilder,
               private userService: UserService
              ){}

  login(){
    this.formSubmited = true;

    if(this.loginForm.get('remember')?.value){
      localStorage.setItem('email', this.loginForm.get('email')?.value || "")
      localStorage.setItem('remember', "true")
    }else{
      localStorage.removeItem('email')
      localStorage.removeItem('remember')
    }


      this.userService.userLogin(this.loginForm.value)
      .subscribe({
        next: (response => {
          console.log("El usuario fue creado correctamente", response),
          this.router.navigateByUrl('/')

          if(this.loginForm.get('remember')?.value){
            localStorage.setItem('email', this.loginForm.get('email')?.value || "")
            localStorage.setItem('remember', "true")
          }else{
            localStorage.removeItem('email')
            localStorage.removeItem('remember')
          }

        }),
        error: ( err => Swal.fire('Error', err.error.msg, 'error') )
      });

    };

}
