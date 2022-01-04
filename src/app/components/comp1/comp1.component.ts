import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@store/user/user.facade';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void { }

  addNewUser(name: string) {
    this.userFacade.addUser({
      name,
      age: 231,
      height: "2'"
    });
  }

}
