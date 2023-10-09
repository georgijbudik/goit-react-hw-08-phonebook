import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Link } from './Navigation.styled';
import { Box } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  return (
    <Box ml={6}>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="contacts">Contacts</Link>}
      </nav>
    </Box>
  );
};

export default Navigation;
