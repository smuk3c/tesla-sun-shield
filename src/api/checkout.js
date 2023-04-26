const stripe = require('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === `POST`) {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: req.body.price,
          quantity: 1,
        },
      ],
      shipping_options: [{ shipping_rate: process.env.GATSBY_STRIPE_SHIPPING_RATE }],
      mode: 'payment',
      success_url: `${process.env.GATSBY_PAGE_URL}/order-confirmation`,
      cancel_url: process.env.GATSBY_PAGE_URL,
      automatic_tax: {
        enabled: true
      },
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: process.env.GATSBY_STRIPE_ALLOWED_COUNTRIES.split(','),
      },
    })
    
    res.status(200).json({id: session.id})
  }
}