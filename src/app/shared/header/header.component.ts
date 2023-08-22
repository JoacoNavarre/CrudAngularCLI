import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user: User;

  constructor( private userService: UserService, private router: Router){
    this.user = userService.user
  }

  logout(){
    this.userService.userLogout()
    this.router.navigateByUrl('/login')
  }

}
