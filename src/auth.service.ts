import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  //inject dependencies into services
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // fetch auth state
    this.user$ = this.afAuth.authState.pipe(
      //react to change in state (logged in or not)
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )}
      //google Signin popup
      async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
      }
      private oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
          .then((credential) => {
            this.updateUserData(credential.user)
          })
      }
      //update user data by merging, make stuff non-destructive

      private updateUserData({uid,email,displayName,photoURL}: User) {
        
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    
        const data = {uid,email,displayName,photoURL}; 
    
        return userRef.set(data, { merge: true })
    
      }

      async signOut() {
        await this.afAuth.auth.signOut();
        this.router.navigate(['/']);
      }
    
}
