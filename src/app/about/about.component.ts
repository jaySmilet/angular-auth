import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivate } from '../deactivate.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit,IDeactivate {
  constructor() {}
  ngOnInit() {}

  canExit(): Observable<boolean> | Promise<boolean> | boolean{
    if(confirm('Are you sure?')){
      return true;
    }
    return false;
  }
}
