import type { Product } from "../types/ecommerce";


export const CHECKOUT_MOCK_DATA = {
  products: [
    { name: 'Advanced React Patterns', desc: 'Master UI architecture', price: '$49.99' },
    { name: 'Data Science with Python', desc: 'From zero to hero', price: '$89.99' },
    { name: 'Digital Marketing 101', desc: 'SEO and paid ads', price: '$29.99' },
    { name: 'Platform Access Fee', desc: 'Monthly subscription', price: 'Free' },
  ] as Product[],
  ui: {
    steps: ['Student Details', 'Payment details', 'Review your order'],
    buttons: {
      next: 'Next',
      back: 'Back',
      previous: 'Previous',
      placeOrder: 'Place order'
    },
    labels: {
      total: 'Total',
      checkout: 'Enrollment Checkout',
      selectedProducts: 'Selected courses'
    },
    addressForm: {
      title: 'Student Details',
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
      title: 'Review your order',
      shippingDetails: 'Student Details',
      paymentDetails: 'Payment details'
    },
    orderSuccess: {
      title: 'Enrollment successful!',
      subtitle: 'Your order number is #140396.',
      message: 'Thank you',
      buttonText: 'Go to my courses',
      description: 'We have emailed your order confirmation and a link to access your courses.'
    }
  }
};

export type CheckoutMockData = typeof CHECKOUT_MOCK_DATA;
