import * as React from 'react'
import classNames from 'classnames'

export const Nav = ({ className, ...props }) => (
  <nav className={classNames('flex justify-evenly items-center', className)} {...props} />
)

export default React.memo(Nav)
