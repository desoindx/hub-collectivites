import React from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import MultipleSearchableSelect, { MultipleSearchableSelectProps } from "./MultipleSearchableSelect";

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
      render={({ field: { onChange, value }, formState: {} }) => (
        <MultipleSearchableSelect
          className="fr-input-group"
          {...rest}
          value={value}
          onSelect={(values) => onChange(values.map((value) => value.value))}
        />
      )}
    />
  );
};

export default MultipleSearchableSelectFormField;
