import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookCollectionFeature, bookFeatureKey } from './book-collection.feature';

const bookFeature = createFeatureSelector<BookCollectionFeature>(bookFeatureKey);

export const bookCollection = createSelector(bookFeature, feature => feature.entities);

export const bookByIsbn = (isbn: string) =>
  createSelector(bookFeature, feature => feature.entities.find(entity => entity.isbn === isbn) || null);
