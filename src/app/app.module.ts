import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { apisReducer } from './store/apis.reducer';
import { NavbarComponent } from './navbar/navbar.component';
import { selectedApiReducer } from './store/selected-api.reducer';
import { HomeComponent } from './home/home.component';
import { notificationsReducer } from './store/notifications.reducer';
import { ApiPathComponent } from './api-path/api-path.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApiPathsComponent } from './api-paths/api-paths.component';
import { ApiMethodComponent } from './api-method/api-method.component';
import { ApiMethodsComponent } from './api-methods/api-methods.component';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './store/apis.effect';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ApiPathComponent, ApiPathsComponent, ApiMethodComponent, ApiMethodsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot({
      apis: apisReducer,
      selectedApi: selectedApiReducer,
      notifications: notificationsReducer,
    }),
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    FlexModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GraphQLModule,
    HttpClientModule,
    MatExpansionModule,
    // EffectsModule,
    EffectsModule.forRoot([ApiEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
