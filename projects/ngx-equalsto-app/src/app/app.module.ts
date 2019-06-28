import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEqualstoModule } from '../../../ngx-equalsto/src/lib/ngx-equalsto.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxEqualstoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
