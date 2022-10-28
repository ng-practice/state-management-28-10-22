import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../models';
import { bookByIsbn } from '../store';

@Component({
  selector: 'ws-book-detail',
  styleUrls: ['./book-detail.component.scss'],
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent {
  public book$: Observable<Book | null>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookApiService
  ) {
    this.book$ = this.store.select(bookByIsbn);
  }

  remove() {
    this.route.params
      .pipe(
        exhaustMap(params => this.bookService.delete(params.isbn)),
        tap(() => this.router.navigateByUrl('/'))
      )
      .subscribe();
  }
}
