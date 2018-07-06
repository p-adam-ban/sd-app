import { Component, OnInit, Input } from '@angular/core';

import { UserData } from '../models/user-data';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UserData;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
