import type {
  CourseItem,
  HeroTrackItem,
  FeatureItem,
  HighlightItem,
  PricingTier,
  FAQItem,
  TestimonialItem,
} from '../types/landing';

// ─── FULL LANDING MOCK DATA ────────────────────────────────────────────────────
export const LANDING_MOCK_DATA = {
  // ── SITE META ─────────────────────────────────────────────────────────────
  site: {
    name: 'SkillForge',
    tagline: 'Learn. Build. Grow.',
    description: 'Enterprise-grade e-learning for Full Stack Development, Data Science, and Digital Marketing.',
    email: 'support@skillforge.dev',
    phone: '+1 (555) 123-4567',
    officeHours: '9:00 AM – 6:00 PM, Monday to Friday',
    portalUrl: 'http://localhost:5174',
    signinUrl: 'http://localhost:5174/signin',
    signupUrl: 'http://localhost:5174/signup',
    socialLinks: {
      github: 'https://github.com/skillforge',
      linkedin: 'https://linkedin.com/company/skillforge',
      twitter: 'https://x.com/skillforge',
    },
    copyright: 'SkillForge Academy',
    featuredLabel: 'Flagship Program',
    moneyBackDays: 30,
  },

  // ── NAVIGATION ────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'Home', path: '/', icon: 'Home' },
      { label: 'Courses', path: '/courses', icon: 'BookOpen' },
      { label: 'About', path: '/about', icon: 'Info' },
      
    ],
    cta: {
      portal: { label: 'My Portal', icon: 'LayoutDashboard' },
      signin: { label: 'Sign in', icon: 'LogIn' },
      signup: { label: 'Contact', icon: 'Mail' },
    },
  },

  // ── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    newsletter: {
      heading: 'Join the newsletter',
      subheading: 'Weekly insights on tech & marketing. No spam, ever.',
      emailPlaceholder: 'Your email address',
      ctaLabel: 'Subscribe',
    },
    linkGroups: [
      {
        heading: 'Learn',
        links: [
          { label: 'All Courses', path: '/courses' },
          { label: 'Free Courses', path: '/courses' },
          { label: 'Premium Tracks', path: '/courses' },
          { label: 'Enroll Now', href: 'http://localhost:5174/signup' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us', path: '/about' },
          { label: 'Contact', path: '/contact' },
          { label: 'Student Portal', href: 'http://localhost:5174/signin' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Terms of Service', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'Cookie Policy', href: '#' },
        ],
      },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },

  // ── HERO ──────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Launch Your Tech Career Today',
    titlePrefix: 'Master Your Craft with',
    titleHighlight: 'Expert-Led Courses',
    subtitle:
      'Elevate your career with premium courses in Full Stack Development, Data Science, and Digital Marketing. Learn directly from industry professionals and researchers.',
    emailPlaceholder: 'Enter your email address',
    startButton: 'Start Learning Today',
    termsText: 'Join over 10,000+ students worldwide. By signing up you agree to our',
    termsLinkText: 'Terms & Conditions',
    termsLinkHref: '#',
    activeStudentsLabel: 'Active Students',
    activeStudentsCount: '10,000+',
    tracks: [
      {
        id: 'fullstack',
        title: 'Full Stack Engineer',
        description: 'Master React, Node.js, and modern cloud architecture to build scalable web applications.',
        icon: 'Code2',
      },
      {
        id: 'datascience',
        title: 'Data Scientist',
        description: 'Harness Python, Machine Learning, and Big Data to extract actionable business insights.',
        icon: 'Brain',
      },
      {
        id: 'marketing',
        title: 'Digital Marketing Growth',
        description: 'Drive revenue with SEO, performance marketing, and data-driven conversion strategies.',
        icon: 'TrendingUp',
      },
    ] as HeroTrackItem[],
    media: {
      type: 'video',
      url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    },
  },

  // ── COURSES ───────────────────────────────────────────────────────────────
  courses: {
    title: 'Enterprise Learning Tracks',
    subtitle: 'Advance your career with our industry-leading curriculums built for the modern workforce.',
    enrollCtaFree: 'Start Free Preview',
    enrollCtaPremium: 'Enroll in Track',
    filterLabels: {
      all: 'All Tracks',
      free: 'Free Previews',
      premium: 'Premium Tracks',
    },
    stacks: ['Frontend', 'Backend', 'DevOps', 'Data Science', 'Digital Marketing'],
    items: [
      {
        id: 1,
      slug: 'advanced-react-and-nextjs-architecture',
      title: 'Advanced React & Next.js Architecture',
        type: 'Premium',
        price: '$999',
        level: 'Senior',
        icon: 'Code2',
        description: 'Build enterprise-scale frontend applications with modern React patterns, Next.js App Router, and server components.',
        rating: 4.9,
        studentsCount: 12400,
        duration: '45 hours',
        instructor: 'Sarah Drasner',
        tags: ['React', 'Next.js', 'TypeScript', 'Frontend'],
        stack: 'Frontend',
        gradient: 'linear-gradient(135deg, #00C6ff 0%, #0072ff 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        modules: [
          { title: 'Advanced Server Components', lessons: 8, duration: '4h 15m' },
          { title: 'State Management at Scale', lessons: 12, duration: '6h 30m' },
          { title: 'Performance & Streaming', lessons: 6, duration: '3h 45m' },
        ],
        outcomes: ['Build full-stack web applications from scratch', 'Master React, Next.js, and TypeScript', 'Design and implement RESTful APIs', 'Deploy robust apps to Vercel and AWS'],
        prerequisites: ['Basic understanding of HTML & CSS', 'Familiarity with JavaScript fundamentals'],
        targetAudience: 'Aspiring developers looking to transition into full-stack engineering roles.',
        features: { assignments: true, quizzes: true, certificate: true, mentorship: true },

      },
      {
        id: 2,
      slug: 'machine-learning-engineering',
      title: 'Machine Learning Engineering',
        type: 'Premium',
        price: '$1,299',
        level: 'Intermediate',
        icon: 'Brain',
        description: 'Deploy real-world ML models to production using Python, TensorFlow, and scalable cloud infrastructure.',
        rating: 4.8,
        studentsCount: 8900,
        duration: '60 hours',
        instructor: 'Andrew Ng',
        tags: ['Python', 'TensorFlow', 'MLOps', 'Data Science'],
        stack: 'Data Science',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        modules: [
          { title: 'Neural Networks Deep Dive', lessons: 15, duration: '10h 20m' },
          { title: 'Model Deployment & MLOps', lessons: 10, duration: '8h 00m' },
        ],
        outcomes: ['Understand core cloud computing concepts', 'Build scalable infrastructure using AWS', 'Implement CI/CD pipelines with GitHub Actions', 'Master containerization using Docker & Kubernetes'],
        prerequisites: ['Basic Linux command line knowledge', 'Understanding of networking fundamentals'],
        targetAudience: 'Software engineers and system administrators looking to specialize in DevOps and Cloud architecture.',
        features: { assignments: true, quizzes: false, certificate: true, mentorship: false },

      },
      {
        id: 3,
      slug: 'growth-marketing-and-analytics',
      title: 'Growth Marketing & Analytics',
        type: 'Premium',
        price: '$799',
        level: 'Beginner to Pro',
        icon: 'TrendingUp',
        description: 'Master conversion rate optimization, paid acquisition, and data-driven marketing strategies.',
        rating: 4.7,
        studentsCount: 15200,
        duration: '35 hours',
        instructor: 'Neil Patel',
        tags: ['SEO', 'Analytics', 'Growth', 'Digital Marketing'],
        stack: 'Digital Marketing',
        gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        modules: [
          { title: 'SEO Foundations', lessons: 10, duration: '5h' },
          { title: 'Advanced Google Ads', lessons: 8, duration: '6h 30m' },
        ],
        outcomes: ['Develop advanced machine learning models', 'Deploy scalable MLOps pipelines', 'Work with TensorFlow and PyTorch', 'Analyze large datasets efficiently'],
        prerequisites: ['Strong foundation in Python programming', 'Basic understanding of statistics and linear algebra'],
        targetAudience: 'Data analysts and Python developers aiming to master deep learning and MLOps.',
        features: { assignments: true, quizzes: true, certificate: true, mentorship: true },

      },
      {
        id: 4,
      slug: 'modern-api-design-(free-preview)',
      title: 'Modern API Design (Free Preview)',
        type: 'Free',
        price: '$0',
        level: 'Intermediate',
        icon: 'MonitorPlay',
        description: 'Learn RESTful patterns, GraphQL fundamentals, and secure API architecture in this free primer.',
        rating: 4.6,
        studentsCount: 32000,
        duration: '5 hours',
        instructor: 'Guillermo Rauch',
        tags: ['API', 'GraphQL', 'REST', 'Backend'],
        stack: 'Backend',
        gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        modules: [
          { title: 'REST vs GraphQL', lessons: 4, duration: '2h' },
          { title: 'Authentication Basics', lessons: 3, duration: '1h 30m' },
        ],
        outcomes: ['Design scalable microservices', 'Master REST and GraphQL API standards', 'Implement robust authentication and authorization', 'Optimize database queries for performance'],
        prerequisites: ['Experience with backend programming (Node.js/Python/Go)', 'Familiarity with relational databases'],
        targetAudience: 'Backend developers who want to learn enterprise-grade architecture patterns.',
        features: { assignments: false, quizzes: true, certificate: true, mentorship: false },

      },
      {
        id: 5,
      slug: 'data-visualization-mastery',
      title: 'Data Visualization Mastery',
        type: 'Premium',
        price: '$599',
        level: 'All Levels',
        icon: 'BarChart',
        description: 'Transform complex datasets into beautiful, interactive dashboards using D3.js and modern tooling.',
        rating: 4.9,
        studentsCount: 6500,
        duration: '25 hours',
        instructor: 'Shirley Wu',
        tags: ['D3.js', 'Data Viz', 'Frontend'],
        stack: 'Frontend',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        modules: [
          { title: 'D3.js Fundamentals', lessons: 10, duration: '6h' },
          { title: 'Interactive Dashboards', lessons: 8, duration: '8h' },
        ],
        outcomes: ['Write modern, robust TypeScript code', 'Understand advanced type constraints', 'Refactor large JavaScript codebases', 'Configure TS for React and Node'],
        prerequisites: ['Proficiency in modern JavaScript (ES6+)', 'Basic experience with React or Node'],
        targetAudience: 'JavaScript developers seeking to improve code reliability and developer experience.',
        features: { assignments: true, quizzes: true, certificate: true, mentorship: false },

      },
      {
        id: 6,
      slug: 'cloud-devops-and-kubernetes',
      title: 'Cloud DevOps & Kubernetes',
        type: 'Premium',
        price: '$1,499',
        level: 'Expert',
        icon: 'Code2',
        description: 'Architect, deploy, and scale containerized applications on AWS using Kubernetes and Terraform.',
        rating: 4.9,
        studentsCount: 18000,
        duration: '70 hours',
        instructor: 'Kelsey Hightower',
        tags: ['AWS', 'Kubernetes', 'Terraform', 'DevOps'],
        stack: 'DevOps',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80',
        previewVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        modules: [
          { title: 'Docker Deep Dive', lessons: 12, duration: '8h' },
          { title: 'Kubernetes Cluster Management', lessons: 20, duration: '20h' },
          { title: 'Infrastructure as Code', lessons: 15, duration: '15h' },
        ],
        outcomes: ['Design intuitive user interfaces', 'Create comprehensive design systems in Figma', 'Conduct user research and usability testing', 'Handoff designs seamlessly to developers'],
        prerequisites: ['No prior experience required', 'A computer with Figma installed'],
        targetAudience: 'Creative individuals aiming to start a career in UI/UX design.',
        features: { assignments: true, quizzes: false, certificate: true, mentorship: true },

      },
    ] as CourseItem[],
  },


  // ── ABOUT ─────────────────────────────────────────────────────────────────
  about: {
    hero: {
      title: 'We are on a mission to\naccelerate human learning.',
      subtitle: 'Our platform combines world-class curriculum, interactive video lessons, and a supportive community to help you achieve your career goals faster.',
    },
    stats: [
      { value: '50k+', label: 'Active Students' },
      { value: '120+', label: 'Countries Reached' },
      { value: '98%', label: 'Completion Rate' },
      { value: '4.9/5', label: 'Average Rating' },
    ],
    valuesHeading: 'Our Core Values',
    valuesSubheading: 'The principles that guide everything we build.',
    values: [
      { icon: 'Target', title: 'Quality First', desc: 'We never compromise on the quality of our curriculum.' },
      { icon: 'Users', title: 'Community Driven', desc: 'Learning is better together. We foster a supportive environment.' },
      { icon: 'BookOpen', title: 'Continuous Learning', desc: 'The tech industry moves fast, and so do our courses.' },
      { icon: 'TrendingUp', title: 'Career Focused', desc: 'Every lesson is designed to make you more employable.' },
      { icon: 'Award', title: 'Excellence', desc: 'We strive for excellence in every aspect of our platform.' },
      { icon: 'Globe', title: 'Accessible to All', desc: 'World-class education should be available anywhere.' },
    ],
    teamHeading: 'Meet the Instructors',
    teamSubheading: 'Learn from industry veterans who have worked at top tech companies.',
    team: [
      { name: 'Sarah Drasner', role: 'VP of Engineering', courses: 4, students: '12k+', avatar: 'S' },
      { name: 'Andrew Ng', role: 'Machine Learning Pioneer', courses: 2, students: '8k+', avatar: 'A' },
      { name: 'Neil Patel', role: 'Growth Marketing Expert', courses: 3, students: '15k+', avatar: 'N' },
      { name: 'Kelsey Hightower', role: 'Distinguished Engineer', courses: 1, students: '18k+', avatar: 'K' },
    ],
  },

  // ── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    heading: 'Get in touch',
    subheading: 'Whether you have a question about our courses, pricing, or just want to say hi, our team is ready to answer all your questions.',
    contactInfo: [
      { icon: 'Mail', label: 'Email Us', value: 'hello@skillforge.com', note: 'Our friendly team is here to help.' },
      { icon: 'Phone', label: 'Call Us', value: '+1 (555) 123-4567', note: 'Mon-Fri from 8am to 5pm.' },
      { icon: 'Clock', label: 'Response Time', value: 'Within 24 hours', note: 'We try to reply as fast as we can.' },
    ],
    reasonsHeading: 'How can we help?',
    reasons: [
      { icon: 'MessageCircle', title: 'General Inquiry', desc: 'Questions about our platform or features.' },
      { icon: 'BookOpen', title: 'Course Information', desc: 'Need help finding the right learning track.' },
      { icon: 'Briefcase', title: 'Enterprise Sales', desc: 'Want to train your entire engineering team.' },
    ],
    form: {
      heading: 'Send us a message',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        subject: 'Subject',
        subjectPlaceholder: 'How can we help?',
        message: 'Your Message',
      },
      submitLabel: 'Send Message',
      privacy: 'By submitting this form, you agree to our privacy policy.',
    },
  },

  // ── COURSE DETAIL ─────────────────────────────────────────────────────────
  courseDetail: {
    backLabel: 'Back to Courses',
    outcomesHeading: 'What you will learn',
    prerequisitesHeading: 'Prerequisites',
    targetAudienceHeading: 'Who is this course for?',
    featuresHeading: 'Course Features',

    instructorLabel: 'Taught by',
    originalPrice: '$1,999',
    urgencyLabel: 'Ends soon! Limited time offer.',
    secureCheckoutLabel: 'Secure checkout',
    sslLabel: 'SSL Encrypted',
    ratingLabel: 'Rating',
    studentsLabel: 'Students',
    durationLabel: 'Total video',
    lessonsLabel: 'Lessons',
    courseNotFound: 'Course not found',
    browseCourses: 'Browse Courses',
    priceSubtext: 'Full lifetime access',
    ctaFree: 'Start Free Preview',
    ctaPremium: 'Enroll Now',
    ctaPreview: 'Preview Course',
    guarantee: '14-day money-back guarantee',
    includesHeading: 'This course includes:',
    includes: [
      { icon: 'PlayCircle', text: '{lessons} on-demand video lessons' },
      { icon: 'BookOpen', text: 'Downloadable resources and project files' },
      { icon: 'Award', text: 'Certificate of completion' },
      { icon: 'Zap', text: 'Access on mobile and desktop' },
      { icon: 'CheckCircle2', text: 'Premium community access' },
    ],
    topicsLabel: 'Topics covered:',
    curriculumHeading: 'Course Curriculum',
    curriculumMeta: '{sections} sections • {lessons} lessons • {duration} total length',
    socialProofHeading: 'Trusted by thousands of students',
    socialProofItems: [
      { statKey: 'rating', label: 'Average Rating', sub: 'From thousands of reviews' },
      { statKey: 'students', label: 'Active Students', sub: 'Learning right now' },
      { statKey: 'guarantee', label: 'Money-Back', sub: 'Risk-free enrollment' },
    ],
  },

  highlights: {
    title: 'Why learn with us?',
    subtitle:
      'Discover what makes our e-learning platform the preferred choice for ambitious professionals looking to upgrade their skills.',
    items: [
      { iconName: 'Settings', title: 'Project-Based Learning', description: 'Stop watching and start building. Every course concludes with a portfolio-ready project.' },
      { iconName: 'Wrench', title: 'Industry-Vetted Content', description: 'Curriculums designed by senior developers, active researchers, and top-tier marketers.' },
      { iconName: 'ThumbsUp', title: 'Lifetime Access', description: 'Buy a course once and retain access forever, including all future syllabus updates.' },
      { iconName: 'Wand2', title: 'Community Support', description: 'Join a private Discord community to network, ask questions, and collaborate on assignments.' },
      { iconName: 'Headset', title: '1-on-1 Mentorship', description: 'Get stuck? Book direct mentorship sessions with your instructors to overcome roadblocks.' },
      { iconName: 'BarChart3', title: 'Data-Driven Insights', description: 'Track your learning progress and quiz scores with our advanced personal analytics dashboard.' },
    ] as HighlightItem[],
  },

  // ── PRICING ───────────────────────────────────────────────────────────────
  pricing: {
    title: 'Unlock Your Learning Journey',
    subtitle: 'Choose a learning path that fits your goals. Start with one course or unlock everything forever.',
    tiers: [
      {
        title: 'Single Course',
        price: 'From $49',
        description: ['Lifetime access to 1 course', 'Project files included', 'Community access', 'Certificate of completion'],
        buttonText: 'Browse Courses',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
      },
      {
        title: 'Annual Subscription',
        subheader: 'Most Flexible',
        price: '$199/yr',
        description: ['Access to ALL courses', 'New courses every month', 'Premium Discord channels', 'Weekly live Q&A sessions', 'Cancel anytime'],
        buttonText: 'Subscribe Annually',
        buttonVariant: 'contained',
        buttonColor: 'primary',
      },
      {
        title: 'Lifetime Subscription',
        subheader: 'Best Value',
        price: '$499',
        description: ['Lifetime access to ALL courses', 'All future courses included', '1-on-1 mentorship sessions', 'Resume & portfolio reviews', 'Exclusive masterclasses'],
        buttonText: 'Get Lifetime Access',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
      },
    ] as PricingTier[],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    title: 'Frequently asked questions',
    questions: [
      {
        id: 'panel1',
        question: 'Do I need prior experience to take these courses?',
        answer:
          "It depends on the course! We offer absolute beginner courses in Web Development and Digital Marketing, as well as advanced masterclasses in Data Science for experienced professionals. Check the prerequisites listed on each course page.",
      },
      {
        id: 'panel2',
        question: 'Will I get a certificate after completing a course?',
        answer:
          'Yes! Upon successfully completing all modules and submitting the final project, you will receive a verified certificate that you can add to your LinkedIn profile and resume.',
      },
      {
        id: 'panel3',
        question: 'How does the Pro Access subscription work?',
        answer:
          'Pro Access is a monthly or annual subscription that grants you unlimited access to our entire library of current and future courses as long as your subscription is active.',
      },
      {
        id: 'panel4',
        question: 'Is there a refund policy if I am not satisfied?',
        answer:
          "Absolutely. We offer a 14-day money-back guarantee on all single course purchases and the first month of subscriptions. If the content isn't right for you, just let us know.",
      },
      {
        id: 'panel5',
        question: 'Can I access courses on mobile devices?',
        answer:
          'Yes! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktops. You can watch video lectures, complete exercises, and track your progress from any device.',
      },
      {
        id: 'panel6',
        question: 'Are there live sessions or is everything pre-recorded?',
        answer:
          'Most course content is pre-recorded and available on-demand so you can learn at your own pace. Pro subscribers get access to weekly live Q&A sessions with instructors.',
      },
    ] as FAQItem[],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────
  testimonials: {
    title: 'Student Success Stories',
    subtitle:
      'Hear from our alumni who have transformed their careers, landed dream jobs, and launched successful businesses.',
    items: [
      {
        avatarSrc: '/static/images/avatar/1.jpg',
        name: 'Sarah Jenkins',
        occupation: 'Full Stack Developer at TechCorp',
        testimonial:
          "The Full Stack curriculum was incredibly thorough. The final project directly helped me pass my technical interview. Best investment I've ever made in my career.",
      },
      {
        avatarSrc: '/static/images/avatar/2.jpg',
        name: 'David Chen',
        occupation: 'Data Analyst',
        testimonial:
          "I transitioned from a completely different field into Data Science. The instructor's ability to explain complex statistical concepts simply was a game changer for me.",
      },
      {
        avatarSrc: '/static/images/avatar/3.jpg',
        name: 'Emily Parker',
        occupation: 'Marketing Director',
        testimonial:
          "The Digital Marketing Masterclass is phenomenal. I applied the SEO and paid ads strategies to my company's campaigns and we saw a 40% increase in lead generation within a month.",
      },
      {
        avatarSrc: '/static/images/avatar/4.jpg',
        name: 'Marcus Johnson',
        occupation: 'Freelance Web Developer',
        testimonial:
          "I loved the focus on modern tech stacks. Building real applications instead of just watching theoretical videos gave me the confidence to start taking on freelance clients.",
      },
      {
        avatarSrc: '/static/images/avatar/5.jpg',
        name: 'Elena Rodriguez',
        occupation: 'UX Researcher',
        testimonial:
          "The data analysis modules were exactly what I needed to elevate my research reporting. The platform itself is also a joy to use—beautifully designed and very intuitive.",
      },
      {
        avatarSrc: '/static/images/avatar/6.jpg',
        name: 'James Wilson',
        occupation: 'Startup Founder',
        testimonial:
          "As a founder, I needed to learn the basics of coding and marketing fast. This platform gave me the high-level understanding I needed to effectively manage my technical team.",
      },
    ] as TestimonialItem[],
  },

  // ── LOGO COLLECTION ───────────────────────────────────────────────────────

  instructor: {
    heading: "Meet Your Instructor",
    subheading: "I've helped thousands of developers transition into senior roles and build production-grade applications.",
    name: "Abdur Rahman",
    title: "Senior Full-Stack Engineer & Architect",
    bio: "Hey! I'm a passionate software engineer with over a decade of experience building scalable enterprise applications. I created this platform to cut through the noise and teach you the exact patterns, tools, and architectures used by top tech companies. No fluff, just real-world engineering.",
    avatar: "https://i.pravatar.cc/500?img=11",
    stats: [
      { label: "Years Exp.", value: "10+" },
      { label: "Students", value: "20k+" },
      { label: "Companies", value: "15+" }
    ],
    socials: [
      { platform: "Twitter", url: "#", icon: "Twitter" },
      { platform: "GitHub", url: "#", icon: "GitHub" },
      { platform: "LinkedIn", url: "#", icon: "LinkedIn" }
    ]
  },
  howItWorks: {
    heading: "The Path to Mastery",
    subheading: "A proven, step-by-step process to take you from fundamentals to advanced engineering.",
    steps: [
      {
        title: "1. Project-Based Learning",
        description: "Forget boring lectures. We build real, production-ready applications from day one.",
        icon: "Code2"
      },
      {
        title: "2. Code Reviews & Feedback",
        description: "Get your code reviewed by me. Learn best practices and avoid common pitfalls.",
        icon: "MessageCircle"
      },
      {
        title: "3. Enterprise Architecture",
        description: "Master system design, scalable infrastructure, and CI/CD pipelines.",
        icon: "Layers"
      }
    ]
  },
  logoCollection: {
    title: 'Trusted by professionals from',
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
    ],
  },
};

export type LandingMockData = typeof LANDING_MOCK_DATA;
