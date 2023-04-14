import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Hero from '../components/Hero'
import CheckoutButton from '../components/CheckoutButton'
import Seo from "../components/seo"
import { ROUTES } from '../consts'

const IndexPage = ({ data }) => (
  <div className="w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
    <Hero
      image={{
        image: getImage(data.modelY),
        alt: "Tesla sun shield for model Y",
      }}
      title="for Model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      learnMore={ROUTES.MODEL_Y}
      withScroll
    />
    <Hero
      image={{
        image: getImage(data.model3),
        loading: 'eager',
        alt: "Sun Shield for Tesla Model 3",
      }}
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
      learnMore={ROUTES.MODEL_3}
      title="for Model 3"
    />
    <div className="bg-white block h-screen w-screen snap-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-center md:text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready?
          <br />
          Get your shield today.
        </h2>
        <div className="mt-10 flex justify-center items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <strong className="hidden md:block">Buy now</strong>
          <CheckoutButton
            priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
          >
            Model Y
          </CheckoutButton>
          <CheckoutButton
            priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
          >
            Model 3
          </CheckoutButton>
        </div>
      </div>
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
   query {
     model3: file(
       relativePath: { eq: "model_3/model_3_1.jpg" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            layout: FULL_WIDTH
          )
        }
     }
     modelY: file(
       relativePath: { eq: "model_y/model_y_1.jpg" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            layout: FULL_WIDTH
          )
        }
     }
   }
`;

export default IndexPage
