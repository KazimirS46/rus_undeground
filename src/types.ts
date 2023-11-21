export type SlidesSolutionsData = {
  id: number;
  imageUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  info: string;
};

export type SolutionsData = {
  id: number;
  title: string;
  linkName: string;
  path: string;
  slides: SlidesSolutionsData[];
};

export type DeveloperTags = {
  id: number;
  title: string;
};
export type DeveloperCompany = {
  id: number;
  logoUrl: string;
  title: string;
  description: string;
  tags: DeveloperTags[];
};

export type DeveloperData = {
  title: string;
  company: DeveloperCompany[];
};

export type Service = {
  id: number;
  title: string;
  serviceName: string;
};

export type EventData = {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
};

export type ProjectData = {
  id: number;
  logoUrl: string;
  title: string;
  info: string;
  description: string;
};

export type SubNavItem = {
  id: number;
  title: string;
  path: string;
};

export type NavItemType = {
  id: number;
  title: string;
  path: string | null;
  submenu: SubNavItem[] | null;
};
