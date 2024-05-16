import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

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
  login(email: string, password: string) {
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
        alert("Somthing went wrong while Login, try again")

      });
  }

}
