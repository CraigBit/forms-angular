import { Component, ViewChild } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent {
  // Шаблонные формы:
  // если не хочется передавать параметр в функцию, то можно так
  // тогда в функции обращаемся к названию переменной через this
  @ViewChild('myForm') formik!: NgForm;
  submitForm(form: NgForm) {
    console.log(form);
    console.log(this.formik.value);
    // очистить форму можно здесь, а можно в шаблоне
    // form.reset();
  }

  // Реактивные формы: создаются в самом компоненте, а не шаблоне
  // Через FormGroup
  reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('Dima'),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    profee: new FormControl('keker'),
  });

  formStatus: string = this.reactiveForm.status;

  submitForm2() {
    console.log(this.reactiveForm);
  }

  // Через FormBuilder

  builderForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    this.builderForm = this.FormBuilder.group({
      name: ['Bonder'],
      age: ['540'],
      profee: ['Plumber'],
    });
  }

  submitForm3() {
    console.log(this.builderForm.value);
  }
}
