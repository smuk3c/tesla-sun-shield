import * as React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

export const SecondaryButton = ({ elType = Link, className, ...props }) => React.createElement(
  elType,
  {
    className: classNames(`
      text-center text-slate-950 bg-gray-50/80 rounded px-8 md:px-16 py-4 md:py-2 cursor-pointer
    `, className),
    ...props
  }
)

export default React.memo(SecondaryButton)
