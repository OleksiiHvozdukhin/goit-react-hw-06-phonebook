import { combineReducers } from 'redux';

const initionalContacts = [
  { id: 'id-1', name: 'Tony Stark', number: '111-11-11' },
  { id: 'id-2', name: 'Alexandr Repeta', number: '227-91-26' },
  { id: 'id-3', name: 'Master Joda', number: '234-68-23' },
  { id: 'id-4', name: 'Kanye West', number: '515-15-12' },
  { id: 'id-5', name: 'Agent J', number: '765-74-35' },
  { id: 'id-6', name: 'Lars von Trier', number: '153-87-24' },
  { id: 'id-7', name: 'Govard Lavcraft', number: '666-66-66' },
  { id: 'id-8', name: 'Albert Einstein', number: '167-13-98' },
  { id: 'id-9', name: 'Peter Parker', number: '613-86-51' },
  { id: 'id-10', name: 'Stephen Hawking', number: '632-86-12' },
  { id: 'id-11', name: 'Garrus Vakarian', number: '574-13-76' },
  { id: 'id-12', name: 'Frodo Baggins', number: '786-54-73' },
];

const contactsReducer = (state = initionalContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'contacts/deleteContact': {
      return state.filter(contact => contact.id !== action.payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/getVisibleContacts':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
