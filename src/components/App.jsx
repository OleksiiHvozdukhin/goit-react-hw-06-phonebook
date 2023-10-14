import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';

export const App = () => {
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
