import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RocketsPage from './pages/RocketsPage';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfilePage from './pages/MyProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<RocketsPage />}
          />
          <Route
            path="/Dragons"
            element={<Dragons />}
          />
          <Route
            path="/Missions"
            element={<Missions />}
          />
          <Route
            path="/Profile"
            element={<MyProfilePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
