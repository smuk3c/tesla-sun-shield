import * as React from 'react'
import { loadStripe } from '@stripe/stripe-js';

const useStripeCheckout = (priceId, cancelUrl = process.env.GATSBY_PAGE_URL) => {
  const [isLoading, setIsLoading] = React.useState(false)
   const handleClick = async () => {
    if (isLoading) {
      return
    }
    
    setIsLoading(true)
    const stripe = await loadStripe(process.env.GATSBY_STRIPE_API_KEY)
    await stripe.redirectToCheckout({
      lineItems: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      billingAddressCollection: 'required',
       shippingAddressCollection: {
        allowedCountries: process.env.GATSBY_STRIPE_ALLOWED_COUNTRIES.split(','),
      },
      successUrl: `${process.env.GATSBY_PAGE_URL}/order-confirmation`,
      cancelUrl,
    })
    setIsLoading(false)
  }
  
  return [isLoading, handleClick]
}

export default useStripeCheckout
