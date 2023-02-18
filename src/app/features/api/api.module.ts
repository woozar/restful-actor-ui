import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodComponent } from 'src/app/features/api/components/method/method.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApiMethodsComponent } from './components/methods/methods.component';
import { ApiResponsesComponent } from './components/responses/responses.component';
import { ApiResponseComponent } from './components/response/response.component';
import { ApiPathComponent } from './components/path/path.component';
import { ApiPathsComponent } from './components/paths/paths.component';
import { apisReducer } from './store/apis.reducer';
import { selectedApiReducer } from './store/selected-api.reducer';
import { ApiEffects } from './store/apis.effect';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ApiPathComponent, ApiPathsComponent, MethodComponent, ApiMethodsComponent, ApiResponsesComponent, ApiResponseComponent],
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
