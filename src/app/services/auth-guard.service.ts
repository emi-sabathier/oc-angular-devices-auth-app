import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

// pour injecter un service dans un autre service. AuthService dans AuthGuard
@Injectable()
export class AuthGuard implements CanActivate {
// router: Router ça permet de redirect
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    // retourne true si le user à le droit d'accéder à la route
    // sinon on retourn false

    // si isAUth true, return true
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
