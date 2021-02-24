import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createBookStart } from '@store/book';
import { bookNa } from '../models';

@Component({
  selector: 'ws-book-new',
  styleUrls: ['./book-new.component.scss'],
  templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnDestroy {
  sink = new Subscription();
  form = this.buildForm();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store,
    private bookService: BookApiService
  ) {
    this.form = this.buildForm();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

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
