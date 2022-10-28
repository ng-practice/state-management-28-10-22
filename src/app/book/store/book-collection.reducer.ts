import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../models';
import { bookActions, createBookComplete } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.feature';

export const adapter = createEntityAdapter<Book>({
  selectId: entity => entity.isbn
});

const initialState: BookCollectionSlice = adapter.getInitialState({
  isLoading: false
});

export const bookCollectionReducer = createReducer<BookCollectionSlice>(
  initialState,
  on(createBookComplete, (state, action) => adapter.addOne(action.book, state)),
  on(bookActions.loadingstarted, (state): BookCollectionSlice => ({ ...state, isLoading: true })),
  on(
    bookActions.loadingcompleted,
    (state, action): BookCollectionSlice => {
      const nextState = adapter.setAll(action.books, state);

      nextState.isLoading = false;

      return nextState;
    }
  )
);
