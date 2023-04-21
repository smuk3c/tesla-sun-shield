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
        alt: "Tesla sun shield for model 3",
      }}
      title="Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
      withScroll
      withoutMore
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
    </Hero>
    <HeroSide
      image={{
        image: getImage(data.product_1),
        alt: "Tesla sun shield for model 3",
      }}
      title="Super awesome title for Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.product_2),
        alt: "Tesla sun shield for model 3",
      }}
      title="Super awesome title for Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
      reverse
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
      </ul>
    </HeroSide>
    <HeroSide
      image={{
        image: getImage(data.hero_2),
        alt: "Tesla sun shield for model 3",
      }}
      title="Super awesome title for Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
      <ul className="list-disc mt-8 mx-auto [&>li:not(:last-of-type)]:mb-4">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor
        </li>
      </ul>
    </HeroSide>
    <Hero
      image={{
        image: getImage(data.hero_3),
        alt: "Tesla sun shield for model 3",
      }}
      title="Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
      withoutMore
      withoutHeadline
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
    </Hero>
    <HeroSide
      image={{
        image: getImage(data.hero_4),
        alt: "Tesla sun shield for model 3",
      }}
      title="Super awesome title for Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
    >
      <p className="font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </HeroSide>
    <Hero
      image={{
        image: getImage(data.hero_5),
        alt: "Tesla sun shield for model 3",
      }}
      title="Model 3"
      priceId={process.env.GATSB3_STRIPE_MODEL_3_ID}
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
export const Head = () => <Seo title="Home" />

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
     hero_3: file(
       relativePath: { eq: "model_3/model_3_3.jpg" }
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
     hero_5: file(
       relativePath: { eq: "model_3/model_3_5.jpg" }
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
