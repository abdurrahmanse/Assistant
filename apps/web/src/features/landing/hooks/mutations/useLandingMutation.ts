import { useMutation, useQueryClient } from '@tanstack/react-query';
import { landingService } from '../../services/landing.service';
import { landingKeys } from '../queries/useLandingQuery';

// ─── Newsletter Subscription Mutation ─────────────────────────────────────────
export const useNewsletterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (email: string) => landingService.subscribeNewsletter(email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: landingKeys.siteMeta() });
    },
  });
};

// ─── Contact Form Mutation ────────────────────────────────────────────────────
export const useContactFormMutation = () => {
  return useMutation({
    mutationFn: (payload: {
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
    }) => landingService.submitContactForm(payload),
  });
};

// ─── Generic Landing Data Update (admin / CMS) ────────────────────────────────
export const useLandingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Parameters<typeof landingService.updateLandingData>[0]) => landingService.updateLandingData(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: landingKeys.all });
    },
  });
};
