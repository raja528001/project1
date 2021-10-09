import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { clearState } from './state/metareducer';
import { effects, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { AppSelectorService } from './state/app-state/app.selector.service';
import * as fromLoginReducer  from './state/app-state/app.reducer';

export const metaReducers: MetaReducer<any>[] = [clearState];

@NgModule({
  declarations: [
    AppComponent,
    NameTagComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('APP', fromLoginReducer.AppReducer),
    EffectsModule.forRoot(effects),


  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },
    AppSelectorService
  ],
  exports: [
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
