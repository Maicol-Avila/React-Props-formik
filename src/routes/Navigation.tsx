import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { Users, About } from "../01-lazyload/page/";
import { ShoppingPage } from "../02-components-patters/pages/ShoppingPage";
export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Shopping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/lazy2"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/lazy3"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ShoppingPage />} />
            <Route path="lazy2" element={<Users />} />
            <Route path="lazy3" element={<About />} />
            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
