import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth )
  {
    this.user = afAuth.authState;
  }

  login(email: string, password: string) : Promise<firebase.auth.UserCredential>
  {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void>
  {
    return this.afAuth.signOut();
  }

  resetPassword(email: string)
  {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
