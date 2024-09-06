"use client";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { AddressCollectivite } from "@/services/adresseApi/types";
import { fetchCollectiviteFromBanApi } from "@/services/adresseApi/fetch";
import { Combobox, Transition } from "@headlessui/react";
import classNames from "classnames";
import RedAsterisk from "@/components/RedAsterisk";
import styles from "./CollectiviteInputFormField.module.css";
import { debounce } from "lodash";

type CommonProps<T extends FieldValues> = {
  className?: string;
  control: Control<T>;
  path: FieldPath<T>;
  disabled?: boolean;
  label?: ReactNode;
  hint?: string;
  placeholder?: string;
  valid?: string;
  icon?: string;
  info?: ReactNode | ((_?: string | null) => ReactNode);
  asterisk?: boolean;
};

export type InputFormFieldProps<T extends FieldValues> = CommonProps<T>;

const CollectiviteInputFormField = <T extends FieldValues>({
  label,
  path,
  control,
  hint,
  disabled,
  className,
  valid,
  icon,
  info,
  asterisk,
  ...rest
}: InputFormFieldProps<T>) => {
  const id = `input-form-field__${path}`;

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchedAddresses, setFetchedAddresses] = useState<AddressCollectivite[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCollectiviteFromBanApi(query)
      .then((result) => {
        setFetchedAddresses(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const throttledFetchCollectivite = debounce((keyword) => setQuery(keyword), 200);

  return (
    <Controller
      control={control}
      name={path}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { invalid, isTouched, error } }) => {
        let ariaDescribedBy: string | undefined;
        if (error) {
          ariaDescribedBy = `${id}__error`;
        } else if (valid && isTouched && !invalid) {
          ariaDescribedBy = `${id}__valid`;
        }

        const input = (
          <Combobox defaultValue={value} onChange={onChange} nullable disabled={disabled}>
            <div className="relative mt-1">
              <div className={"flex items-center"}>
                <Combobox.Input
                  aria-describedby={ariaDescribedBy}
                  className=" fr-input w-full "
                  displayValue={(address: AddressCollectivite) =>
                    address ? `${address?.nomCollectivite} - ${address?.codePostal}` : ""
                  }
                  onChange={(event) => throttledFetchCollectivite(event.target.value)}
                  onBlur={onBlur}
                  ref={ref}
                  {...rest}
                />
              </div>
              <Transition
                as={Fragment}
                leave={styles.optionsTransitionLeave}
                leaveFrom={styles.optionsTransitionLeaveFrom}
                leaveTo={styles.optionsTransitionLeaveTo}
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className={styles.options}>
                  {fetchedAddresses.length === 0 && query !== "" && !loading ? (
                    <div className={styles.optionResult}>Aucun résultat.</div>
                  ) : (
                    fetchedAddresses.map((address) => (
                      <Combobox.Option
                        key={address.banId}
                        className={({ active }) => classNames(styles.optionResult, active ? styles.optionActive : "")}
                        value={address}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classNames(styles.optionLabel)}>
                              {`${address.nomCollectivite} - ${address.codePostal}`}
                            </span>
                            {selected ? (
                              <span className={classNames(styles.option, active ? styles.optionActive : "")} />
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        );
        return (
          <div
            className={classNames(
              "fr-input-group",
              {
                "fr-input-group--error": error,
                "fr-input-group--disabled": disabled,
                "fr-input-group--valid": valid && isTouched && !invalid,
              },
              className,
            )}
          >
            <label className="fr-label fr-mb-1v" htmlFor={id}>
              {label} {asterisk && <RedAsterisk />}
              {hint && <span className="fr-hint-text">{hint}</span>}
            </label>
            {icon ? <div className={`fr-input-wrap ${icon}`}>{input}</div> : input}
            {info && (
              <p id={`${id}__info`} className="fr-hint-text fr-mt-1v fr-mb-0">
                {typeof info === "function" ? info(value) : info}
              </p>
            )}
            {error && (
              <p id={`${id}__error`} className={classNames("fr-error-text", { "fr-mt-1v": !!info })}>
                {error.message}
              </p>
            )}
            {valid && isTouched && !invalid && (
              <p id={`${id}__valid`} className={classNames("fr-valid-text", { "fr-mt-1v": !!info })}>
                {valid}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default CollectiviteInputFormField;
