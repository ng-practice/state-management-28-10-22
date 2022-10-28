import { createReducer, on } from '@ngrx/store';
import { createBookStart } from './book-collection.actions';
import { BookCollectionFeature } from './book-collection.feature';

const initialState: BookCollectionFeature = {
  entities: []
};

export const bookCollectionReducer = createReducer<BookCollectionFeature>(
  initialState,
  on(
    createBookStart,
    (state, action): BookCollectionFeature => {
      const nextState = { ...state };

      nextState.entities = [...nextState.entities, action.book];

      return nextState;
    }
  )
);
