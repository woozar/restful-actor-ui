import { Component, Input } from '@angular/core';
import { ApiResponse } from 'src/graphql/generated';

@Component({
  selector: 'api-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss'],
})
export class ApiResponsesComponent {
  @Input()
  public responses: ApiResponse[] = [];
}
