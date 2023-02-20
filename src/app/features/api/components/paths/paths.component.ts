import { Component, Input } from '@angular/core';
import { Path } from 'src/graphql/generated';

@Component({
  selector: 'api-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.scss'],
})
export class ApiPathsComponent {
  @Input()
  public paths: Path[] = [];
}
