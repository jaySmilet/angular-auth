import { Component } from '@angular/core';
import { IDeactivate } from '../../deactivate.guard';

@Component({
  selector: 'app-can-exit',
  templateUrl: './can-exit.component.html',
  styleUrls: ['./can-exit.component.css'],
})
export class CanExitComponent implements IDeactivate {
  canExit(): boolean {
    if (confirm('Do you wish continue?')) {
      return true;
    } else {
      return false;
    }
  }
}
