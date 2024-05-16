import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router:Router , private authService:AuthService) { }

  register(regForm:NgForm) {
    console.log("Signup values" , regForm.value);
    this.authService.registerUser(regForm.value.email , regForm.value.password)
    // this.router.navigate(["/login"]) ;
  }

  reset(resetForm:NgForm) {
    resetForm.reset()
    console.log("signup form successfull" , Date)
  }
}
