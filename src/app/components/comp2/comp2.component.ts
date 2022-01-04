import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from '@store/user/user.facade';
import { User } from '@store/user/user.model';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void { }

  users$: Observable<User[]> = this.userFacade.getUser();

}
