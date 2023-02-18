import { filter, OperatorFunction } from 'rxjs';

export function isDefined<T>(): OperatorFunction<T | null | undefined, T> {
  return filter((input: T | null | undefined): input is T => !!input);
}
