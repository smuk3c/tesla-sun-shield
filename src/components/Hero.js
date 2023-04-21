import * as React from 'react'
import classnames from 'classnames'
import Logo from '../svgs/Logo'
import { GatsbyImage } from 'gatsby-plugin-image'
import ArrowDown from '../svgs/ArrowDown'
import CheckoutButton from './CheckoutButton'
import SecondaryButton from './SecondaryButton'



export const Hero = ({ image, title, priceId, withScroll, learnMore, withoutMore, withoutHeadline, children }) => (
  <div className="block h-screen w-screen snap-center relative" >
    <GatsbyImage
      className="h-screen w-screen"
      objectPosition="center top"
      placeholder="blurred"
      width="fullWidth"
      { ...image }
    />
    <div className="pb-2 absolute top-[20%] left-0 right-0 bottom-[10%] md:bottom-0 flex justify-between items-center flex-col">
      <div className="flex flex-col justify-start items-center px-4 z-10 select-none w-full grow">
        {!withoutHeadline && (
          <span className="font-thin text-sm md:text-xl text-slate-50/80 text-center max-w-[600px]">
            Handmade with love in Europe for
            unparalleled comfort and protection in your driving experience
          </span>
        )}
        <Logo className="fill-slate-50 w-4/5 h-auto max-w-[600px]">
          <text
            className="text-4xl"
            x="400"
            y="170"
          >
            {title}
          </text>
        </Logo>
        {children && (
          <span className="font-thin text-sm md:text-xl text-slate-50/80 text-center max-w-[600px] mt-[100px]">
            {children}
          </span>
        )}
      </div>
      <div className={classnames('w-full px-10 flex justify-center items-center flex-col gap-4 md:gap-8', {
        'mb-[40px]': !withScroll
      })}>
        <div className="w-full flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
          <CheckoutButton
            role="link"
            className="block w-full md:w-auto"
            priceId={priceId}
          >
            Order Now
          </CheckoutButton>
          {!withoutMore && (
            <SecondaryButton
              className="block w-full md:w-auto"
              to={learnMore}
            >
              Learn More
            </SecondaryButton>
          )}
        </div>
        {withScroll && (
          <ArrowDown
            className="stroke-slate-50/50 h-12 w-12 animate-bounce"
          />
        )}
      </div>
    </div>
  </div>
)

export default React.memo(Hero)
