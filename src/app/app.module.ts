import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComplicatedFormComponent } from './components/complicated-form/complicated-form.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';

@NgModule({
  declarations: [AppComponent, ComplicatedFormComponent, SimpleFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
