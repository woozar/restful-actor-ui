import { Component, Input, OnInit } from '@angular/core';
import { ApiMethod } from 'src/graphql/generated';

@Component({
  selector: 'api-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent implements OnInit {
  @Input()
  public method!: ApiMethod;

  public get background(): string {
    return 'darkred';
  }

  ngOnInit(): void {
    if (!this.method) throw new Error('Input method must not be undefined');
  }
}
