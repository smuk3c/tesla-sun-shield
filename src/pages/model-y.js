import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import HeroSide from '../components/HeroSide'
import SecondaryButton from '../components/SecondaryButton'
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <div className="md:w-screen md:h-screen md:overflow-y-auto md:overflow-x-hidden md:scroll-smooth md:snap-y md:snap-mandatory">
    <HeroSide
      image={{
        image: getImage(data.hero),
        alt: "Sunshield for model Y",
      }}
      title="Sunshield for model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        Hand crafted in Europe with premium lightweight materials.
      </p>
      <p className="mt-2">
        Specificaly designed for Tesla model Y. Top of the line protective & insulation properties.
        Perfect fitment. Set and forget installment. Easy to install and remove.
      </p>
      <SecondaryButton
        href="https://www.youtube.com/watch?v=LrGWmWnNYCM&ab_channel=Sunshield"
        target="_blank"
        className="max-w-[400px] my-4"
      >
        Checkout video
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </SecondaryButton>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_1),
        alt: "Sunshield for model Y",
      }}
      title="Drive in comfort"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
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
        image: getImage(data.hero_4),
        alt: "Sunshield for model Y",
      }}
      title="Specifically designed for Tesla model Y"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        By using 3D scanning technology in the development process we accomplished that the product fits and perfectly covers the glass roof of your car.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          By following the curvature of the glass roof it also minimizes the loss of head space in your vehicle.
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_3),
        alt: "Sunshield for model Y",
      }}
      title="Premium materials"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
    >
      <p className="font-bold">
        Constructed from lightweight thermal insulating materials typically used in the nautical industry combined with premium automotive headliner fabrics.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          Sunshield “hard top” design blocks 100 percent of luminous transmittance.
        </li>
        <li>
          Reducing direct sunlight and heat transfer to your upper body especially your head by a 100 percent.
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.hero_3),
        alt: "Sunshield for model Y",
      }}
      title="Reducing your energy consumption"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
    >
      <p className="font-bold">
        As an added bonus it greatly reduces the interior temperature of your vehicle whilst parked or on the move. Making it consume less energy to cool down and maintain your desired temperature in the car.
      </p>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_2),
        alt: "Sunshield for model Y",
      }}
      title="Installation"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
    >
      <p className="font-bold text-sm">
        SunShield is simple and easy to install and remove with no need for any permanent changes or addons to your vehicle. The installation is carried out in three simple steps.
      </p>
      <SecondaryButton
        href="https://www.youtube.com/watch?v=9QwGIzABJzw&ab_channel=Sunshield"
        target="_blank"
        className="my-4"
      >
        Installation video guide
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </SecondaryButton>
      <ul className="text-sm list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          insert the velcrostrip cards in-between the glassroof and the side trim of your car's interior. Position two of the cards on the left and right hand side plus additional two at the front windshield side.
        </li>
        <li>
          First insert the front SunShield, start by aligning the front corners with the glass roof and firmly push up along the sides to ensure a firm connection with the velcrostrip cards.
        </li>
        <li>
          Insert the back SunShield this time aligning it with the end of the front SunShield and firmly push along the sides.
        </li>
        <li className="font-bold">
          Enjoy the Ride!
        </li>
        <li>
          For Removing the Sunshield simply follow the reverse order of installation. For easier detachment from the Velcrostrip cards each Sunshield cover has a sewn in nylon strap. Pull down on each side to detach it from your glass roof.
        </li>
      </ul>
    </HeroSide>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo
  title="SunShield for Model y"
  description="Hand crafted in Europe with premium lightweight materials. Specificaly designed for Tesla model Y. Top of the line protective & insulation properties. Perfect fitment. Set and forget installment. Easy to install and remove."
/>

export const pageQuery = graphql`
   query {
     hero: file(
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
     product_1: file(
       relativePath: { eq: "model_y/model_y_2.jpg" }
     ) {
       childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 90
          )
        }
     }
     product_3: file(
       relativePath: { eq: "model_y/model_y_1.jpg" }
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
       relativePath: { eq: "model_y/model_y_Installation.jpg" }
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
