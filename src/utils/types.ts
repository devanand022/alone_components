export interface ColumnInterface<T> {
  key: keyof T;
  label: string;
}
