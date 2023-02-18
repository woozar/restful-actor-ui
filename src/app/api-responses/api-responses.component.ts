import { Component, Input } from '@angular/core';
import { ApiResponse } from 'src/graphql/generated';

@Component({
  selector: 'app-api-responses',
  templateUrl: './api-responses.component.html',
  styleUrls: ['./api-responses.component.scss'],
})
export class ApiResponsesComponent {
  @Input()
  public responses: ApiResponse[] = [];
}
