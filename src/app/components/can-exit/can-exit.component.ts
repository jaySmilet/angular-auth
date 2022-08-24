import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivate } from '../../deactivate.guard';

@Component({
  selector: 'app-can-exit',
  template: '',
  styleUrls: ['./can-exit.component.css'],
})
export class CanExitComponent implements IDeactivate {
  canExit(): Observable<boolean> | Promise<boolean> | boolean {
    if (confirm('Do you wish continue?')) {
      return true;
    } else {
      return false;
    }
  }
}
