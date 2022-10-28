import { createReducer, on } from '@ngrx/store';
import { bookActions, createBookComplete } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.feature';

const initialState: BookCollectionSlice = {
  entities: [],
  isLoading: false
};

export const bookCollectionReducer = createReducer<BookCollectionSlice>(
  initialState,
  on(
    createBookComplete,
    (state, action): BookCollectionSlice => {
      const nextState = { ...state };

      nextState.entities = [action.book, ...nextState.entities];

      return nextState;
    }
  ),
  on(
    bookActions.loadingstarted,
    (state): BookCollectionSlice => {
      const nextState = { ...state };

      nextState.isLoading = true;

      return nextState;
    }
  ),
  on(
    bookActions.loadingcompleted,
    (state, action): BookCollectionSlice => {
      const nextState = { ...state };

      nextState.entities = action.books;
      nextState.isLoading = false;

      return nextState;
    }
  )
);
