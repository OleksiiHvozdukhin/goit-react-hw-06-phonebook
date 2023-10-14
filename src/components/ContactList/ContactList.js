import { deleteContact } from 'redux/contactsSlice';
import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(contacts => {
        if (
          filter &&
          !contacts.name.toLowerCase().includes(filter.toLowerCase())
        ) {
          return null;
        }
        return (
          <ContactListItem key={contacts.id}>
            <ContactTitle>
              {contacts.name}, {contacts.number}
            </ContactTitle>
            <ContactButton onClick={() => dispatch(deleteContact(contacts.id))}>
              Delete
            </ContactButton>
          </ContactListItem>
        );
      })}
    </ContactsList>
  );
};
