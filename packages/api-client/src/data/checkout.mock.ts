import type { Product } from "../types/ecommerce";


export const CHECKOUT_MOCK_DATA = {
  products: [
    { name: 'Pro Membership', desc: 'Monthly subscription', price: '$29.00' },
    { name: 'Elite Membership', desc: 'Monthly subscription with mentorship', price: '$99.00' },
    { name: 'Basic Membership', desc: 'Free access to previews', price: 'Free' },
  ] as Product[],
  ui: {
    steps: ['Member Details', 'Payment Details', 'Review Membership'],
    buttons: {
      next: 'Next',
      back: 'Back',
      previous: 'Previous',
      placeOrder: 'Start Membership'
    },
    labels: {
      total: 'Total',
      checkout: 'Membership Enrollment',
      selectedProducts: 'Selected Plan'
    },
    addressForm: {
      title: 'Member Details',
      firstName: 'First name',
      lastName: 'Last name',
      address1: 'Address line 1',
      address2: 'Address line 2',
      city: 'City',
      state: 'State/Province/Region',
      zip: 'Zip / Postal code',
      country: 'Country',
      saveAddress: 'Use this address for payment details'
    },
    paymentForm: {
      title: 'Payment method',
      subtitle: 'All transactions are secure and encrypted.',
      cardNumber: 'Card number',
      cvv: 'CVV',
      expiration: 'Expiration date',
      nameOnCard: 'Name on card',
      saveCard: 'Remember credit card details for next time',
      methods: [{ label: 'Credit card', value: 'credit' }, { label: 'Bank transfer', value: 'bank' }],
      expirationDate: 'Expiration date'
    },
    review: {
      title: 'Review your membership',
      shippingDetails: 'Member Details',
      paymentDetails: 'Payment details'
    },
    orderSuccess: {
      title: 'Welcome to the club!',
      subtitle: 'Your membership is now active.',
      message: 'Thank you',
      buttonText: 'Go to my dashboard',
      description: 'We have emailed your confirmation and a link to access your premium content.'
    }
  }
};

export type CheckoutMockData = typeof CHECKOUT_MOCK_DATA;
