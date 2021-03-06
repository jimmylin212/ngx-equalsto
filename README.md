# ngx-Equalsto

[![pipeline status](https://gitlab.com/jimmylin212/ngx-equalsto/badges/master/pipeline.svg)](https://gitlab.com/jimmylin212/ngx-equalsto/commits/master)
[![coverage report](https://gitlab.com/jimmylin212/ngx-equalsto/badges/master/coverage.svg)](https://gitlab.com/jimmylin212/ngx-equalsto/commits/master)

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

This directive work with reactive form only. You need to mention the form control that equals to in `equalsTo` directive.

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
  <input formControlName="password">
  <input formControlName="passwordConfirm" equalsTo="password">
</form>
```

## License

MIT
