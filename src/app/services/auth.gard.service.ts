import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    // il prend ces deux types d'argument
    route: ActivatedRouteSnapshot,
    // Ici on a la forme de pméthode que prend authGard
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // s'il est authentifié on le laisse passé
    if (this.authService.isAuth) {
      return true;
    } // si non il sera rediriger vers l'authentification
    else {
      this.router.navigate(['/auth'])

    }
  }
}