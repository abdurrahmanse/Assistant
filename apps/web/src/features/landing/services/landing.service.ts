import type { LandingMockData } from '@repo/api-client';
import { landingRepository } from '../repositories/landing.repository';

// ─── Landing Service ───────────────────────────────────────────────────────────
// The service layer adds business logic, data transformation and error handling
// on top of the raw repository calls. Components never talk to the repository
// directly — they go through the service via custom hooks.
class LandingService {
  /** Full page data — used by the homepage */
  getLandingData = () => landingRepository.getLandingData();

  /** Site-wide meta data */
  getSiteMeta = () => landingRepository.getSiteMeta();

  /** Navigation data */
  getNav = () => landingRepository.getNav();

  /** Footer data */
  getFooter = () => landingRepository.getFooter();

  /** Hero section */
  getHero = () => landingRepository.getHero();

  /** Course catalog with optional type filter */
  getCourses = (filter?: 'Free' | 'Premium') =>
    landingRepository.getCourses().then((data) => ({
      ...data,
      items: filter ? data.items.filter((c) => c.type === filter) : data.items,
    }));

  /** Single course by ID */
  getCourseById = async (id: string) => {
    const data = await landingRepository.getCourses();
    return data.items.find((c) => c.id.toString() === id || c.slug === id) ?? null;
  };

  /** About page data */
  getAbout = () => landingRepository.getAbout();

  /** Contact page data */
  getContact = () => landingRepository.getContact();

  /** Highlights section */
  getHighlights = () => landingRepository.getHighlights();
  getMembership = () => landingRepository.getMembership();

  /** Testimonials section */
  getTestimonials = () => landingRepository.getTestimonials();
  getInstructor = () => landingRepository.getInstructor();
  getHowItWorks = () => landingRepository.getHowItWorks();

  /** FAQ section */
  getFaq = () => landingRepository.getFaq();
  getBlog = () => landingRepository.getBlog();

  /** Course detail copy strings */
  getCourseDetail = () => landingRepository.getCourseDetail();

  /** Newsletter subscription */
  subscribeNewsletter = (email: string) => {
    if (!email || !email.includes('@')) {
      return Promise.reject(new Error('Please enter a valid email address.'));
    }
    return landingRepository.subscribeNewsletter(email.trim().toLowerCase());
  };

  /** Contact form submission */
  submitContactForm = (payload: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    if (!payload.email || !payload.message) {
      return Promise.reject(new Error('Please fill in all required fields.'));
    }
    return landingRepository.submitContactForm(payload);
  };

  /** Generic update for landing data */
  updateLandingData = (data: Partial<LandingMockData>) => {
    return landingRepository.updateLandingData(data);
  };
}

export const landingService = new LandingService();
