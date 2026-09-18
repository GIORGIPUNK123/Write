import { Login } from './importants/Login';
import { UserAuth } from '../context/AuthContext';

export const DisplayPage = (props: { page: any }) => {
  // component which displays the page if user exists and is logged in
  const { user } = UserAuth(); // getting user from UserAuth which is context
  if (user) {
    return props.page;
  } else {
    return <Login />;
  }
};
