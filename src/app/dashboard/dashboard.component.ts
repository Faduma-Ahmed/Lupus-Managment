import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/auth.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  activeLink = 'user-profile';
  user: User;

  constructor(public auth: AuthService) {
    this.auth.user$.subscribe((currUser: User) => {
      this.user = currUser;
      console.log("USER:  " + currUser);
    })
  }
 

  ngOnInit() {}

}
