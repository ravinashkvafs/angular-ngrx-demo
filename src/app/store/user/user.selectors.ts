import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from './user.reducer';

const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const listUsers = createSelector(
    selectUserState,
    (state: UserState) => state?.list || []
);