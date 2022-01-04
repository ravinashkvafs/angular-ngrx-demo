import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUser } from './user.actions';
import { User } from './user.model';
import { UserState } from './user.reducer';
import { listUsers } from './user.selectors';

@Injectable()
export class UserFacade {

  constructor(private store: Store<UserState>) { }

  addUser(user: User) {
    return this.store.dispatch(AddUser(user));
  }

  getUser() {
    return this.store.select(listUsers);
  }

}
