import { Container } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { fetchContacts } from 'components/redux/contacts/contactOperations';
import { selectError } from 'components/redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <ContactForm />
      <Filter />
      {error && <b>Error!</b>}
      <ContactList />
    </Container>
  );
};

export default Contacts;
