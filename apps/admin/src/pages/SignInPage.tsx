import SignInCard from '@/features/auth/components/SignInCard';
import Content from '@/features/auth/components/Content';
import AuthLayout from '@/layouts/AuthLayout';

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  return (
    <AuthLayout disableCustomTheme={props.disableCustomTheme}>
      <Content />
      <SignInCard />
    </AuthLayout>
  );
}
