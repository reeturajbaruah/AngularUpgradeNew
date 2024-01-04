import { Injectable } from '@angular/core';

@Injectable()
export class AuthEvents {
    loginSuccess = 'auth-login-success';
    //loginFailed = 'auth-login-failed';
    logoutSuccess = 'auth-logout-success';
    sessionTimedOut = 'auth-session-timeout';
    securityIssue = 'auth-security-issue';
    notAuthenticated = 'auth-not-authenticated';
    notAuthorized = 'auth-not-authorized';
    restoredUserState = 'restored-user-state'; // Occurs after a page refresh
    setNavBarLogin = 'set-nav-bar-login';
}
