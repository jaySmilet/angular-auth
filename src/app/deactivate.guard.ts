import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanExitComponent } from './components/can-exit/can-exit.component';

export interface IDeactivate {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<CanExitComponent> {
  canDeactivate(
    component: CanExitComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit ? component.canExit() : true;
  }
}
