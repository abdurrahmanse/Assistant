import CourseCatalog from '@/features/course/components/CourseCatalog';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function CoursesPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <CourseCatalog />
    </MarketingLayout>
  );
}
