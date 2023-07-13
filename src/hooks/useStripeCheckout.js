import * as React from 'react'
import { loadStripe } from '@stripe/stripe-js';

const useStripeCheckout = (price) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const handleClick = async () => {
    if (isLoading) {
      return
    }
    
    setIsLoading(true)
    try {
    const stripe = await loadStripe(process.env.GATSBY_STRIPE_API_KEY)
    const rsp = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price
      })
    })
    const session = await rsp.json()
    
    await stripe.redirectToCheckout({
      sessionId: session.id
    })
    setIsLoading(false)
    } catch(e) {
      console.log(e)
      setIsLoading(false)
    }
  }
  
  return [isLoading, handleClick]
}

export default useStripeCheckout
