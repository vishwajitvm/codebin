import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, getDocs, DocumentData, getDoc, doc } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any ;
  constructor(private authService:AuthService , private router:Router) {
    this.db = getFirestore()
  }

  //POST - CREATE SNIPPET
  async createSnippet(snippet:Snippet) {
    try {
      // const docRef = await addDoc(collection(this.db, "snippets"), {
      //   first: "Ada",
      //   last: "Lovelace",
      //   born: 1815
      // });
      const docRef = await addDoc(collection(this.db, "snippets"), {
        ...snippet,
        by: this.authService.getUID()
      });
      console.log("Document written with ID: ", docRef.id);
      this.router.navigate(['/']) 
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Somthing went wrong while creating code snippet!")
    }
  }

  //GET - method to retrieve the entire collection
  async getAllSnippet() {
    let result: any[] = [] ;
    const querySnapshot = await getDocs(collection(this.db, "snippets"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      result.push({
        id: doc.id,
        ...doc.data()
      }) ;
    });
    console.log("all code snippet" , result)
    return result ;
  }

  //GET - method to retrieve the single collection based on id
  async getSnippetById(docId:string) {
    const docRef = doc(this.db, "snippets", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data() ;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return {
        id: "Not Found",
        title: "Not Found",
        code: "Not Found"
      }
    }
  }

}
