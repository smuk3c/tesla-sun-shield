import * as React from 'react'
import classNames from 'classnames'

export const PrimaryButton = ({ elType = 'button', className, ...props }) => React.createElement(
  elType,
  {
    className: classNames(`
      text-center text-lg text-slate-50/80 bg-neutral-950/80 rounded px-8 md:px-16 py-4 md:py-2 cursor-pointer
    `, className),
    ...props
  }
)

export default React.memo(PrimaryButton)
