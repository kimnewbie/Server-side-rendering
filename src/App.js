import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route exact path="/red" element={<RedPage />} />
        <Route exact path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
