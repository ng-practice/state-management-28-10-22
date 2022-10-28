import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { bookNa } from '../models';
import { createBookStart } from '../store';

@Component({
  selector: 'ws-book-new',
  styleUrls: ['./book-new.component.scss'],
  templateUrl: './book-new.component.html'
})
export class BookNewComponent {
  form = this.buildForm();

  constructor(private store: Store, private fb: FormBuilder) {}

  create() {
    const book = { ...bookNa(), ...this.form.value };

    this.store.dispatch(createBookStart({ book }));
  }

  private buildForm() {
    return this.fb.nonNullable.group({
      isbn: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', Validators.required],
      author: ['', Validators.required],
      cover: ['']
    });
  }
}
