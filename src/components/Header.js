import * as React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { globalHistory } from '@reach/router'
import Logo from '../svgs/Logo'
import Nav from './Nav'
import NavLink from './NavLink'
import SideMenu from './SideMenu'
import Menu from '../svgs/Menu'
import { ROUTES } from '../consts'

export const Header = ({ isDark }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  React.useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        setToggleMenu(false)
        typeof window !== "undefined" && window.scrollTo(0, 0)
      }
    })
  }, [])
  
  return (
    <>
      <header className={classnames('h-16 w-screen flex justify-between items-center flex-row px-3 lg:px-5 fixed top-0 left-0 z-10', {
        'bg-white md:bg-white/50': isDark
      })}>
        <Link to={ROUTES.MAIN}>
          <Logo
            className={classnames('h-10 w-auto',{
              'fill-gray-50': !isDark,
              'fill-gray-950': isDark,
            })}
          />
        </Link>
        <Nav className="hidden lg:block">
          <NavLink to={ROUTES.MODEL_Y} isDark={isDark}>
            Model Y
          </NavLink>
          <NavLink to={ROUTES.MODEL_3} isDark={isDark}>
            Model 3
          </NavLink>
        </Nav>
        <Nav>
          <NavLink
            className="hidden md:block"
            elType="a"
            href={`mailto:hello@${process.env.GATSBY_EMAIL_DOMAIN}`}
            target="_blank"
            isDark={isDark}
          >
            hello@{process.env.GATSBY_EMAIL_DOMAIN}
          </NavLink>
          <NavLink
            elType="button"
            onClick={() => setToggleMenu(true)}
            isDark={isDark}
          >
            <Menu className="w-6 h-6 inline mr-2" />
            Menu
          </NavLink>
        </Nav>
      </header>
      { toggleMenu && (
        <SideMenu
          close={() => setToggleMenu(false)}
        />
      )}
    </>
  )
}

export default React.memo(Header)
