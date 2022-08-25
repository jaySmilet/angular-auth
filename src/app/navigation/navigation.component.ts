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

  senseActive(url): boolean {
    return this.router.isActive(url, false);
  }

  myRoutes = [
    {
      path: '/home',
      name: 'Home',
      icon: 'fa-solid fa-house',
      iconActive: 'fa-solid fa-house-blank',
    },
    {
      path: '/about',
      name: 'About',
      icon: 'fa-solid fa-user',
      iconActive: 'fa-solid fa-user-gear',
    },
    {
      path: '/product',
      name: 'Products',
      icon: 'fa-solid fa-code-simple',
      iconActive: 'fa-solid fa-code',
    },
  ];

  logOut() {
    this.authService.logoutUser();
  }
}
