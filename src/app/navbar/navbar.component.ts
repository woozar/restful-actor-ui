import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';

import { selectApi } from '../features/api/store/selected-api.actions';
import { StoreModel } from '../store/store.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public form?: FormGroup<{
    selectedApi: FormControl<ApiSpec | null>;
  }>;

  public apiSpecs$ = this.store.select('apis');
  public selectedApi$ = this.store.select('selectedApi');

  constructor(private store: Store<StoreModel>) {}

  public selectedApiChanged({ value }: MatSelectChange): void {
    this.store.dispatch(selectApi(value));
  }
}
