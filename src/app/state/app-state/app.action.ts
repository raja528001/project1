import { Action } from '@ngrx/store';

export const LOGIN = '[LOGIN] app login';
export const IMAGE_UPDATE = '[IMAGE_UPDATE] store images' ;
export const IMAGE_UPDATE_INITIAL_STATE = '[IMAGE_UPDATE_INITIAL_STATE]  images inital state' ;
export const SIGN_OFF = '[SIGN_OFF] app signoff';



export class LoginAction implements Action {
    readonly type = LOGIN;
    constructor(public reqData: any) {}
}

export class UpdateImagesAction implements Action {
    readonly type = IMAGE_UPDATE;
    constructor(public images: any) {}
}

export class UpdateImagesInitialStateAction implements Action {
    readonly type = IMAGE_UPDATE_INITIAL_STATE;
}

export class SignOutAction implements Action {
    readonly type = SIGN_OFF;
}


export type Actions = LoginAction | UpdateImagesAction | UpdateImagesInitialStateAction;
