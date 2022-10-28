import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParam } from '../../router/store';
import { bookFeatureKey, BookFeatureState } from './book-collection.feature';
import { adapter } from './book-collection.reducer';

const bookFeature = createFeatureSelector<BookFeatureState>(bookFeatureKey);
const bookCollectionSlice = createSelector(bookFeature, feature => feature.bookCollectionSlice);

const { selectAll, selectEntities } = adapter.getSelectors(bookCollectionSlice);

export const bookCollection = selectAll;

export const bookByIsbn = createSelector(selectRouteParam('isbn'), selectEntities, (isbn, entities) =>
  isbn ? entities[isbn] || null : null
);
