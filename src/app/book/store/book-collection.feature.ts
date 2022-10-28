import { ActionReducerMap } from '@ngrx/store';
import { Book } from '../models';
import { bookCollectionReducer } from './book-collection.reducer';

export const bookFeatureKey = 'book';

export interface BookFeatureState {
  bookCollectionSlice: BookCollectionSlice;
}

export interface BookCollectionSlice {
  entities: ReadonlyArray<Book>;
  isLoading: boolean;
}

export const bookReducers: ActionReducerMap<BookFeatureState> = {
  bookCollectionSlice: bookCollectionReducer
};
