import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const getValidationErrors = (err: ValidationError): Errors => {
  const validationErrors: Errors = {};

  err.inner.forEach(({ path, message }) => {
    validationErrors[path] = message;
  });

  return validationErrors;
};

export default getValidationErrors;
