import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiResponse, HttpContent } from 'src/graphql/generated';

@Component({
  selector: 'api-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ApiResponseComponent {
  @Input()
  public response!: ApiResponse;

  public form?: FormGroup<{
    content: FormControl<HttpContent | null>;
  }>;

  ngOnInit(): void {
    if (!this.response) throw new Error('Input response must not be undefined');
    this.form = new FormGroup({
      content: new FormControl<HttpContent | null>(this.response?.contents.length ? this.response.contents[0] : null),
    });
  }

  public prettyParse(input?: HttpContent): string {
    if (!input) return '';
    try {
      const data = input.example ? input.example : input.schema;
      // ToDo make mimetype-dependant
      return JSON.stringify(JSON.parse(data), null, 2);
    } catch (e) {
      return input.schema;
    }
  }

  public getClass(code: number): string {
    if (code < 300) return 'ok';
    if (code < 400) return 'forward';
    if (code < 500) return 'error';
    return 'serverError';
  }
}
