import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddUser } from './user.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions) { }

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(AddUser),
    map((movies) => {
      console.log('Effects', movies)
      return { type: 'sad', payloa: movies };
    })
  ));

}
