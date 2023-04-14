import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Hero from '../components/Hero'
import CheckoutButton from '../components/CheckoutButton'
import Seo from "../components/seo"
import { ROUTES } from '../consts'

const IndexPage = ({ data }) => (
  <div className="w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
    <Hero
      image={{
        loading: 'eager',
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
        alt: "Sun Shield for Tesla Model 3",
      }}
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
      learnMore={ROUTES.MODEL_3}
      title="for Model 3"
    />
    <div className="bg-white block w-screen md:snap-center flex flex-col">
      <div className="mx-auto w-4/5 px-6 lg:flex lg:items-center lg:justify-between lg:px-8 grow">
        <div className="flex flex-col justify-center gap-8 h-screen snap-center md:snap-none">
          <GatsbyImage
            className="h-screen w-screen rounded bg-neutral-50 p-10"
            objectPosition="center top"
            placeholder="blurred"
            image={getImage(data.modelYProduct)}
          />
          <div className="flex flex-col justify-center gap-2 items-center">
            <strong>Sun shield for Model Y</strong>
            <CheckoutButton
              priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
            >
              Buy now
            </CheckoutButton>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 h-screen snap-center md:snap-none">
          <GatsbyImage
            className="h-screen w-screen rounded bg-neutral-50 p-10"
            objectPosition="center top"
            placeholder="blurred"
            image={getImage(data.model3Product)}
          />
          <div className="flex flex-col justify-center gap-2 items-center">
            <strong>Sun shield for Model 3</strong>
            <CheckoutButton
              priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
            >
              Buy now
            </CheckoutButton>
          </div>
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
     model3Product: file(
       relativePath: { eq: "model_3/model_3_product_front_side.png" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            width: 600
            layout: FIXED
          )
        }
     }
     modelYProduct: file(
       relativePath: { eq: "model_y/model_y_product_front_side.png" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
            width: 600
            layout: FIXED
          )
      }
     }
   }
`;

export default IndexPage
