import React from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import MultipleSearchableSelect, { MultipleSearchableSelectProps } from "./MultipleSearchableSelect";
import classNames from "classnames";

const MultipleSearchableSelectFormField = <T extends FieldValues>({
  control,
  path,
  ...rest
}: {
  control: Control<T>;
  path: FieldPath<T>;
} & Omit<MultipleSearchableSelectProps, "value" | "onSelect">) => {
  return (
    <Controller
      control={control}
      name={path}
      render={({ field: { onChange, value }, formState: {}, fieldState: { error } }) => (
        <div className={classNames("fr-input-group", error && "fr-input-group--error")}>
          <MultipleSearchableSelect
            {...rest}
            value={value}
            onSelect={(values) => onChange(values.map((value) => value.value))}
          />
          {error && <p className={classNames("fr-error-text", "fr-mb-3v")}>{error.message}</p>}
        </div>
      )}
    />
  );
};

export default MultipleSearchableSelectFormField;
