import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  showLogin: boolean = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedInBS.subscribe((res) => {
      this.showLogin = res.isLoggedIn;
    });
  }

  senseActive = (url): boolean => {
    console.log('Check', url, this.router.isActive(url, false));
    return this.router.isActive(url, false);
  };

  myRoutes = [
    {
      path: '/home',
      name: 'Home',
      icon: 'fa-solid fa-house',
      iconActive: 'fa-solid fa-house-user',
    },
    {
      path: '/about',
      name: 'About',
      icon: 'fa-solid fa-info',
      iconActive: 'fa-solid fa-circle-info',
    },
    {
      path: '/product',
      name: 'Products',
      icon: 'fa-solid fa-bug',
      iconActive: 'fa-solid fa-bug-slash',
    },
  ];

  logOut() {
    this.authService.logoutUser();
  }
}