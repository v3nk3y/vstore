import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute, public router: Router) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    console.log(localStorage.getItem('returnUrl'));

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(user => {
      // if (user) {
      //   this.router.navigateByUrl(returnUrl);
      // }
      this.router.navigateByUrl(returnUrl);
      console.log(returnUrl);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
