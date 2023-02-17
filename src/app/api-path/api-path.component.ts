import { Component, Input, OnInit } from '@angular/core';
import { ApiPath } from 'src/graphql/generated';

@Component({
  selector: 'app-api-path',
  templateUrl: './api-path.component.html',
  styleUrls: ['./api-path.component.scss'],
})
export class ApiPathComponent implements OnInit {
  @Input()
  public path!: ApiPath;

  ngOnInit(): void {
    if (!this.path) throw new Error('Input path must not be undefined');
  }
}
