import * as React from 'react'
import classNames from 'classnames'

export const Nav = ({ className, end, ...props }) => (
  <nav className={classNames('flex items-center', {
    'justify-center': !end,
    'justify-end': end,
  },className)} {...props} />
)

export default React.memo(Nav)
