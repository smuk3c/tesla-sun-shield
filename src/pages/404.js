import * as React from "react"
import { graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => (
  <main className="relative isolate min-h-screen">
    <GatsbyImage
      className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      objectPosition="center top"
      placeholder="blurred"
      width="fullWidth"
      image={getImage(data.modelY)}
      alt="Tesla sun shield"
    />
    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p className="text-base font-semibold leading-8 text-white">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex justify-center">
        <Link to="/" className="text-sm font-semibold leading-7 text-white">
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
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
          )
        }
     }
   }
`;

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
