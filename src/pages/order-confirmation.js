import * as React from "react"
import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { ROUTES } from '../consts'

const NotFoundPage = ({ data }) => (
  <main className="relative h-screen w-screen">
    <GatsbyImage
      className="h-full w-full object-cover object-top"
      objectPosition="center top"
      placeholder="blurred"
      width="fullWidth"
      image={getImage(data.modelY)}
      alt="Tesla sun shield"
    />
    <div className="absolute top-0 left-0 h-screen w-screen z-10">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white select-none">Wup wup!</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl select-none">Your order is completed!</h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6 select-none">We will send all info over email....</p>
        <div className="mt-10 flex justify-center">
          <Link to={ROUTES.MAIN} className="text-sm font-semibold leading-7 text-white">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  </main>
)

export const pageQuery = graphql`
   query {
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

export const Head = () => <Seo
  title="Success order"
  description="Description for success order page"
/>

export default NotFoundPage
