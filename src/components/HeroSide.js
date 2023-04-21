import * as React from 'react'
import classnames from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import CheckoutButton from './CheckoutButton'



export const HeroSide = ({ image, title, children, priceId, reverse }) => (
  <>
    <div className="h-screen w-screen snap-center flex flex-col md:flex-row">
      <div className={
        classnames("h-screen w-full md:w-2/4 lg:w-2/5 flex justify-between items-center flex-row flex-wrap", {
          "order-last": reverse
        })
      }>
        <div className="flex flex-col justify-start items-center px-4 z-10 w-full">
          <h2 className="text-gray-950 text-xl md:text-4xl w-4/5 mb-4">
            {title}
          </h2>
          <div className="font-thin text-sm md:text-xl text-gray-950/80 my-3 w-4/5 mx-auto">
            {children}
          </div>
          <CheckoutButton
            role="link"
            className="block md:w-auto mt-4 md:mt-16"
            priceId={priceId}
          >
              Order Now
          </CheckoutButton>
        </div>
      </div>
      <GatsbyImage
        className="h-screen w-full md:w-2/4 lg:w-3/5 hidden md:block"
        objectPosition="center top"
        placeholder="blurred"
        width="fullWidth"
        { ...image }
      />
    </div>
    <div className="h-screen w-screen snap-center md:hidden">
      <GatsbyImage
        className="h-screen w-full"
        objectPosition="center top"
        placeholder="blurred"
        width="fullWidth"
        { ...image }
      />
    </div>
  </>
)

export default React.memo(HeroSide)
