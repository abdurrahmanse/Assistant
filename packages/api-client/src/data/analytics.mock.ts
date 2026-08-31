
export const ANALYTICS_MOCK_DATA = {
  overview: {
    title: 'Sales & Progress Overview',
    detailsTitle: 'Detailed Course Metrics',
    statCards: [
      {
        title: 'Enrolled Students',
        value: '14k',
        interval: 'Last 30 days',
        trend: 'up' as const,
        data: [
          200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
          360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
      },
      {
        title: 'Course Completions',
        value: '325',
        interval: 'Last 30 days',
        trend: 'up' as const,
        data: [
          1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
          780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
      },
      {
        title: 'Total Revenue ($)',
        value: '200k',
        interval: 'Last 30 days',
        trend: 'neutral' as const,
        data: [
          500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
          520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
      },
    ]
  },
  highlightedCard: {
    title: 'Publish a new course',
    description: 'Create engaging content, upload videos, and reach thousands of students eager to learn.',
    buttonText: 'Create Course'
  },
  charts: {
    sessionsTitle: 'Student Engagement (Monthly)',
    pageViewsTitle: 'Course Page Views',
    treeViewTitle: 'Course Categories',
    userByCountryTitle: 'Students by Country'
  }
};

export type AnalyticsMockData = typeof ANALYTICS_MOCK_DATA;
