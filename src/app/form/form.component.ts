import { Component } from '@angular/core';
import { Data } from '../data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  model = new Data(1, "", 15) 

  submitted = false

  onSubmit() {
    this.submitted = true
  }

  newUser(){
    this.model
  }
}
