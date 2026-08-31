// ─── Course Types ──────────────────────────────────────────────────────────────
export interface CourseModule {
  title: string;
  lessons: number;
  duration: string;
}

export interface CourseItem {
  id: number;
  slug: string;
  title: string;
  type: 'Free' | 'Premium';
  price: string;
  level: string;
  icon: string;
  description: string;
  rating?: number;
  studentsCount?: number;
  duration?: string;
  instructor?: string;
  tags?: string[];
  gradient?: string;
  modules?: CourseModule[];
  thumbnail?: string;
  previewVideo?: string;
  stack?: string;

  // Advanced Marketing & Curriculum Features
  outcomes?: string[];
  prerequisites?: string[];
  targetAudience?: string;
  features?: {
    assignments: boolean;
    quizzes: boolean;
    certificate: boolean;
    mentorship: boolean;
  };
}

// ─── Hero Types ────────────────────────────────────────────────────────────────
export interface HeroTrackItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HeroData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  emailPlaceholder: string;
  startButton: string;
  termsText: string;
  termsLinkText: string;
  termsLinkHref: string;
  activeStudentsLabel?: string;
  activeStudentsCount?: string;
  tracks: HeroTrackItem[];
  media?: {
    type: 'video' | 'image';
    url: string;
    poster?: string;
  };
}

// ─── Feature Types ─────────────────────────────────────────────────────────────
export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
  imageLight?: string;
  imageDark?: string;
}

// ─── Highlight Types ───────────────────────────────────────────────────────────
export interface HighlightItem {
  iconName: string;
  title: string;
  description: string;
}

// ─── Pricing Types ─────────────────────────────────────────────────────────────
export interface PricingTier {
  title: string;
  subheader?: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'outline' | 'secondary' | 'ghost' | 'glass';
  buttonColor: 'primary' | 'secondary';
}

// ─── FAQ Types ─────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Testimonial Types ─────────────────────────────────────────────────────────
export interface TestimonialItem {
  avatarSrc: string;
  name: string;
  occupation: string;
  testimonial: string;
}

// ─── Navigation Types ──────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  path: string;
  icon: string;
}

export interface NavCta {
  label: string;
  icon: string;
}

// ─── Footer Types ──────────────────────────────────────────────────────────────
export interface FooterLinkItem {
  label: string;
  path?: string;
  href?: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLinkItem[];
}

// ─── About Types ───────────────────────────────────────────────────────────────
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  courses: number;
  students: string;
  avatar: string;
}

// ─── Contact Types ─────────────────────────────────────────────────────────────
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  note: string;
}

export interface ContactReason {
  icon: string;
  title: string;
  desc: string;
}
