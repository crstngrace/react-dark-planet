import { NavLink } from 'react-router-dom';
import './index.scss';

const SideNav = () => {
  return (
    <nav className="d-flex flex-column align-items-end justify-content-center h-100 ">
      <NavLink to="/" state={{ navigate: true }}>
        Home
      </NavLink>
      <NavLink to="/work" state={{ navigate: true }}>
        Work
      </NavLink>
    </nav>
  );
};

export default SideNav;
