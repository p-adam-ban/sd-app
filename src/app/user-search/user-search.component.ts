import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UserData } from '../models/user-data';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  
  users$: Observable<UserData[]>;
  
  private searchTerms = new Subject<string>();


  constructor(private userService:UserService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.users$ = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap((term: string) => this.userService.searchUsers(term)),
    );
  }
}


