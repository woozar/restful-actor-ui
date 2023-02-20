import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MethodComponent } from 'src/app/features/api/components/method/method.component';

import { MethodsComponent } from './components/methods/methods.component';
import { ApiPathComponent } from './components/path/path.component';
import { ApiPathsComponent } from './components/paths/paths.component';
import { ApiResponseComponent } from './components/response/response.component';
import { ApiResponsesComponent } from './components/responses/responses.component';
import { ApiEffects } from './store/apis.effect';
import { apisReducer } from './store/apis.reducer';
import { selectedApiReducer } from './store/selected-api.reducer';

@NgModule({
  declarations: [ApiPathComponent, ApiPathsComponent, MethodComponent, MethodsComponent, ApiResponsesComponent, ApiResponseComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('apis', apisReducer),
    StoreModule.forFeature('selectedApi', selectedApiReducer),
    EffectsModule.forFeature(ApiEffects),
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  exports: [ApiPathsComponent],
})
export class ApiModule {}
