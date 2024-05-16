import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string ;
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.uid = uid ;
        console.log("user is already loged in" , user.email)
      } else {
        // User is signed out
        this.uid = undefined ;
        console.log("user is logged out")
      }
    });
  }

  // REGISTER USER USING FIREBASE
  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user register" , user) ;
        //navigating to home page
        this.router.navigate(["/"]) ;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode - auth signup" , errorCode) ;
        console.log("errorMessage - auth signup" , errorMessage) ;
        alert("Somthing went wrong while signup, try again")
      });
  }

  //LOGIN USER SUING FIREBASE
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user login" , user) ;
        //navigating to home page
        this.router.navigate(["/"]) ;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode - auth login" , errorCode) ;
        console.log("errorMessage - auth login" , errorMessage) ;
        alert(errorCode)

      });
  }

  //LOGOUT USER
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log("Logout failed due to some issue , try again") ;
    });
  }

}
