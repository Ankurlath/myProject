export const requiredField = (value) => {
  if (!value || value.length <= 0) {
    return 'Empty Field.';
  }
  return '';
}

export const ccfield = (value) => {
  if (!value || value.length <= 0) {
    return 'Empty Field.';
  }
  if (!(value.length == 16)) {
    return 'Invalid Card number.';
  }
  return '';
}
