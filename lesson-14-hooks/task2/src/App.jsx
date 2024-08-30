import User from "./User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Routes>

            <Route path="/users/:USER_ID" element={<User />} />

            <Route path="/" element={<span>Select a user please</span>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
