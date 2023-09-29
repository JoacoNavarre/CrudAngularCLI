import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})


export class ProfileComponent implements OnInit{

  public profileForm: FormGroup;
  public user: User;
  public uploadImg: File;

  constructor( private fb: FormBuilder, private userService: UserService, private fileUpoadService: FileUploadService)
  {
    this.user = this.userService.user
  }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      nombre: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]]
    })

  }

  updateProfile(): void {
    console.log(this.profileForm)
    this.userService.updateProfile(this.profileForm.value)
      .subscribe( () =>
        {
          const {usuario, email} = this.profileForm.value
          this.user.name = usuario;
          this.user.email = email;
        })
};

changeImg( file: any): void {
  this.uploadImg = file.target.files[0];
};

updateImg(): void {
  this.fileUpoadService.updateImage(this.uploadImg, 'usuarios', this.user.uid )
  console.log("aber aora")
}

}
