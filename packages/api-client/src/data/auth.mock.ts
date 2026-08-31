import type { AuthContentItem } from "../types/auth";


export const mockAuthData = {
  signIn: {
    title: 'Sign in',
    emailLabel: 'Email',
    emailPlaceholder: 'student@academy.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••',
    rememberMe: 'Remember me',
    forgotPasswordLink: 'Forgot your password?',
    submitButton: 'Sign in',
    orDivider: 'or',
    googleButton: 'Sign in with Google',
    facebookButton: 'Sign in with Facebook',
    noAccountText: "Don't have an account?",
    signUpLink: 'Sign up',
    validation: {
      emailInvalid: 'Please enter a valid email address.',
      passwordLength: 'Password must be at least 6 characters long.',
    }
  },
  signUp: {
    title: 'Create Account',
    nameLabel: 'Full name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'student@academy.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••',
    allowExtraEmails: 'I want to receive updates, course discounts, and marketing tutorials via email.',
    submitButton: 'Sign up',
    orDivider: 'or',
    googleButton: 'Sign up with Google',
    facebookButton: 'Sign up with Facebook',
    alreadyAccountText: 'Already have an account?',
    signInLink: 'Sign in',
    validation: {
      nameEmpty: 'Name is required.',
      emailInvalid: 'Please enter a valid email address.',
      passwordLength: 'Password must be at least 6 characters long.',
    }
  },
  forgotPassword: {
    title: 'Reset password',
    description: "Enter your account's email address and we'll send you a link to reset your password and get back to your learning.",
    emailPlaceholder: 'Email address',
    cancelButton: 'Cancel',
    submitButton: 'Send reset link'
  },
  content: {
    items: [
      {
        icon: 'AutoFixHigh',
        title: 'Project-Based Learning',
        description:
          'Stop watching and start building. Learn Full Stack Development by creating real-world applications.',
      },
      {
        icon: 'Construction',
        title: 'Data Science & Research',
        description:
          'Dive deep into analytics, machine learning, and advanced research methodologies with industry experts.',
      },
      {
        icon: 'ThumbUpAlt',
        title: 'Digital Marketing Mastery',
        description:
          'Learn how to scale businesses with SEO, paid ads, and conversion rate optimization strategies.',
      },
      {
        icon: 'Settings',
        title: 'Lifetime Access',
        description:
          'Enroll once and get lifetime access to course materials, including all future updates and additions.',
      },
    ] as AuthContentItem[]
  }
};
export type AuthMockData = typeof mockAuthData;
