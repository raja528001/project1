import { SIGN_OFF } from "./app-state/app.action";

export function clearState(reducer:any) {
    return function (state: any, action: any) {
        if (action.type === SIGN_OFF) {
            state = undefined;
        }
        return reducer(state, action);
    };
}