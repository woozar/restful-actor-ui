import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from '../store/store.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public selectedApi$ = this.store.select('selectedApi');
  public notifications$ = this.store.select('notifications');

  constructor(private store: Store<StoreModel>) {}
}
