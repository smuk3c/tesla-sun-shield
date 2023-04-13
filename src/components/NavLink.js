import * as React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

export const NavLink = ({ elType = Link, className, isDark, ...props}) => React.createElement(
  elType,
  {
    className: classNames(`
      font-medium text-sm  cursor-pointer
      mx-2 px-4 py-2 lg:mx-2 lg:px-5 hover:rounded
      ease-in-out duration-250
    `, className, {
      'text-gray-50/90 hover:text-slate-50/100 hover:bg-slate-50/10': !isDark,
      'text-gray-950/90 hover:text-slate-950/100 hover:bg-slate-950/10': isDark
    }),
    ...props
  }
)

export default React.memo(NavLink)
