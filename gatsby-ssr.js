const React = require('react')
const Layout = require('./src/components/Layout').default

const LANGUAGE_CODES = {
  en_USA: 'en',
}

const HtmlAttributes = {
  lang: LANGUAGE_CODES[process.env.GATSBY_LANG]
}

const HeadComponents = (
  <React.Fragment key="fonts-loader">
    <link
      rel="preload"
      href="/fonts/GothamSSmLight.woff2"
      as="font"
      crossOrigin="anonymous"
      type="font/woff2"
    />
    <link
      rel="preload"
      href="/fonts/GothamSSmBook.woff2"
      as="font"
      crossOrigin="anonymous"
      type="font/woff2"
    />
    <link
      rel="preload"
      href="/fonts/GothamSSmMedium.woff2"
      as="font"
      crossOrigin="anonymous"
      type="font/woff2"
    />
  </React.Fragment>
)

const BodyAttributes = {}

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}

exports.wrapPageElement = ({ element, props }) => (
  <Layout
    path={props?.path}
  >
    {element}
  </Layout>
)
