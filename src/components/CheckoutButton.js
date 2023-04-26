import * as React from 'react'
import classnames from 'classnames'
import useStripeCheckout from '../hooks/useStripeCheckout'
import PrimaryButton from './PrimaryButton'

export const CheckoutButton = ({ priceId, className, children, ...props }) => {
  const [isLoading, onClick] = useStripeCheckout(priceId)
  
  return (
    <PrimaryButton
      className={classnames(className, {
        'opacity-40 cursor-not-allowed': isLoading,
      })}
      onClick={onClick}
      {...props}
    >
      { children }
    </PrimaryButton>
  )
}

export default React.memo(CheckoutButton)

