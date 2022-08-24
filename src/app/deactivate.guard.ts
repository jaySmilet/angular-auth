import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivate {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<IDeactivate> {
  canDeactivate(
    component: IDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit ? component.canExit() : true;
  }
}
