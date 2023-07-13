import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmited = false;

  public registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terms: [ false, Validators.required]
  }, {
    validators: this.equalPasswords('password', 'password2')
  })

  constructor( private fb: FormBuilder, private userService: UserService){}

  createUser(){
    this.formSubmited = true;

    if( this.registerForm.valid ) {

      console.log("enviandoooo",this.registerForm)

      this.userService.crateUser( this.registerForm.value)
      .subscribe({
        next: (response => {console.log("El usuario fue creado correctamente", response)}),
        error: ( err => {console.warn(err)})
      });

    }else{
      console.log("El formulario no es valido")
      return;
    }
  }

  invalidField(field: string): boolean{

    if( this.registerForm.get(field)?.invalid && this.formSubmited){
      return true
    }else{
      return false
    }

  };

  invalidPassword():boolean{
    const pass = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass !== pass2) && this.formSubmited){
      return true;
    }
    return false;
  };

  acceptTerms(): boolean{
    return (!this.registerForm.get('terms')?.value && this.formSubmited)
  };

  equalPasswords( password1: string, password2: string){

    return ( formGroup: FormGroup) => {

      const passControl = formGroup.get(password1);
      const passControl2 = formGroup.get(password2);

      if (passControl?.value === passControl2?.value){
        passControl2?.setErrors(null)
      } else {
        passControl2?.setErrors({notEven: true})
      }
    }
  }

}
