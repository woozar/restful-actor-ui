import { Component, Input, OnInit } from '@angular/core';
import { ApiMethod } from 'src/graphql/generated';

@Component({
  selector: 'app-api-method',
  templateUrl: './api-method.component.html',
  styleUrls: ['./api-method.component.scss'],
})
export class ApiMethodComponent implements OnInit {
  @Input()
  public method!: ApiMethod;

  public get background(): string {
    return 'darkred';
  }

  ngOnInit(): void {
    if (!this.method) throw new Error('Input method must not be undefined');
  }
}
