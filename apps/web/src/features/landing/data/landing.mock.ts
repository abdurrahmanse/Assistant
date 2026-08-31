export const LANDING_MOCK_DATA = {
  hero: {
    titlePrefix: 'Our latest ',
    titleHighlight: 'products',
    subtitle: 'Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services.',
    termsText: 'By clicking "Start now" you agree to our ',
    termsLinkText: 'Terms & Conditions',
    termsLinkHref: '#',
  },
  logoCollection: {
    title: 'Trusted by the best companies',
    logos: [
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
        alt: 'Sydney',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
        alt: 'Bern',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
        alt: 'Montreal',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
        alt: 'Terra',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
        alt: 'Colorado',
      },
      {
        light: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
        dark: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
        alt: 'Ankara',
      },
    ]
  },
  features: {
    title: 'Product features',
    subtitle: 'Provide a brief overview of the key features of the product. For example, you could list the number of features, their types or benefits, and add-ons.',
    items: [
      {
        iconName: 'Smartphone',
        title: 'Mobile integration',
        description: 'First class responsive design that looks great on mobile, tablet, and desktop.',
        imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")'
      },
      {
        iconName: 'Layers',
        title: 'Available on multiple platforms',
        description: 'Sync your data across all your devices and never lose a single byte of work.',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")'
      },
      {
        iconName: 'MonitorSmartphone',
        title: 'Cross-platform support',
        description: 'Access your information from anywhere, anytime, securely and blazingly fast.',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")'
      }
    ]
  },
  highlights: {
    title: 'Highlights',
    subtitle: 'Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.',
    items: [
      {
        iconName: 'Settings',
        title: 'Adaptable performance',
        description: 'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
      },
      {
        iconName: 'Wrench',
        title: 'Built to last',
        description: 'Experience unmatched durability that goes above and beyond with lasting investment.',
      },
      {
        iconName: 'ThumbsUp',
        title: 'Great user experience',
        description: 'Integrate our product into your routine with an intuitive and easy-to-use interface.',
      },
      {
        iconName: 'Wand2',
        title: 'Innovative functionality',
        description: 'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
      },
      {
        iconName: 'Headset',
        title: 'Reliable support',
        description: 'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
      },
      {
        iconName: 'BarChart3',
        title: 'Precision in every detail',
        description: 'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
      }
    ]
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Quickly build an effective pricing table for your potential customers with this layout. It\'s built with default Material UI components with little customization.',
    tiers: [
      {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
      },
      {
        title: 'Professional',
        subheader: 'Recommended',
        price: '15',
        description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support', 'Dedicated team', 'Best deals'],
        buttonText: 'Start now',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
      },
      {
        title: 'Enterprise',
        price: '30',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
      },
    ]
  },
  faq: {
    title: 'Frequently asked questions',
    questions: [
      {
        id: 'panel1',
        question: 'How do I contact customer support if I have a question or issue?',
        answer: 'You can reach our customer support team by emailing support@email.com or calling our toll-free number. We\'re here to assist you promptly.'
      },
      {
        id: 'panel2',
        question: 'Can I return the product if it doesn\'t meet my expectations?',
        answer: 'Absolutely! We offer a hassle-free return policy. If you\'re not completely satisfied, you can return the product within [number of days] days for a full refund or exchange.'
      },
      {
        id: 'panel3',
        question: 'What makes your product stand out from others in the market?',
        answer: 'Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.'
      },
      {
        id: 'panel4',
        question: 'Is there a warranty on the product, and what does it cover?',
        answer: 'Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.'
      }
    ]
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support.',
    items: [
      {
        avatarSrc: '/static/images/avatar/1.jpg',
        name: 'Remy Sharp',
        occupation: 'Senior Engineer',
        testimonial: "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable."
      },
      {
        avatarSrc: '/static/images/avatar/2.jpg',
        name: 'Travis Howard',
        occupation: 'Lead Product Designer',
        testimonial: "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product."
      },
      {
        avatarSrc: '/static/images/avatar/3.jpg',
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial: 'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.'
      },
      {
        avatarSrc: '/static/images/avatar/4.jpg',
        name: 'Julia Stewart',
        occupation: 'Senior Engineer',
        testimonial: "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience."
      },
      {
        avatarSrc: '/static/images/avatar/5.jpg',
        name: 'John Smith',
        occupation: 'Product Designer',
        testimonial: "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs."
      },
      {
        avatarSrc: '/static/images/avatar/6.jpg',
        name: 'Daniel Wolf',
        occupation: 'CDO',
        testimonial: "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!"
      }
    ]
  }
};

// Also defining TypeScript types to ensure type safety when fetching
export type LandingMockData = typeof LANDING_MOCK_DATA;
