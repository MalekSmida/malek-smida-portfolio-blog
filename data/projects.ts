import { Project } from '../typings';

const projects: Project[] = [
  {
    _id: 'wanderer-blog',
    title: 'Wanderer blog',
    shortDescription: 'My blog where I share short stories',
    sourceCodeUrl: 'https://github.com/MalekSmida/malek-smida-blog-next-sanity',
    projectUrl: 'https://maleksmida.blog/',
    picture:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1656595506/malek_smida_blog_s2taug.png',
    detailedDescription:
      'Blog with the ability the comment posts created using Next.js (v12) with ISR (Incremental Static Regeneration), Tailwind CSS (v3.0), TypeScript, Sanity as CMS to manage posts and comments (require approval). The app is deployed to Vercel',
  },
  {
    _id: 'tmdb-home',
    title: 'TMDB Home',
    shortDescription: 'Movies and tv shows details where you can watch trailer',
    sourceCodeUrl: 'https://github.com/MalekSmida/tmdb-app-reactjs',
    projectUrl: 'https://i-project-911d5.web.app/',
    picture:
      'https://res.cloudinary.com/deebb8zh7/image/upload/v1656591155/tmdb-home_cliv5k.jpg',
    detailedDescription:
      'Build movie and tv shows details application using ReactJS, TMDB API, Firebase and React Player to play trailer video. The application will display popular movies and tv shows along with other categories, by selecting a movie or tv show you will directed to details page and you will be able to watch official trailer. The application includes search',
  },
];

export default projects;
