import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export const AuthGuard = () => {
//
//
//   const authService = inject(AuthService)
//   const router = inject(Router)
//
//   if (!authService.currentUserSig()){
//     router.navigate([''])
//     return false
//   };
//   return true;
//
// };

export const canActivateAuth = () => {
  const authService = inject(AuthService)
   const router = inject(Router)

   // if (!authService.currentUserSig()){
   //   router.navigate(['/login'])
   //   return false
   // };
   // return true;

  if (!localStorage.getItem('token')){
    router.navigate(['/login'])
    return false
  };
  return true;
}
