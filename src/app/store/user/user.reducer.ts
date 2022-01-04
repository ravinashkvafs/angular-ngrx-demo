import { createReducer, on } from '@ngrx/store';
import { AddUser } from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export interface UserState {
  list: User[],
  loading: boolean
}

export const initialState: UserState = {
  list: [],
  loading: false
};

export const UserReducer = createReducer(
  initialState,
  on(
    AddUser,
    (state: UserState, { user }: any) => {
      return {
        list: [...state.list, user],
        loading: false
      };
    })
);

// export function reducer(state: UserState | undefined, action: Action): any {
//   return UserReducer(state, action);
// }
