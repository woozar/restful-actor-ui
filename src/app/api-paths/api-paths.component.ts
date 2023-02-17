import { Component, Input } from '@angular/core';
import { ApiPath } from 'src/graphql/generated';

@Component({
  selector: 'app-api-paths',
  templateUrl: './api-paths.component.html',
  styleUrls: ['./api-paths.component.scss'],
})
export class ApiPathsComponent {
  @Input()
  public paths: ApiPath[] = [];
}
