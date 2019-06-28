# ngx-Equalsto

Angular directive to check if 2 or more input values are same in the reactive form. If not, then mark the form control invalid with error. This is widely use with form that have password and password confirm.  

## Installation

`npm install --save ngx-equalsto`

Import `NgxEqualsto` in your app module.

```typescript
import { NgxEqualstoModule } from 'ngx-equalsto';

@NgModule({
  imports: [
    NgxEqualstoModule,
  ],
})

export class AppModule {}
```

## Usage

This directive work with reactive form only. You need to mention the form control that equals to in `equalsTo` directive. If you add `isConfirm` directive in the input, then the error will only reflect to that form control. 

Here is the example of how to use in `COMP.component.ts` and `COMP.component.html`.

```typescript
export class AppComponent implements OnInit {
  exampleForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      password: null,
      passwordConfirm: null,
    });
  }
}
```

```html
<form [formGroup]="exampleForm">
  <input formControlName="password" equalsTo="passwordConfirm">
  <input formControlName="passwordConfirm" equalsTo="password" isConfirm="true">
</form>
```

## License

MIT
