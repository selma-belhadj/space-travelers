import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
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
            element={<Rockets />}
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
            element={<MyProfile />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
