import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookFeatureKey, BookFeatureState } from './book-collection.feature';

const bookFeature = createFeatureSelector<BookFeatureState>(bookFeatureKey);

export const bookCollection = createSelector(bookFeature, feature => feature.bookCollectionSlice.entities);

export const bookByIsbn = (isbn: string) =>
  createSelector(
    bookFeature,
    feature => feature.bookCollectionSlice.entities.find(entity => entity.isbn === isbn) || null
  );
