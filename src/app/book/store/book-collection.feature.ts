import { EntityState } from '@ngrx/entity';
import { ActionReducerMap } from '@ngrx/store';
import { Book } from '../models';
import { bookCollectionReducer } from './book-collection.reducer';

export const bookFeatureKey = 'book';

export interface BookFeatureState {
  bookCollectionSlice: BookCollectionSlice;
}

export interface BookCollectionSlice extends EntityState<Book> {
  isLoading: boolean;
}

export const bookReducers: ActionReducerMap<BookFeatureState> = {
  bookCollectionSlice: bookCollectionReducer
};
