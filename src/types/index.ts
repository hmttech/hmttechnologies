import { ReactNode } from 'react';

export interface ServiceData {
  icon: ReactNode;
  title: string;
  description: string;
  details: ReactNode;
}

export interface ProjectData {
  image: string;
  title: string;
  description: string;
  details: ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  category: string;
  details: ReactNode;
}