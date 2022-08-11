export const updateObject = (oldObject: object, updatedProperties: object): object => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
