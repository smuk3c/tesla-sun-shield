import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ROUTES } from '../consts'

const isLight = path => path === ROUTES.MAIN
    || path === `${ROUTES.MAIN}*`
    || path === ROUTES.MODEL_Y
    || path === `${ROUTES.MODEL_Y}/`
    || path === ROUTES.MODEL_3
    || path === `${ROUTES.MODEL_3}/`
    || path === ROUTES.NOT_FOUND
    || path === `${ROUTES.NOT_FOUND}/`

export const Layout = ({ children, path }) => (
  <>
    <Header isDark={!isLight(path)}/>
    {children}
  </>
)

export default React.memo(Layout)
