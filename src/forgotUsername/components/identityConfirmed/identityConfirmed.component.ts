import { Component, Input, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as forgotPasswordStateNames } from 'forgotPassword/constants';
import { ICmsIdentityConfirmed } from 'forgotUsername/forgotUsername.interfaces';

@Component({
  selector: 'identity-confirmed',
  templateUrl: './identityConfirmed.component.html',
  styleUrls: ['./identityConfirmed.component.less']
})
export class IdentityConfirmedComponent implements OnInit {

  public username: string;

  @Input() cmsData: ICmsIdentityConfirmed;

  constructor(
    private uiRouterGlobals: UIRouterGlobals,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.username = this.uiRouterGlobals.params.loginId;
  }

  public goToForgetPassword(): void {
    this.stateService.go(forgotPasswordStateNames.FindAccount);
  }

}
