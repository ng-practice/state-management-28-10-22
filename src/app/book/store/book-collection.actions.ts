import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../models';

export const createBookStart = createAction('[Book] Book Creation Started', props<{ book: Book }>());
export const createBookComplete = createAction('[Book] Book Creation Completed', props<{ book: Book }>());

export const bookActions = createActionGroup({
  source: 'Book',
  events: {
    loadingStarted: emptyProps(),
    loadingCompleted: props<{ books: Book[] }>()
  }
});
