import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms'

import { UserService } from '../services/user.service';
import { UserData, NATIONALITIES } from '../models/user-data';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user:UserData;

  userForm:FormGroup;

  nationalities = NATIONALITIES;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService:UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }


  createForm() {
    this.userForm = this.fb.group({
      name:  ['', Validators.required ],
      id:'',
      age:'',
      nationality:''
    });
  }

  onSubmit() {
    this.user = this.prepareSaveHero();
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
    this.rebuildForm();
  }
  
  rebuildForm() {
    this.userForm.reset({
      name: this.user.name,
      age: this.user.age,
      nationality: this.user.nationality,

    });
  }

  prepareSaveHero(): UserData {
    const formModel = this.userForm.value;
  
    let saveUser: UserData = ({
      id: this.user.id,
      name: formModel.name as string,
      age: formModel.age as number,
      nationality: formModel.nationality,

    } as UserData);

    return saveUser;
  }



  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }




}
