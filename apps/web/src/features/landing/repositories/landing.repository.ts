import { apiClient, LANDING_MOCK_DATA } from '@repo/api-client';
import type { LandingMockData } from '@repo/api-client';

// ─── Landing Repository ────────────────────────────────────────────────────────
// Single source of truth for all API calls related to the landing / marketing
// pages. When a real API is available, swap the mock fallback for the real
// endpoint — zero UI code changes required.
class LandingRepository {
  /** Fetch the entire landing page dataset */
  async getLandingData(): Promise<LandingMockData> {
    return apiClient.get<LandingMockData>('/landing', LANDING_MOCK_DATA);
  }

  /** Fetch site-wide meta (name, tagline, contact, social) */
  async getSiteMeta(): Promise<LandingMockData['site']> {
    return apiClient.get<LandingMockData['site']>('/site-meta', LANDING_MOCK_DATA.site);
  }

  /** Fetch navigation structure */
  async getNav(): Promise<LandingMockData['nav']> {
    return apiClient.get<LandingMockData['nav']>('/nav', LANDING_MOCK_DATA.nav);
  }

  /** Fetch footer content */
  async getFooter(): Promise<LandingMockData['footer']> {
    return apiClient.get<LandingMockData['footer']>('/footer', LANDING_MOCK_DATA.footer);
  }

  /** Fetch hero section data */
  async getHero(): Promise<LandingMockData['hero']> {
    return apiClient.get<LandingMockData['hero']>('/hero', LANDING_MOCK_DATA.hero);
  }

  /** Fetch all courses */
  async getCourses(): Promise<LandingMockData['courses']> {
    return apiClient.get<LandingMockData['courses']>('/courses', LANDING_MOCK_DATA.courses);
  }

  /** Fetch about page data */
  async getAbout(): Promise<LandingMockData['about']> {
    return apiClient.get<LandingMockData['about']>('/about', LANDING_MOCK_DATA.about);
  }

  /** Fetch contact page data */
  async getContact(): Promise<LandingMockData['contact']> {
    return apiClient.get<LandingMockData['contact']>('/contact', LANDING_MOCK_DATA.contact);
  }

  /** Fetch highlights section */
  async getHighlights(): Promise<LandingMockData['highlights']> {
    return apiClient.get<LandingMockData['highlights']>('/highlights', LANDING_MOCK_DATA.highlights);
  }

  /** Fetch testimonials */
  async getTestimonials(): Promise<LandingMockData['testimonials']> {
    return apiClient.get<LandingMockData['testimonials']>('/testimonials', LANDING_MOCK_DATA.testimonials);
  }

  /** Fetch FAQ */
  async getBlog(): Promise<any> {
    return apiClient.get<any>('/blog', (LANDING_MOCK_DATA as any).blog);
  }

  async getFaq(): Promise<LandingMockData['faq']> {
    return apiClient.get<LandingMockData['faq']>('/faq', LANDING_MOCK_DATA.faq);
  }

  /** Fetch course detail copy strings */
  async getCourseDetail(): Promise<LandingMockData['courseDetail']> {
    return apiClient.get<LandingMockData['courseDetail']>('/course-detail-copy', LANDING_MOCK_DATA.courseDetail);
  }

  /** Submit newsletter subscription */
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    return apiClient.post('/newsletter/subscribe', { email }, { success: true, message: 'Thank you for subscribing!' });
  }

  /** Submit contact form */
  async submitContactForm(payload: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    return apiClient.post('/contact/submit', payload, {
      success: true,
      message: "Thanks! We'll get back to you within 24 hours.",
    });
  }

  /** Generic update for landing data (admin use) */
  async updateLandingData(data: Partial<LandingMockData>): Promise<LandingMockData> {
    return apiClient.post<LandingMockData>('/landing', data, { ...LANDING_MOCK_DATA, ...data });
  }
  /** Fetch instructor profile */
  async getInstructor(): Promise<any> {
    return (LANDING_MOCK_DATA as any).instructor;
  }

  /** Fetch how it works */
  async getHowItWorks(): Promise<any> {
    return (LANDING_MOCK_DATA as any).howItWorks;
  }

  /** Fetch membership data */
  async getMembership(): Promise<any> {
    return (LANDING_MOCK_DATA as any).membership;
  }
}

export const landingRepository = new LandingRepository();
