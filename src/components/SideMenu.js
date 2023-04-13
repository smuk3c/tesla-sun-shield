import * as React from 'react'
import { Link } from 'gatsby'
import Close from '../svgs/Close'
import { ROUTES } from '../consts'


const LinkStyled = props => (
  <Link
    className="p-2 mx-8 hover:bg-gray-500/10 rounded"
    {...props}
  />
)

export const SideMenu = ({ close }) => (
  <>
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50"
      onClick={close}
    />
    <div
        className="bg-white w-screen md:w-80 h-screen drop-shadow-md fixed inset-y-0 right-0 z-20"
    >
      <Close
        className="w-6 h-6 fill-slate-950 cursor-pointer absolute right-7 top-10"
        onClick={close}
      />
      <nav className="flex flex-col gap-4 mt-20">
        <LinkStyled to={ROUTES.MODEL_Y}>
          Model Y
        </LinkStyled>
        <LinkStyled to={ROUTES.MODEL_3}>
          Model 3
        </LinkStyled>
        <LinkStyled to={ROUTES.ABOUT_US}>
          About us
        </LinkStyled>
        <LinkStyled to={ROUTES.SUPPORT}>
          Support
        </LinkStyled>
        <LinkStyled to={ROUTES.TERMS_OF_SALE}>
          Terms of sale
        </LinkStyled>
        <LinkStyled to={ROUTES.TERMS_AND_CONDITIONS}>
          Terms and conditions
        </LinkStyled>
        <LinkStyled to={ROUTES.PRIVACY}>
          Privacy policy
        </LinkStyled>
      </nav>
    </div>
  </>
)

export default React.memo(SideMenu)
