import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  showLogin: boolean = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedInBS.subscribe((res) => {
      this.showLogin = res.isLoggedIn;
    });
  }

  myRoutes = [
    {
      path: '/home',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/product',
      name: 'Products',
    },
  ];

  logOut() {
    this.authService.logoutUser();
  }
}
