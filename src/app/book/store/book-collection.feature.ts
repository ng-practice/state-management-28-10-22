import { Book } from '../models';

export const bookFeatureKey = 'book';

export interface BookCollectionFeature {
  entities: ReadonlyArray<Book>;
}
