export const CHECKOUT_MOCK_DATA = {
  products: [
    {
      name: 'Professional plan',
      desc: 'Monthly subscription',
      price: '$15.00',
    },
    {
      name: 'Dedicated support',
      desc: 'Included in the Professional plan',
      price: 'Free',
    },
    {
      name: 'Hardware',
      desc: 'Devices needed for development',
      price: '$69.99',
    },
    {
      name: 'Landing page template',
      desc: 'License',
      price: '$49.99',
    },
  ]
};

export type CheckoutMockData = typeof CHECKOUT_MOCK_DATA;
