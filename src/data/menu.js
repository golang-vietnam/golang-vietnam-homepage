export default [
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Jobs',
    href: '/jobs',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Resources',
    href: '/resources',
    children: [
      {
        name: 'Videos',
        href: '/resources/videos',
      },
      {
        name: 'Articles',
        href: '/resources/articles',
      },
      {
        name: 'Books',
        href: '/resources/books',
      },
    ],
  },
  {
    name: 'Members',
    href: '/members',
  },
]
