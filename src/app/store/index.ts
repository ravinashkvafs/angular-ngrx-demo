import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserEffects } from './user/user.effects';
import { UserFacade } from './user/user.facade';
import { userFeatureKey, UserReducer } from './user/user.reducer';

export const FACADES = [
  UserFacade
];

export const EFFECTS = [
  UserEffects
];

export interface State { }

export const reducers: ActionReducerMap<State> = {
  [userFeatureKey]: UserReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
