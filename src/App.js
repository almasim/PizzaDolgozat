import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Termekeklist } from "./termeklist";
import UjTermek from "./UjTermek";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")} end>
                <span className="nav-link">Termékek</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/uj-termek'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új Termék</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">
                <span className="nav-link">Almási Milán</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Termekeklist />} />
        <Route path="/uj-termek" exact element={<UjTermek />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
