export interface Alternative {
  label: string;
  name: string;
  price: string;
  note: string;
  url: string;
}

export interface TopPick {
  name: string;
  price: string;
  oneLiner: string;
  url: string;
}

export interface Category {
  name: string;
  why: string;
  topPick: TopPick;
  alternatives: Alternative[];
}

export interface Section {
  name: string;
  categories: Category[];
}

export interface Phase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  timeline: string;
  accent: string;
  accentLight: string;
  accentMid: string;
  categoryCount: number;
  description: string;
  sections: Section[];
}

export interface TickerCard {
  phase: string;
  accent: string;
  category: string;
  product: string;
  price: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  image?: string;
}
