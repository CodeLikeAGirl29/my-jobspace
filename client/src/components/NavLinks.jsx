import links from '../utils/links'
import { NavLink } from 'react-router-dom'

/**
 * Renders the navigation links component.
 *
 * @param {function} toggleSidebar - The function to toggle the sidebar.
 * @return {JSX.Element} The rendered navigation links component.
 */
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
