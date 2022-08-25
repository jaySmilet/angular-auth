import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, Observable } from 'rxjs';
import { IDeactivate } from '../deactivate.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, IDeactivate {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    // Fetching static data passed through routes
    this.activatedRoute.data.subscribe((data) => console.log(data));

    // Listen to Router Events
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationStart))
    //   .subscribe((event) => console.log(event));
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => console.log(event));
  }

  canExit(): Observable<boolean> | Promise<boolean> | boolean {
    if (confirm('Are you sure?')) {
      return true;
    }
    return false;
  }

  toGO(): void {
    this.router.navigateByUrl('home', {
      state: {
        db: 'This is dynamic data passesd through routes programatically',
        mode: 'programatically',
      },
    });
  }
}
