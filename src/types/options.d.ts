export type SelectOption<T extends string = string> = {
  name: string;
  value: T;
  disabled?: boolean;
  hidden?: boolean;
};
