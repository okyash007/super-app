export const validate = (regix, value) => {
  const isError = regix.test(value);
  if (isError) {
    return true;
  } else if (!isError) {
    return false;
  }
};

export function selectTrue(arr) {
  return arr.filter((obj) => obj.select === true);
}

export function findIndexByProperty(arr, propertyName, propertyValue) {
  return arr.findIndex((obj) => obj[propertyName] === propertyValue);
}
