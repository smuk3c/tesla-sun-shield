const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  res.status(404).json({})
}
