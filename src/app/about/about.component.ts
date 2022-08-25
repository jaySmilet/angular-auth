import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
