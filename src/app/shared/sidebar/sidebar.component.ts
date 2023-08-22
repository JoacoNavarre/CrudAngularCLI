import { Component } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public menu: any = [];
  public user: User

  constructor( private sidebarService: SidebarService, private userService: UserService)
  {
    this.menu = sidebarService.menu;
    this.user = userService.user
    }

}
