import { Login } from './Login';

export const DisplayPage = (props: { page: any }) => {
  const loggedIn = false;
  if (loggedIn) {
    return props.page;
  } else {
    return <Login />;
  }
};
