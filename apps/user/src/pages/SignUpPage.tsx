import SignUpCard from '@/features/auth/components/SignUpCard';
import Content from '@/features/auth/components/Content';
import AuthLayout from '@/layouts/AuthLayout';

export default function SignUpSide(props: { disableCustomTheme?: boolean }) {
  return (
    <AuthLayout disableCustomTheme={props.disableCustomTheme}>
      <Content />
      <SignUpCard />
    </AuthLayout>
  );
}
