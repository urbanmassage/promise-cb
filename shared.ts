export interface Callback<T> {
  (err: Error, result?: T): void;
}