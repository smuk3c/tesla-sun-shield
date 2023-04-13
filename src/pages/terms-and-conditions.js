import * as React from "react"

import Seo from "../components/seo"

const TermsAndConditionsPage = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[100px]">
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl">Terms and Conditions</h1>
      
      <strong>Last Updated: April 12, 2023</strong>
      
      <p className="mt-8">Please read these Terms and Conditions ("Terms") carefully before using the {process.env.GATSBY_PAGE_URL} website ("Website") or any services provided by SLABE d.o.o. ("us", "we", or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you must not access or use the Website.</p>
      
      <h2 className="text-xl mt-8">Use of the Website</h2>
      <p className="mt-8">You must be at least 18 years of age to use our Website. By using our Website, you represent and warrant that you are of legal age and have the right, authority, and capacity to enter into these Terms.</p>
      
      <h2 className="text-xl mt-8">Intellectual Property</h2>
      <p className="mt-8">All content on this Website, including but not limited to text, images, logos, designs, and software, is the property of SLABE d.o.o. or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.</p>
      
      <h2 className="text-xl mt-8">Purchases and Payments</h2>
      <p className="mt-8">When you make a purchase on our Website, you agree to provide accurate and current payment information. We reserve the right to refuse or cancel any order if we suspect fraud or unauthorized activity.</p>
      
      <h2 className="text-xl mt-8">Shipping and Returns</h2>
      <p className="mt-8">Shipping times may vary depending on your location. We will provide tracking information for your order once it has been shipped. If you are not satisfied with your purchase, please contact our support team at support@teslasunshield.com within 30 days of receiving your order to discuss your options for a return or refund.</p>
      
      <h2 className="text-xl mt-8">Limitation of Liability</h2>
      <p className="mt-8">In no event shall SLABE d.o.o., its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your access to or use of our Website, products, or services, even if we have been advised of the possibility of such damages. Your sole remedy for dissatisfaction with our Website, products, or services is to stop using them.</p>
      
      <h2 className="text-xl mt-8">Indemnification</h2>
      <p className="mt-8">You agree to defend, indemnify, and hold harmless SLABE d.o.o., its directors, employees, and affiliates from and against any and all claims, damages, costs, and expenses, including reasonable attorneys' fees, arising from or related to your use of the Website, products, or services, or your violation of these Terms.</p>
      
      <h2 className="text-xl mt-8">Governing Law and Jurisdiction</h2>
      <p className="mt-8">These Terms shall be governed by and construed in accordance with the laws of Slovenia, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Slovenia.</p>
      
      <h2 className="text-xl mt-8">Changes to the Terms and Conditions</h2>
      <p className="mt-8">We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date at the top of this page. Your continued use of the Website after any changes to the Terms constitutes your acceptance of the new Terms.</p>
      
      <h2 className="text-xl mt-8">Contact Us</h2>
      <p className="mt-8">If you have any questions or concerns about these Terms, please contact us at:</p>
      
      <p className="mt-8">SLABE d.o.o.<br/>
        Ladja 6B, 1215 Medvode, Slovenia<br/>
        Email: info@teslasunshield.com</p>
      
      <p className="mt-8">By using our Website and services, you agree to these Terms and Conditions. If you do not agree with any part of these Terms, please discontinue your use of our Website and services.</p>
    </div>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default TermsAndConditionsPage
