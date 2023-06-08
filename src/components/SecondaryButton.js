import * as React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

export const SecondaryButton = ({ elType = Link, className, ...props }) => React.createElement(
  elType,
  {
    className: classNames(`
      text-center text-slate-50 bg-stone-500 hover:bg-stone-700 rounded px-8 md:px-16 py-4 md:py-2 cursor-pointer flex justify-center items-center gap-2
    `, className),
    ...props
  }
)

export default React.memo(SecondaryButton)
