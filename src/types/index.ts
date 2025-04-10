export interface NewsPost {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

export interface Post {
  id: number;
  date: string | null;
  title: string;
  excerpt: string;
  category: string;
  link: string;
  imageUrl: string;
}

export interface MusicCard {
  id: string;
  title: string;
  description: string;
  soundPath: string;
  about: string;
  link: string;
}
