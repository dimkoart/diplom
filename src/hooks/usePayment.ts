import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FormEvent } from 'react'

function usePayment() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const amountToCharge = 1000
    const cardElement = elements?.getElement(CardElement)
    if (!stripe || !elements || !cardElement) {
      return
    }
    const stripeResponse = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })
    const { error, paymentMethod } = stripeResponse
    if (error || !paymentMethod) {
      return
    }
    if (amountToCharge == 1000) {
      alert('оплата прошла успешно')
    } else {
      alert('оплата не прошла')
    }
  }
  return {
    handleSubmit,
  }
}

export default usePayment
