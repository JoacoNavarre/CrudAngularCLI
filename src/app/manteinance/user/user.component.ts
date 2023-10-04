import { Component, OnInit } from '@angular/core';
import { LoadUsersResponse } from 'src/app/interfaces/load-users.interface';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public totalUsers: number = 0;
  public users: User[];
  public paginationFrom: number = 0;

  constructor( private userService: UserService) { }

  ngOnInit()
  {
    this.userService.getUsers(this.paginationFrom)
      .subscribe( (res) => {
        this.totalUsers = res.total;
        this.users = res.usuarios
      }
      )
  }

  changePage( val:number){

    this.paginationFrom += val;

    if(this.paginationFrom <= 0){
      this.paginationFrom = 0;
    }
  }

}


