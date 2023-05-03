export enum TopLevelCategoryTypes {
  Courses,
  Services,
  Books,
  Products
}

export interface TopPageAdvantageTypes {
  _id: string;
  title: string;
  description: string;
}

export interface HhDataTypes {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt?: Date;
}

export interface TopPageModelTypes {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategoryTypes;
  advantages?: TopPageAdvantageTypes[];
  createdAt: Date;
  updatedAt: Date;
  hh: HhDataTypes;
}
