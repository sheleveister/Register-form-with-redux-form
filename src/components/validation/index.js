export const validate = values => {
  const errors = {};

  if (!values.surname) {
    errors.surname = 'Surname is required';
  }
  if (!values.firstname) {
    errors.firstname = 'Surname id required';
  }
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username must be at least 4 characters long';
  } else if (values.username.length > 10) {
    errors.username = 'Username is too long';
  }

  return errors;
};

export const required = value =>
  value ? undefined : 'Value is required';

export const minLength = value =>
  value.length < 4
    ? 'Value must be at leest 4 characters'
    : undefined;

export const maxLength = value =>
  value.length > 10
    ? 'Value is too long'
    : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password
    ? undefined
    : 'Password must match';

export const asyncValidate = async values => {
  const isUsername = ['kent', 'andy', 'john', 'joel'].includes(values.username);

  const pending = ms => new Promise(resolve => setTimeout(resolve, ms));
  await pending(1000);

  if (isUsername) {
    return Promise.reject({
      username: 'Username already taken'
    })
  }
};