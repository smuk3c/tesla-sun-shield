import * as React from 'react'
import classnames from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import ArrowDown from '../svgs/ArrowDown'
import CheckoutButton from './CheckoutButton'
import SecondaryButton from './SecondaryButton'



export const Hero = ({ image, title, priceId, withScroll, learnMore }) => (
  <div className="block h-screen w-screen snap-center relative" >
    <GatsbyImage
      className="h-screen w-screen"
      objectPosition="center top"
      loading="eager"
      placeholder="blurred"
      width="fullWidth"
      { ...image }
    />
    <div className="h-screen pt-[200px] pb-2 w-screen absolute top-0 right-0 flex justify-between items-center flex-col bg-gradient-to-b from-20% from-transparent to-black">
      <h1 className="text-2xl md:text-4xl lg:text-5xl z-10 text-slate-50 text-center">
        {title}
        <span className="mt-1 font-thin text-sm md:text-xl text-slate-50/80 block">
          for unparalleled comfort and protection in your driving experience
        </span>
        <span className="mt-8 font-thin text-sm md:text-xl text-slate-50/80 block">
          Handmade with love in Europe
        </span>
      </h1>
      <div className={classnames('w-full px-10 flex justify-center items-center flex-col gap-4 md:gap-8', {
        'mb-[40px]': !withScroll
      })}>
        <nav className="w-full flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
          <CheckoutButton
            role="link"
            className="block w-full md:w-auto"
            priceId={priceId}
          >
            Order Now
          </CheckoutButton>
          <SecondaryButton
            className="block w-full md:w-auto"
            to={learnMore}
          >
            Learn More
          </SecondaryButton>
        </nav>
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
