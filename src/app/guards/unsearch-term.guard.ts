import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoutingComponent } from '../components/routing/routing.component';

@Injectable()
export class UnsearchTermGuard implements CanDeactivate<RoutingComponent> {
  canDeactivate(
    component: RoutingComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log('UnsearchedTermGuard');
      console.log(route);
      console.log(state.url);
      return component.canDeactivate() || window.confirm('Are you sure?');
  }
}
