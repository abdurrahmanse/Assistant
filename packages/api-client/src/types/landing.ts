export interface CourseItem {
  id: number;
  title: string;
  type: 'Free' | 'Premium';
  price: string;
  level: string;
  icon: string;
  description: string;
}

export interface HeroTrackItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
  imageLight?: string;
  imageDark?: string;
}

export interface HighlightItem {
  iconName: string;
  title: string;
  description: string;
}

export interface PricingTier {
  title: string;
  subheader?: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: 'outlined' | 'contained';
  buttonColor: 'primary' | 'secondary';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  avatarSrc: string;
  name: string;
  occupation: string;
  testimonial: string;
}
