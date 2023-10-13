import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Title } from './Title/Title';

// const getInitialContacts = () => {
//   //   {
//   //   contacts: [],
//   //   filter: ""
//   // }
//   const parsedContacts = localStorage.getItem('contacts');
//   if (parsedContacts !== null) {
//     return JSON.parse(parsedContacts);
//   }
//   return [
//     { id: 'id-1', name: 'Tony Stark', number: '111-11-11' },
//     { id: 'id-2', name: 'Alexandr Repeta', number: '227-91-26' },
//     { id: 'id-3', name: 'Master Joda', number: '234-68-23' },
//     { id: 'id-4', name: 'Kanye West', number: '515-15-12' },
//     { id: 'id-5', name: 'Agent J', number: '765-74-35' },
//     { id: 'id-6', name: 'Lars von Trier', number: '153-87-24' },
//     { id: 'id-7', name: 'Govard Lavcraft', number: '666-66-66' },
//     { id: 'id-8', name: 'Albert Einstein', number: '167-13-98' },
//     { id: 'id-9', name: 'Peter Parker', number: '613-86-51' },
//     { id: 'id-10', name: 'Stephen Hawking', number: '632-86-12' },
//     { id: 'id-11', name: 'Garrus Vakarian', number: '574-13-76' },
//     { id: 'id-12', name: 'Frodo Baggins', number: '786-54-73' },
//   ];
// };

export const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(getInitialContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = line => {
  //   setFilter(line);
  // };

  // const addContacts = ({ name, number }) => {
  //   const isDuplicate = contacts.some(items => {
  //     return items.name.toLowerCase() === name.toLowerCase();
  //   });

  //   if (isDuplicate) return window.alert(`${name} is already in contacts.`);

  //   setContacts([{ id: nanoid(), name, number }, ...contacts]);
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(quiz => quiz.id !== id));
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(quiz => {
  //     if (filter === '') {
  //       return contacts;
  //     }
  //     return quiz.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px 0 0 0',
      }}
    >
      <Title />
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
