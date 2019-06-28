import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMsg = 'Input is not equal!!!';
  exampleForm: FormGroup;
  showErrorMsg: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.showErrorMsg = false;

    this.exampleForm = this.formBuilder.group({
      password: [ null, Validators.required ],
      passwordConfirm: [ null, Validators.required ],
    });

    this.exampleForm.valueChanges.subscribe(() => {
      if (this.exampleForm.get('password').touched && this.exampleForm.get('password').value !== ''
        && this.exampleForm.get('passwordConfirm').touched && this.exampleForm.get('passwordConfirm').value !== ''
        && this.exampleForm.invalid) {

        this.showErrorMsg = true;
      } else {
        this.showErrorMsg = false;
      }
    });
  }
}
