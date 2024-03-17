import { Login } from './Login';
import { UserAuth } from '../context/AuthContext';

export const DisplayPage = (props: { page: any }) => {
  const { user } = UserAuth();
  if (user) {
    return props.page;
  } else {
    return <Login />;
  }
};
