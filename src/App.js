import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route exact path="/red" element={<RedPage />} />
        <Route exact path="/blue" element={<BluePage />} />
        <Route exact path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
