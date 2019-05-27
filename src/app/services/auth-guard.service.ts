import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         return new Promise(
          (resolve, reject) => {
              firebase.auth().onAuthStateChanged(
                  (user) => {
                      if (user) {
                        resolve(true);
                      } else {
                        this.router.navigate(['/auth', 'signin']);
                        resolve(false);
                      }
                  }
              );
          }

      )

  }


}
