import { ActionReducerMap } from "@ngrx/store";
import { LoginEffects } from "./app-state/app.effect";
import * as fromLoginReducer from './app-state/app.reducer';


export interface AppState {
    appState: fromLoginReducer.AppState
}
export const reducers: ActionReducerMap<AppState, any> = {
    appState: fromLoginReducer.AppReducer
}

export const effects = [LoginEffects]

