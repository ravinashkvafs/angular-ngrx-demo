import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const AddUser = createAction(
  '[User] Add User',
  (user: User) => ({ user })
);




