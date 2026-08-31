import CheckoutLayout from '@/layouts/CheckoutLayout';
import CheckoutFlow from '@/features/checkout/components/CheckoutFlow';

export default function Checkout(props: { disableCustomTheme?: boolean }) {
  return (
    <CheckoutLayout disableCustomTheme={props.disableCustomTheme}>
      <CheckoutFlow />
    </CheckoutLayout>
  );
}
