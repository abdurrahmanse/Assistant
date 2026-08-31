import { useQuery } from '@tanstack/react-query';
import { landingService } from '../../services/landing.service';

// ─── Query Keys ────────────────────────────────────────────────────────────────
export const landingKeys = {
  all:         ['landing'] as const,
  landing:     () => [...landingKeys.all] as const,
  siteMeta:    () => [...landingKeys.all, 'site-meta'] as const,
  nav:         () => [...landingKeys.all, 'nav'] as const,
  footer:      () => [...landingKeys.all, 'footer'] as const,
  hero:        () => [...landingKeys.all, 'hero'] as const,
  courses:     () => [...landingKeys.all, 'courses'] as const,
  courseById:  (id: string) => [...landingKeys.all, 'courses', id] as const,
  about:       () => [...landingKeys.all, 'about'] as const,
  contact:     () => [...landingKeys.all, 'contact'] as const,
  highlights:  () => [...landingKeys.all, 'highlights'] as const,
  testimonials:() => [...landingKeys.all, 'testimonials'] as const,
  faq:         () => [...landingKeys.all, 'faq'] as const,
  courseDetail:() => [...landingKeys.all, 'course-detail-copy'] as const,
};

// ─── Full landing data (used by homepage) ─────────────────────────────────────
export const useLandingQuery = () =>
  useQuery({
    queryKey: landingKeys.landing(),
    queryFn: () => landingService.getLandingData(),
    staleTime: 1000 * 60 * 5,
  });

// ─── Site meta ────────────────────────────────────────────────────────────────
export const useSiteMetaQuery = () =>
  useQuery({
    queryKey: landingKeys.siteMeta(),
    queryFn: () => landingService.getSiteMeta(),
    staleTime: 1000 * 60 * 10,
  });

// ─── Navigation ───────────────────────────────────────────────────────────────
export const useNavQuery = () =>
  useQuery({
    queryKey: landingKeys.nav(),
    queryFn: () => landingService.getNav(),
    staleTime: 1000 * 60 * 10,
  });

// ─── Footer ───────────────────────────────────────────────────────────────────
export const useFooterQuery = () =>
  useQuery({
    queryKey: landingKeys.footer(),
    queryFn: () => landingService.getFooter(),
    staleTime: 1000 * 60 * 10,
  });

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const useHeroQuery = () =>
  useQuery({
    queryKey: landingKeys.hero(),
    queryFn: () => landingService.getHero(),
    staleTime: 1000 * 60 * 5,
  });

// ─── Courses (all or filtered) ────────────────────────────────────────────────
export const useCoursesQuery = (filter?: 'Free' | 'Premium') =>
  useQuery({
    queryKey: [...landingKeys.courses(), filter ?? 'all'],
    queryFn: () => landingService.getCourses(filter),
    staleTime: 1000 * 60 * 5,
  });

// ─── Single course by ID ──────────────────────────────────────────────────────
export const useCourseByIdQuery = (id: string) =>
  useQuery({
    queryKey: landingKeys.courseById(id),
    queryFn: () => landingService.getCourseById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

// ─── About page ───────────────────────────────────────────────────────────────
export const useAboutQuery = () =>
  useQuery({
    queryKey: landingKeys.about(),
    queryFn: () => landingService.getAbout(),
    staleTime: 1000 * 60 * 10,
  });

// ─── Contact page ─────────────────────────────────────────────────────────────
export const useContactQuery = () =>
  useQuery({
    queryKey: landingKeys.contact(),
    queryFn: () => landingService.getContact(),
    staleTime: 1000 * 60 * 10,
  });

// ─── Highlights section ───────────────────────────────────────────────────────
export const useHighlightsQuery = () =>
  useQuery({
    queryKey: landingKeys.highlights(),
    queryFn: () => landingService.getHighlights(),
    staleTime: 1000 * 60 * 5,
  });

// ─── Testimonials section ─────────────────────────────────────────────────────
export const useTestimonialsQuery = () =>
  useQuery({
    queryKey: landingKeys.testimonials(),
    queryFn: () => landingService.getTestimonials(),
    staleTime: 1000 * 60 * 5,
  });

// ─── FAQ section ──────────────────────────────────────────────────────────────
export const useFaqQuery = () =>
  useQuery({
    queryKey: landingKeys.faq(),
    queryFn: () => landingService.getFaq(),
    staleTime: 1000 * 60 * 5,
  });

// ─── Course detail copy strings ───────────────────────────────────────────────
export const useCourseDetailQuery = () =>
  useQuery({
    queryKey: landingKeys.courseDetail(),
    queryFn: () => landingService.getCourseDetail(),
    staleTime: 1000 * 60 * 10,
  });
