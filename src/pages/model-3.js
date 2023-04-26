import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import HeroSide from '../components/HeroSide'
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <div className="md:w-screen md:h-screen md:overflow-y-auto md:overflow-x-hidden md:scroll-smooth md:snap-y md:snap-mandatory">
    <HeroSide
      image={{
        image: getImage(data.hero),
        alt: "Sunshield for model 3",
      }}
      title="Sunshield for model 3"
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
    >
      <p className="font-bold">
        Hand crafted in Europe with premium lightweight materials.
      </p>
      <p className="mt-2">
        Specificaly designed for Tesla model 3. Top of the line protective & insulation properties.
        Perfect fitment. Set and forget installment. Easy to install and remove.
      </p>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_1),
        alt: "Sunshield for model 3",
      }}
      title="Drive in comfort"
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
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
        image: getImage(data.product_2),
        alt: "Sunshield for model 3",
      }}
      title="Specifically designed for Tesla model 3"
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
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
        image: getImage(data.hero_2),
        alt: "Sunshield for model 3",
      }}
      title="Premium materials"
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
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
        image: getImage(data.hero_4),
        alt: "Sunshield for model 3",
      }}
      title="Reducing your energy consumption"
      priceId={process.env.GATSBY_STRIPE_MODEL_3_ID}
    >
      <p className="font-bold">
        As an added bonus it greatly reduces the interior temperature of your vehicle whilst parked or on the move. Making it consume less energy to cool down and maintain your desired temperature in the car.
      </p>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_2),
        alt: "Sunshield for model 3",
      }}
      title="Installation"
      priceId={process.env.GATSBY_STRIPE_MODEL_Y_ID}
      reverse
    >
      <p className="font-bold">
        SunShield is simple and easy to install and remove with no need for any permanent changes or addons to your vehicle.
      </p>
      <p className="font-bold">
        The installation is carried out in three simple steps and can be done in under 5 minutes even on the first try.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
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
  title="SunShield for Model 3"
  description="Hand crafted in Europe with premium lightweight materials. Specificaly designed for Tesla model 3. Top of the line protective & insulation properties. Perfect fitment. Set and forget installment. Easy to install and remove."
/>

export const pageQuery = graphql`
   query {
     hero: file(
       relativePath: { eq: "model_3/model_3_2.jpg" }
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
     hero_4: file(
       relativePath: { eq: "model_3/model_3_4.jpg" }
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
       relativePath: { eq: "model_3/model_3_product_back_side.png" }
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
       relativePath: { eq: "model_3/model_3_product_front_side.png" }
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
