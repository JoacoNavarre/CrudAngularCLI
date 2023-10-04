import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})


export class ProfileComponent implements OnInit{

  public profileForm: FormGroup;
  public user: User;
  public uploadImg: File;
  public tempImg: string | null;

  constructor( private fb: FormBuilder, private userService: UserService, private fileUpoadService: FileUploadService)
  {
    this.user = this.userService.user
  }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      nombre: [this.user.nombre, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]]
    })

  }

  updateProfile(): void {
    console.log(this.profileForm)
    this.userService.updateProfile(this.profileForm.value)
      .subscribe( () =>
        {
          const {usuario, email} = this.profileForm.value
          this.user.nombre = usuario;
          this.user.email = email;

          Swal.fire('Saved', 'Changes were saved correctly', 'success')
        }, (err) => {
          Swal.fire('Error', err.error.msg, 'error')
        });
};

changeImg( file: any): void {

  this.uploadImg = file.target.files[0]

  if(!this.uploadImg){
    this.tempImg = null
    return;
  }

   const reader = new FileReader();
   const url64 = reader.readAsDataURL( this.uploadImg);

  reader.onloadend = () => {
      this.tempImg = reader.result as string;
  }

};

updateImg(): void {
  this.fileUpoadService
    .updateImage(this.uploadImg, 'usuarios', this.user.uid )
    .then( img => {
      this.user.img = img
      Swal.fire('Saved', 'Image was saved correctly', 'success')
    }).catch( err => {
      Swal.fire('Error', 'There was an error uploading the image', 'error')
    });
}

}
