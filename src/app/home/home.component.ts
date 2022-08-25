import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Log } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  log: Log;
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    // Getting dynamic data through routes
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.authService.isLoggedInBS.subscribe((res) => {
      this.log = res;
    });
    // Getting dynamic data through routes
    // console.log(history.state)
    // console.log(this.location.getState())
  }
}

// How to Access Dynamic Data Passes through routes

// 1- The state can be accessed by using the getCurrentNavigation method of the router (works only in the constructor)

// 2- Or use the history.state in the ngOnInit.

// 3- or use the getState method of the Location Service. This method is available Angular 8+
