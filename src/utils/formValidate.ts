/* eslint-disable @typescript-eslint/no-explicit-any */
export type ValidateOptionType = {
  [key: string]: {
    value: any;
    validate: (value: any) => boolean;
    errorText: string;
  };
};

export const fromValidate = (validations: ValidateOptionType) => {
  let hasError = false;
  const errors: { [key: string]: string } = {};

  Object.entries(validations).forEach(([key, validate]) => {
    if (validate.validate(validate.value)) {
      errors[key] = validate.errorText;
      hasError = true;
    } else {
      errors[key] = '';
    }
  });

  return { errors, hasError };
};
