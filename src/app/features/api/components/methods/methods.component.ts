import { Component, Input } from '@angular/core';
import { ApiMethod } from 'src/graphql/generated';

@Component({
  selector: 'api-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class ApiMethodsComponent {
  @Input()
  public methods: ApiMethod[] = [];
}
