import { Component, Input } from '@angular/core';
import { ApiPath } from 'src/graphql/generated';

@Component({
  selector: 'api-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.scss'],
})
export class ApiPathsComponent {
  @Input()
  public paths: ApiPath[] = [];
}
