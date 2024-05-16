import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //this guard is a function
  //since it's function we cannot inject authService using constructor
  //we have diffrent option to do so , whicii sinject fucntion
  const authService = inject(AuthService) ;
  const router = inject(Router) ;
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/']) ; //naviaget to home page
    return false ;
  }
};
