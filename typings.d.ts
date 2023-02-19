// ts interfaces and schemas
export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[]; // or [Comment]
  description: string;
  mainImage: {
    assets: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: any; // Object[] created type problem with @portabletext/react
}

export interface Comment {
  _id: string;
  _ref: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
}
export interface AboutBlog {
  _id: string;
  title: string;
  description?: string;
}

// Portfolio
export interface Experience {
  _id: string;
  title: string;
  company?: string;
  date: string;
  position: string;
  coverPath: string;
  work: string[];
}

export interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  sourceCodeUrl?: string;
  projectUrl: string;
  picture: string;
  detailedDescription: string;
}

// can not export enum in Ts
// only use it in same file
enum SkillCategoryEnum {
  Code = 1,
  Cloud,
  Tools,
}

export interface Skill {
  _id: string;
  localPath: string;
  label: string;
  category: SkillCategoryEnum;
}

export interface INavButton {
  _id: string;
  title: string;
  link: { type: 'anchor'; href: string } | { type: 'route'; href: string };
}
