import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { bookActions } from './book-collection.actions';

@Injectable()
export class BookCollectionEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(bookActions.loadingstarted),
      exhaustMap(() => this.bookApiService.getAll()),
      map(books => bookActions.loadingcompleted({ books })) // this.store.dispatch wird für uns durch NgRx erledigt
    );
  });

  constructor(private actions$: Actions, private bookApiService: BookApiService) {}
}
