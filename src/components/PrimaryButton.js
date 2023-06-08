import * as React from 'react'
import classNames from 'classnames'

export const PrimaryButton = ({ elType = 'button', className, ...props }) => React.createElement(
  elType,
  {
    className: classNames(`
      text-center text-lg text-slate-50 bg-red-500 hover:bg-red-700 rounded px-8 md:px-16 py-4 md:py-2 cursor-pointer flex justify-center items-center gap-2
    `, className),
    ...props
  }
)

export default React.memo(PrimaryButton)
