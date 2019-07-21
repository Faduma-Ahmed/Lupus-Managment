import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService) {
    this.auth.user$.subscribe((currUser: User) => {
      this.user = currUser;
      console.log("USER:  " + currUser);
    })
  }

  ngOnInit() {
    
  }

}
