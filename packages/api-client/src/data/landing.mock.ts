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

export const LANDING_MOCK_DATA = {
  hero: {
    titlePrefix: 'Master Your Craft with',
    titleHighlight: 'Expert-Led Courses',
    subtitle: 'Elevate your career with premium courses in Full Stack Development, Data Science, and Digital Marketing. Learn directly from industry professionals and researchers.',
    emailPlaceholder: 'Enter your email address',
    startButton: 'Start Learning Today',
    termsText: 'Join over 10,000+ students worldwide. By signing up you agree to our',
    termsLinkText: 'Terms & Conditions',
    termsLinkHref: '#',
    tracks: [
      { id: "fullstack", title: "Full Stack Engineer", description: "Master React, Node.js, and modern cloud architecture to build scalable web applications.", icon: "Code2" },
      { id: "datascience", title: "Data Scientist", description: "Harness Python, Machine Learning, and Big Data to extract actionable business insights.", icon: "Brain" },
      { id: "marketing", title: "Digital Marketing Growth", description: "Drive revenue with SEO, performance marketing, and data-driven conversion strategies.", icon: "TrendingUp" }
    ]
  },
  logoCollection: {
    title: 'Trusted by professionals from',
    logos: [
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4dff20875c448ea45461_Sydney-white.svg',
        alt: 'Sydney',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4dff20875c448ea45461_Sydney-white.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4dff20875c448ea45461_Sydney-white.svg',
        alt: 'Sydney',
      }
    ]
  },
  features: {
    title: 'Transform your skills',
    subtitle: 'Our platform is designed to give you the most immersive, project-based learning experience available online. Get hands-on with real-world scenarios.',
    items: [
      {
        iconName: 'Smartphone',
        title: 'Learn anywhere, anytime',
        description: 'Our platform is fully responsive. Watch lectures and complete coding exercises seamlessly on your phone, tablet, or desktop.',
        imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")'
      },
      {
        iconName: 'Layers',
        title: 'Comprehensive Curriculum',
        description: 'From React and Node.js to Machine Learning and SEO optimization, access a diverse library of deeply researched content.',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")'
      },
      {
        iconName: 'MonitorSmartphone',
        title: 'Interactive Environments',
        description: 'Practice coding and data analysis directly in your browser with our built-in sandboxes and guided interactive challenges.',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")'
      }
    ] as FeatureItem[]
  },
  highlights: {
    title: 'Why learn with us?',
    subtitle: 'Discover what makes our e-learning platform the preferred choice for ambitious professionals looking to upgrade their technical and marketing skills.',
    items: [
      {
        iconName: 'Settings',
        title: 'Project-Based Learning',
        description: 'Stop watching and start building. Every course concludes with a portfolio-ready project.',
      },
      {
        iconName: 'Wrench',
        title: 'Industry-Vetted Content',
        description: 'Curriculums designed by senior developers, active researchers, and top-tier marketers.',
      },
      {
        iconName: 'ThumbsUp',
        title: 'Lifetime Access',
        description: 'Buy a course once and retain access forever, including all future syllabus updates.',
      },
      {
        iconName: 'Wand2',
        title: 'Community Support',
        description: 'Join a private Discord community to network, ask questions, and collaborate on assignments.',
      },
      {
        iconName: 'Headset',
        title: '1-on-1 Mentorship',
        description: 'Get stuck? Book direct mentorship sessions with your instructors to overcome roadblocks.',
      },
      {
        iconName: 'BarChart3',
        title: 'Data-Driven Insights',
        description: 'Track your learning progress and quiz scores with our advanced personal analytics dashboard.',
      }
    ] as HighlightItem[]
  },
  pricing: {
    title: 'Invest in your future',
    subtitle: 'Choose a learning path that fits your goals. Whether you want a single course or unlimited access to our entire library.',
    tiers: [
      {
        title: 'Single Course',
        price: '49',
        description: ['Lifetime access to 1 course', 'Project files included', 'Community access', 'Certificate of completion'],
        buttonText: 'Browse Catalog',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
      },
      {
        title: 'Pro Access',
        subheader: 'Most Popular',
        price: '29',
        description: ['Access to ALL courses', 'New courses every month', 'Premium Discord channels', 'Weekly live Q&A sessions', 'Resume & portfolio reviews'],
        buttonText: 'Subscribe Now',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
      },
      {
        title: 'Mentorship Bootcamp',
        price: '499',
        description: ['Everything in Pro', '4 months intensive program', 'Weekly 1-on-1 coaching', 'Guaranteed interview prep'],
        buttonText: 'Apply Now',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
      },
    ] as PricingTier[]
  },
  faq: {
    title: 'Frequently asked questions',
    questions: [
      {
        id: 'panel1',
        question: 'Do I need prior experience to take these courses?',
        answer: 'It depends on the course! We offer absolute beginner courses in Web Development and Digital Marketing, as well as advanced masterclasses in Data Science for experienced professionals. Check the prerequisites listed on each course page.'
      },
      {
        id: 'panel2',
        question: 'Will I get a certificate after completing a course?',
        answer: 'Yes! Upon successfully completing all modules and submitting the final project, you will receive a verified certificate that you can add to your LinkedIn profile and resume.'
      },
      {
        id: 'panel3',
        question: 'How does the Pro Access subscription work?',
        answer: 'Pro Access is a monthly or annual subscription that grants you unlimited access to our entire library of current and future courses as long as your subscription is active.'
      },
      {
        id: 'panel4',
        question: 'Is there a refund policy if I am not satisfied?',
        answer: 'Absolutely. We offer a 14-day money-back guarantee on all single course purchases and the first month of subscriptions. If the content isn\'t right for you, just let us know.'
      }
    ] as FAQItem[]
  },
  testimonials: {
    title: 'Student Success Stories',
    subtitle: 'Hear from our alumni who have transformed their careers, landed dream jobs, and launched successful businesses after learning with us.',
    items: [
      {
        avatarSrc: '/static/images/avatar/1.jpg',
        name: 'Sarah Jenkins',
        occupation: 'Full Stack Developer at TechCorp',
        testimonial: "The Full Stack curriculum was incredibly thorough. The final project directly helped me pass my technical interview. Best investment I've ever made in my career."
      },
      {
        avatarSrc: '/static/images/avatar/2.jpg',
        name: 'David Chen',
        occupation: 'Data Analyst',
        testimonial: "I transitioned from a completely different field into Data Science. The instructor's ability to explain complex statistical concepts simply was a game changer for me."
      },
      {
        avatarSrc: '/static/images/avatar/3.jpg',
        name: 'Emily Parker',
        occupation: 'Marketing Director',
        testimonial: "The Digital Marketing Masterclass is phenomenal. I applied the SEO and paid ads strategies to my company's campaigns and we saw a 40% increase in lead generation within a month."
      },
      {
        avatarSrc: '/static/images/avatar/4.jpg',
        name: 'Marcus Johnson',
        occupation: 'Freelance Web Developer',
        testimonial: "I loved the focus on modern tech stacks. Building real applications instead of just watching theoretical videos gave me the confidence to start taking on freelance clients."
      },
      {
        avatarSrc: '/static/images/avatar/5.jpg',
        name: 'Elena Rodriguez',
        occupation: 'UX Researcher',
        testimonial: "The data analysis modules were exactly what I needed to elevate my research reporting. The platform itself is also a joy to use—beautifully designed and very intuitive."
      },
      {
        avatarSrc: '/static/images/avatar/6.jpg',
        name: 'James Wilson',
        occupation: 'Startup Founder',
        testimonial: "As a founder, I needed to learn the basics of coding and marketing fast. This platform gave me the high-level understanding I needed to effectively manage my technical team."
      }
    ] as TestimonialItem[]
  }
};

export type LandingMockData = typeof LANDING_MOCK_DATA;
