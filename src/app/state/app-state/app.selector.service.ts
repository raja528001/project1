import { Injectable } from '@angular/core';
import { createFeatureSelector, Store, State, createSelector } from '@ngrx/store';
import * as fromAction from './app.action';
import * as fromReducer from './app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppSelectorService {
    constructor(
        private store: Store<State<fromReducer.AppState>>
    ) { }

    private selectState = createFeatureSelector<fromReducer.AppState>(
        'APP'
    );

    private users = createSelector(
        this.selectState,
        (state) => state.users
    );

    private names = createSelector(
        this.selectState,
        (state) => state.names
    );

    private images = createSelector(
        this.selectState,
        (state) => state.imageDetails
    );

    public getUsers(): Observable<any> {
        return this.store.select(this.users);
    }

    public getNames(): Observable<any> {
        return this.store.select(this.names);
    }

    public getImages(): Observable<any> {
        return this.store.select(this.images);
    }

    public dispatchLoginAction(payload: any) {
        this.store.dispatch(new fromAction.LoginAction(payload));
    }

    public dispatchUpdateImagesAction(images: any) {
        this.store.dispatch(new fromAction.UpdateImagesAction(images));
    }

    public dispatchUpdateImagesInitialStateAction() {
        this.store.dispatch(new fromAction.UpdateImagesInitialStateAction());
    }

    public dispatchSignOffAction() {
        this.store.dispatch(new fromAction.SignOutAction());
    }

    public filterNames(value: string): Observable<any> {
        const val = value.startsWith('@') ? value.slice(1) : value;
        const filterValue = val.toLowerCase();
        return this.getNames().pipe(
            map(names => {
                return names.filter((name: any) => name.toLowerCase().includes(filterValue));
            })
        )
    }

    public returnImages() {
        const img = [{
            path: 'assets/image1.jpg'
        }, { path: 'assets/image5.jpg' }, { path: 'assets/image3.jpg' }, { path: 'assets/image4.jpg' },
        { path: 'assets/image8.jpg' }, { path: 'assets/image6.jpg' }, { path: 'assets/image7.jpg' }];
        return img;
    }

}
