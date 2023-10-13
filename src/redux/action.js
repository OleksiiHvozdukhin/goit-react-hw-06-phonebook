// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = createAction(
//   'contacts/addContact',
//   ({ name, number }) => {
//     return {
//       type: 'contacts/addContact',
//       payload: {
//         id: nanoid(),
//         name: name,
//         number: number,
//       },
//     };
//   }
// );

// // export const addContact = ({ name, number }) => {
// //   return {
// //     type: 'contacts/addContact',
// //     payload: {
// //       id: nanoid(),
// //       name: name,
// //       number: number,
// //     },
// //   };
// // };

// export const deleteContact = createAction('contacts/deleteContact', id => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: id,
//   };
// });

// // export const deleteContact = id => {
// //   return {
// //     type: 'contacts/deleteContact',
// //     payload: id,
// //   };
// // };

// export const getVisibleContacts = createAction(
//   'filter/getVisibleContacts',
//   value => {
//     return {
//       type: 'filter/getVisibleContacts',
//       payload: value,
//     };
//   }
// );

// // export const getVisibleContacts = value => {
// //   return {
// //     type: 'filter/getVisibleContacts',
// //     payload: value,
// //   };
// // };
