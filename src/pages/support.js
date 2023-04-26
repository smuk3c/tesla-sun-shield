import * as React from "react"

import Seo from "../components/seo"

const faqs = [
  {
    question: 'How do I install my Sunshield?',
    answer:
      'Our Sunshield is designed for easy installation. Simply follow the step-by-step instructions provided with your purchase. If you\'re having trouble or need further assistance, don\'t hesitate to contact our support team.',
  },
  {
    question: 'Is the Sunshield compatible with all Tesla models?',
    answer:
      'Currently, our Sunshield is designed specifically for Tesla Model 3 and Model Y vehicles. We are continuously working on expanding our product range to accommodate other Tesla models in the future.',
  },
  {
    question: 'Where is the Sunshield manufactured?',
    answer:
      'Our Sunshield is proudly handmade in Europe using high-quality materials to ensure durability and effectiveness in protecting your car from the sun\'s harsh rays.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We want you to be completely satisfied with your Sunshield. If for any reason you\'re not, please contact our support team within 30 days of your purchase, and we\'ll work with you to find a solution.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Shipping times may vary depending on your location. Once your order has been processed, you will receive an email with tracking information to help you monitor the progress of your shipment.',
  },
]

const SupportPage = () => (
  <div className="bg-white">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            At Sunshield, we're committed to providing you with the best possible support for your Tesla Model 3 and Model Y Sun Shield blinds.
            Our team of dedicated professionals is always here to help you with any questions or concerns you may have.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600">
            To get in touch with our support team, simply email us at{' '}
            <a href={`mailto:support@${process.env.GATSBY_EMAIL_DOMAIN}`} className="font-semibold text-indigo-600 hover:text-indigo-500">
              support@teslasunshield.com
            </a>{' '}
            , and we'll respond as soon as possible..
          </p>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo
  title="Support"
  description="Description for support page"
/>

export default SupportPage
