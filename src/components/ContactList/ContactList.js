// import { deleteContact } from 'redux/action';
import { deleteContact } from 'redux/contactsSlice';
import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

// export const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ContactsList>
//       {contacts.map(contacts => {
//         return (
// <ContactListItem key={contacts.id}>
//   <ContactTitle>
//     {contacts.name}, {contacts.number}
//   </ContactTitle>
//   <ContactButton onClick={() => deleteContact(contacts.id)}>
//     Delete
//   </ContactButton>
// </ContactListItem>
//         );
//       })}
//     </ContactsList>
//   );
// };

export const ContactList = () => {
  // Получаем массив задач из состояния Redux
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(filter);
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  // const statusFilter = useSelector(state => state.filters.status);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
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
