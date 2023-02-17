import { Component, Input } from '@angular/core';
import { ApiMethod } from 'src/graphql/generated';

@Component({
  selector: 'app-api-methods',
  templateUrl: './api-methods.component.html',
  styleUrls: ['./api-methods.component.scss'],
})
export class ApiMethodsComponent {
  @Input()
  public methods: ApiMethod[] = [];
}
