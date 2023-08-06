import { CanActivateFn, Router, NavigationExtras } from '@angular/router';
import { MyRestService } from './my-rest.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const myrest = inject(MyRestService);
  const router = inject(Router);
  const navigationExtras: NavigationExtras = {
    queryParams: { returnUrl: state.url },
  };

  if (myrest.isLoggedIn()) {
    return true;
  } else {
    console.log('state-url', state.url);
    return router.createUrlTree(['/login'], navigationExtras);
  }
};
