import { NavLink } from 'react-router-dom'
import './styles/Header.css'

export const Header = () => {
  return (
    <header className='s-header layout'>
      <div className='row s-header__nav-wrap'>
        <nav className='s-header__nav'>
          <ul>
            <li>
              <NavLink to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects'>
                Proyects
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}