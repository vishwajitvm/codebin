import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router:Router) { }

  register(regForm:NgForm) {
    console.log("Signup values" , regForm.value);
    this.router.navigate(["/login"]) ;
  }

  reset(resetForm:NgForm) {
    resetForm.reset()
    console.log("signup form successfull" , Date)
  }
}
