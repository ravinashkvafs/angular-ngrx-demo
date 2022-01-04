import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from '@component/comp1/comp1.component';
import { Comp2Component } from '@component/comp2/comp2.component';
import { reducers, metaReducers, FACADES, EFFECTS } from '@store/index';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(EFFECTS),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    ...FACADES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
