// import { Header } from './components/Header';
import { Home } from './components/importants/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Solo } from './components/importants/Solo';
import { NoMatch } from './components/NoMatch';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solo' element={<Solo />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
};
