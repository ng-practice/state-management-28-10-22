import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { bookNa } from '../models';
import { createBookStart } from '../store';

@Component({
  selector: 'ws-book-new',
  styleUrls: ['./book-new.component.scss'],
  templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnDestroy {
  sink = new Subscription();
  form = this.buildForm();

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookApiService
  ) {}

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

  create() {
    const book = { ...bookNa(), ...this.form.value };

    this.store.dispatch(createBookStart({ book }));

    this.sink.add(
      this.bookService
        .create(book)
        .pipe(tap(() => this.router.navigateByUrl('/')))
        .subscribe()
    );
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
