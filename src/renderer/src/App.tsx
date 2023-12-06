// import { Header } from './components/Header';
import { Home } from './components/importants/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Solo } from './components/importants/Solo';
import { NoMatch } from './components/NoMatch';
import { DisplayPage } from './components/DisplayPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DisplayPage page={<Home />} />} />
        <Route path='/solo' element={<DisplayPage page={<Solo />} />} />
        <Route path='*' element={<DisplayPage page={<NoMatch />} />} />
      </Routes>
    </Router>
  );
};
