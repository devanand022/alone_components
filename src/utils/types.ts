interface ColumnInterface<T> {
  key: keyof T;
  label: string;
}

interface OptionsInterface {
  label: string;
  value: string | number;
}

export type { ColumnInterface, OptionsInterface };
