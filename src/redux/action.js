const { nanoid } = require('@reduxjs/toolkit');

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const getVisibleContacts = value => {
  return {
    type: 'filter/getVisibleContacts',
    payload: value,
  };
};
