import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';
import { BackendService } from '../backend.service';
import { loadApis } from '../store/apis.actions';
import { selectApi } from '../store/selected-api.actions';
import { StoreModel } from '../store/store.model';

const SELECTED_API = 'selected-api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public form?: FormGroup<{
    selectedApi: FormControl<ApiSpec | null>;
  }>;

  public apiSpecs$ = this.store.select('apis');

  constructor(private backend: BackendService, private store: Store<StoreModel>) {
    this.backend.loadApiSpecs();
    this.store.dispatch(loadApis());
  }

  ngOnInit(): void {
    this.apiSpecs$.subscribe((specs) => {
      const selectedApiId = localStorage.getItem(SELECTED_API);
      const selectedApi = specs.find((item) => item.id === selectedApiId);
      this.form = new FormGroup({
        selectedApi: new FormControl<ApiSpec | null>(selectedApi ?? null),
      });
      if (selectedApi) this.store.dispatch(selectApi(selectedApi));
      this.form.valueChanges.subscribe(({ selectedApi }) => {
        this.store.dispatch(selectApi(selectedApi ?? null));
        if (!selectedApi?.id) {
          localStorage.removeItem(SELECTED_API);
        } else {
          localStorage.setItem(SELECTED_API, selectedApi.id);
        }
      });
    });
  }

  public subscribe() {
    this.backend.subscribeNotifications();
  }
}
