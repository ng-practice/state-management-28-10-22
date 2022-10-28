import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { bookActions, createBookComplete, createBookStart } from './book-collection.actions';

@Injectable()
export class BookCollectionEffects {
  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createBookStart),
      exhaustMap(action => this.bookApiService.create(action.book)),
      map(book => createBookComplete({ book }))
    );
  });

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(bookActions.loadingstarted),
      exhaustMap(() => this.bookApiService.getAll()),
      map(books => bookActions.loadingcompleted({ books })) // this.store.dispatch wird für uns durch NgRx erledigt
    );
  });

  navigateToStart$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createBookComplete),
        tap(() => this.router.navigateByUrl('/'))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private bookApiService: BookApiService) {}
}
