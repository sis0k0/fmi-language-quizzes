import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;

  constructor(private userService: UserService, private authService: AuthenticationService) {
    this.profile = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
