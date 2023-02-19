import { INavButton } from '../typings';

const navListBlog: Array<INavButton> = [
  {
    _id: '1',
    title: 'Portfolio',
    link: {
      type: 'route',
      href: '/',
    },
  },
  {
    _id: '2',
    title: 'Posts',
    link: {
      type: 'route',
      href: '/blog',
    },
  },
  {
    _id: '3',
    title: 'About',
    link: {
      type: 'route',
      href: '/about',
    },
  },
];

const navListPortfolio: Array<INavButton> = [
  {
    _id: '1',
    title: 'Career',
    link: {
      type: 'anchor',
      href: '#career',
    },
  },
  {
    _id: '2',
    title: 'About',
    link: {
      type: 'anchor',
      href: '#about',
    },
  },
  {
    _id: '3',
    title: 'Projects',
    link: {
      type: 'anchor',
      href: '#projects',
    },
  },
  {
    _id: '4',
    title: 'Skills',
    link: {
      type: 'anchor',
      href: '#skills',
    },
  },
  {
    _id: '5',
    title: 'Contact',
    link: {
      type: 'anchor',
      href: '#contact',
    },
  },
  {
    _id: '6',
    title: 'Blog',
    link: {
      type: 'route',
      href: '/blog',
    },
  },
];

const navListExperience: Array<INavButton> = [
  {
    _id: '1',
    title: 'Portfolio',
    link: {
      type: 'route',
      href: '/',
    },
  },
  {
    _id: '2',
    title: 'Blog',
    link: {
      type: 'route',
      href: '/blog',
    },
  },
];

export { navListBlog, navListPortfolio, navListExperience };
