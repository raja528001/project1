import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs/operators';
import * as fromAction from './app.action';
import { AppSelectorService } from './app.selector.service';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private loginSelectSvc: AppSelectorService,
        private router: Router
    ) { }

    @Effect({dispatch: false})
    applogin$ = this.actions$.pipe(
        ofType(fromAction.LOGIN),
        map((actionData: fromAction.LoginAction) => actionData.reqData),
        switchMap((requestData: any) => {
            return this.loginSelectSvc.getUsers().pipe(
                take(1),
                map(users => {
                    users.map((data:any) => {
                        if((data.emailId === requestData.emailId) && (data.password === requestData.password)) {
                          localStorage.setItem('userDetails', JSON.stringify(data));
                          this.router.navigate(['namePage']);
                        }
                    })
                })
            )
            
        })
    );

    @Effect({dispatch: false})
    appSignOff$ = this.actions$.pipe(
        ofType(fromAction.SIGN_OFF),
        map((actionData: fromAction.SignOutAction) => actionData),
        map(() => {
            localStorage.clear();
            this.router.navigate(['/']);
        })
    );
}
