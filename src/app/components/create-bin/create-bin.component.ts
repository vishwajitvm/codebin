import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
  title = new FormControl("" , [
    Validators.required,
  ]) ;

  code = new FormControl("" , [
    Validators.required,
  ])

  binForm = new FormGroup({
    title: this.title,
    code: this.code
  });

  save() {
    console.log("save" , this.binForm)
  }

  reset() {
    this.binForm.reset() ;
    console.log("form reset successfully: " , Date())
  }
}
