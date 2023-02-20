import { Component, Input } from '@angular/core';
import { Method } from 'src/graphql/generated';

@Component({
  selector: 'api-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent {
  @Input()
  public methods: Method[] = [];
}
