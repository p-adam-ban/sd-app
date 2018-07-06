import { Component, OnInit } from '@angular/core';

import { UserData } from '../models/user-data';
import { UserComponent } from '../user/user.component';
// import { USERS } from '../data/mock-data';
import { UserService } from '../services/user.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:UserData[];
  selectedUser:UserData = null;

  constructor(
    private userService:UserService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }


  onSelectUser(user: UserData): void {
    this.selectedUser = user;
    console.log(" S user ", this.selectedUser )

    this.userService.getUser(101);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as UserData)
      .subscribe(user => {
        this.users.push(user);
        console.log("add user", user);
        this.router.navigate(["/user-settings/"+user.id]);
      });

    
    
  }

  delete(user: UserData): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
