import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

const routerFeature = createFeatureSelector<RouterReducerState>('router');

export const { selectRouteParam } = getSelectors(routerFeature);
