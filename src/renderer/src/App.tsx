// import { Header } from './components/Header';
import { Home } from './components/importants/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Solo } from './components/importants/Solo';
import { NoMatch } from './components/NoMatch';
import { DisplayPage } from './components/DisplayPage';
import { AuthContextProvider } from './context/AuthContext';
import { Profile } from './components/importants/Profile';

export const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<DisplayPage page={<Home />} />} />
          <Route path='/solo' element={<DisplayPage page={<Solo />} />} />
          <Route path='/profile' element={<DisplayPage page={<Profile />} />} />
          <Route path='*' element={<DisplayPage page={<NoMatch />} />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};
