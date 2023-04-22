import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Hero from '../components/Hero'
import HeroSide from '../components/HeroSide'
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <div className="w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory">
    <Hero
      image={{
        image: getImage(data.hero),
        alt: "Tesla sun shield for model Y",
      }}
      title="Model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      withScroll
      withoutMore
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
    </Hero>
    <HeroSide
      image={{
        image: getImage(data.product_1),
        alt: "Tesla sun shield for model Y",
      }}
      title="Drive in comfort"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        SunShield “hard top” cover is hand made in Europe by car-upholsterers with decades of experience using tried and tested premium materials.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          As Tesla drivers we quickly realized the need for a glass roof cover that would protect you, your passengers and your car's interior from the harmful effects of the sun.
        </li>
        <li>
           While trying out different products already existing on the market none of them had the performance, perfect  fitment or design that would satisfy our expectations.
        </li>
        <li>
          Thus we set out to create a product that will impress even the most demanding users.
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_2),
        alt: "Tesla sun shield for model Y",
      }}
      title="Specifically designed for Tesla model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          By using 3D scanning technology in the development process we accomplished that the product fits and perfectly covers the glass roof of your car.
        </li>
        <li>
          By following the curvature of the glass roof it also minimizes the loss of head space in your vehicle.
        </li>
      </ul>
    </HeroSide>
<HeroSide
      image={{
        image: getImage(data.product_2),
        alt: "Tesla sun shield for model Y",
      }}
      title="Specifically designed for Tesla model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          By using 3D scanning technology in the development process we accomplished that the product fits and perfectly covers the glass roof of your car.
        </li>
        <li>
          By following the curvature of the glass roof it also minimizes the loss of head space in your vehicle.
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.hero_2),
        alt: "Tesla sun shield for model Y",
      }}
      title="Premium materials"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          Constructed from lightweight thermal insulating materials typically used in the nautical industry combined with premium automotive headliner fabrics.
        </li>
        <li>
          Sunshield “hard top” design blocks 100 percent of luminous transmittance.
        </li>
        <li>
          Reducing direct sunlight and heat transfer to your upper body especially your head by a 100 percent.
        </li>
      </ul>
    </HeroSide>
    <Hero
      image={{
        image: getImage(data.hero_3),
        alt: "Tesla sun shield for model Y",
      }}
      title="Model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      withoutMore
      withoutHeadline
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
    </Hero>
    <HeroSide
      image={{
        image: getImage(data.hero_4),
        alt: "Tesla sun shield for model Y",
      }}
      title="Reducing your energy consumption"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        As an added bonus it greatly reduces the interior temperature of your vehicle whilst parked or on the move. Making it consume less energy to cool down and maintain your desired temperature in the car.
      </p>
    </HeroSide>
    <Hero
      image={{
        image: getImage(data.hero_5),
        alt: "Tesla sun shield for model Y",
      }}
      title="Model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      withoutMore
      withoutHeadline
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
    </Hero>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo
  title="Model y"
  description="Description for model y page"
/>

export const pageQuery = graphql`
   query {
     hero: file(
       relativePath: { eq: "model_y/model_y_2.jpg" }
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
     hero_2: file(
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
     hero_3: file(
       relativePath: { eq: "model_y/model_y_3.jpg" }
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
     hero_4: file(
       relativePath: { eq: "model_y/model_y_4.jpg" }
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
     hero_5: file(
       relativePath: { eq: "model_y/model_y_5.jpg" }
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
     product_1: file(
       relativePath: { eq: "model_y/model_y_product_back_side.png" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
     }
     product_2: file(
       relativePath: { eq: "model_y/model_y_product_front_side.png" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
     }
   }
`;

export default IndexPage
