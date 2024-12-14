import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <p>Immortal_4vr</p>
      <nav>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/skills">SKILLS</NavLink></li>
          <li><NavLink to="/project">PROJECT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header