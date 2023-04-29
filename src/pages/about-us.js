import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const people = [
  {
    name: 'Jani',
    role: 'Co-founder and Customer Support Specialist',
    description: 'Jani brings years of experience in optimizing delivery processes and providing exceptional customer support. He ensures that every SunShield customer is satisfied and well taken care of throughout their purchasing journey.',
  },
  {
    name: 'Jakob',
    role: 'Co-founder and Product Designer',
    description: 'With a keen eye for design and a deep understanding of Tesla vehicles, Jakob is the creative force behind the SunShield. His expertise in product design ensures that our sunShield not only look great but also provide effective sun protection.',
  },
  {
    name: 'Matej',
    role: 'Co-founder, Tesla Owner, and Investor',
    description: 'As a passionate Tesla owner and investor, Matej understands the unique needs of fellow Tesla enthusiasts. His firsthand experience and drive to create the perfect sun protection solution have been instrumental in shaping the SunShield brand.',
  },
]

const AboutUsPage = ({ data }) => (
  <React.Fragment>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-gray-300">About us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to SunShield!</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We're a passionate team dedicated to providing the highest quality sun protection solutions for Tesla Model 3 and Model Y owners. Our mission is to enhance your driving experience by protecting you and your car from the sun's harmful rays, while maintaining the sleek and innovative design that Tesla vehicles are known for.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <GatsbyImage
            className="w-[48rem] max-w-none rounded-xl bg-neutral-50 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            placeholder="blurred"
            width="fullWidth"
            image={getImage(data.hero)}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-8">
                Handcrafted in Europe, our SunShield is designed to seamlessly integrate with your Tesla Model 3 or Model Y, offering superior sun protection without sacrificing style or functionality. We pride ourselves on using high-quality materials to create a durable and effective product that meets the needs of discerning Tesla owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="text-sm leading-7 text-gray-900">{person.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We'd love to hear from you! If you have any questions, comments, or concerns, please feel free to reach out to us at
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-gray-800" href={`mailto:hello@${process.env.GATSBY_EMAIL_DOMAIN}`}>
                        hello@{process.env.GATSBY_EMAIL_DOMAIN}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-gray-800" href={`mailto:info@${process.env.GATSBY_EMAIL_DOMAIN}`}>
                        info@{process.env.GATSBY_EMAIL_DOMAIN}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Need support?</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-gray-800" href={`mailto:support@${process.env.GATSBY_EMAIL_DOMAIN}`}>
                        support@{process.env.GATSBY_EMAIL_DOMAIN}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Thank you for choosing Sunshield – Protecting You and Your Car from the Sun's Rays.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">SLABE d.o.o.</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Ladja 6B,</p>
                  <p>1215 Medvode, Slovenia</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export const pageQuery = graphql`
   query {
     hero: file(
       relativePath: { eq: "model_y/model_y_product_front_side.png" }
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
  title="About us"
  description="Description for about us page"
/>

export default AboutUsPage
