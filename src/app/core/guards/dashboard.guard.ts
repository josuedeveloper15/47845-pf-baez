import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  console.log('DASHBOARD GUARD');

  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.authUser$.pipe(
    map((user) => {
      return !!user ? true : router.createUrlTree(['/auth/login']);
    })
  );

  // authService.authUser$

  // const tokenValido = false;

  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

  // return tokenValido ? router.createUrlTree(['/auth']) : true;
  // return false;
};
