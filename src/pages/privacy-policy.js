import * as React from "react"

import Seo from "../components/seo"

const PrivacyPolicyPage = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[100px]">
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl">Privacy Policy</h1>
      
      <strong>Last Updated: April 12, 2023</strong>
      
      <p className="mt-8">At Sunshield, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website https://teslasunshield.com/, use our services, or interact with us in any other way. Please read this Privacy Policy carefully, and if you have any questions, feel free to contact us at info@{process.env.GATSBY_EMAIL_DOMAIN}.</p>
      
      <h2 className="text-xl mt-8">Information We Collect</h2>
      <p className="mt-8">We collect two types of information: personal information and non-personal information.</p>
      
      <p className="mt-8">Personal Information: This includes any information that can be used to identify you as an individual, such as your name, email address, phone number, and shipping address. We collect this information when you create an account, place an order, or contact our support team.</p>
      
      <p className="mt-8">Non-Personal Information: This includes information that cannot be used to identify you personally, such as your IP address, browser type, and browsing history. We collect this information to analyze website traffic and improve our services.</p>
      
      <h2 className="text-xl mt-8">How We Use Your Information</h2>
      <p className="mt-8">We use your personal information to:</p>
      
      <h3 className="mt-8">Process and fulfill your orders</h3>
      <p>Provide customer support and respond to your inquiries
        Send you updates and promotional materials (with your consent)
        Improve our website and services</p>
      
      <h3 className="mt-8">We use non-personal information to:</h3>
      
      <p>Analyze website traffic and user behavior
        Enhance user experience and website functionality
        Detect and prevent fraud or other malicious activities
        Information Sharing and Disclosure</p>
      
      <p className="mt-8">We do not sell, rent, or share your personal information with third parties without your consent, except:
        To comply with legal requirements or to protect our rights, property, or safety, as well as those of our users or the public
        To service providers who help us operate our business and website, provided they agree to keep your information confidential and secure</p>
      <h2 className="text-xl mt-8">Data Security</h2>
      <p className="mt-8">We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of data transmission or storage is completely secure, and we cannot guarantee the absolute security of your information.</p>
      
      <h2 className="text-xl mt-8">Third-Party Websites</h2>
      <p className="mt-8">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of any third-party websites you visit.</p>
      
      <h2 className="text-xl mt-8">Changes to This Privacy Policy</h2>
      <p className="mt-8">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date at the top of this page.</p>
      
      <h2 className="text-xl mt-8">Contact Us</h2>
      <p className="mt-8">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
      
      <p className="mt-8">SLABE d.o.o.<br />
        Ladja 6B, 1215 Medvode, Slovenia<br />
        Email: info@teslasunshield.com</p>
      
      <p className="mt-8">By using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with any part of this policy, please discontinue your use of our website and services.</p>
    </div>
  </div>
)

export const Head = () => <Seo
  title="Privacy policy"
  description="Description for privacy policy page"
/>

export default PrivacyPolicyPage
