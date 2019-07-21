import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // user$: Observable<User>;
  constructor(public auth: AuthService) {
    // this.user$=auth.user$;
   }

  ngOnInit() {
  }

}
