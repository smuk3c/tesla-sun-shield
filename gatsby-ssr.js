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
      href="/fonts/GothamSSmLight.woff2"
      as="font"
      type="font/woff2"
    />
    <link
      href="/fonts/GothamSSmBook.woff2"
      as="font"
      type="font/woff2"
    />
    <link
      async
      href="/fonts/GothamSSmMedium.woff2"
      as="font"
      type="font/woff2"
    />
    <script
      async
      rel="preconnect"
      src="https://www.googletagmanager.com/gtag/js?id=G-SJDJ29SMFR"
    />
    <script
      dangerouslySetInnerHTML={{__html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SJDJ29SMFR');
      `}}
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
      path={props?.location?.pathname}
    >
      {element}
    </Layout>
  )
