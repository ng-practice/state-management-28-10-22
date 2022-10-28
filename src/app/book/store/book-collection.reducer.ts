import { createReducer, on } from '@ngrx/store';
import { bookActions, createBookStart } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.feature';

const initialState: BookCollectionSlice = {
  entities: []
};

export const bookCollectionReducer = createReducer<BookCollectionSlice>(
  initialState,
  on(
    createBookStart,
    (state, action): BookCollectionSlice => {
      const nextState = { ...state };

      nextState.entities = [...nextState.entities, action.book];

      return nextState;
    }
  ),
  on(
    bookActions.loadingcompleted,
    (state, action): BookCollectionSlice => {
      const nextState = { ...state };

      nextState.entities = action.books;

      return nextState;
    }
  )
);
