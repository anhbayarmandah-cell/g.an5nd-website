export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface InstagramStat {
  label: string;
  value: string;
  change?: string;
  description: string;
  icon: string;
}

export interface InstagramReelWork {
  id: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  hook: string;
  theme: string;
  image: string;
  videoUrl?: string;
  tag: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  badge?: string;
  priceNote: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  popular?: boolean;
}

export interface PrincipleItem {
  id: string;
  title: string;
  desc: string;
  status: 'allowed' | 'forbidden';
}

export interface PortfolioProfile {
  name: string;
  title: string;
  subtitle: string;
  greeting?: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  netlifyBaseUrl: string;
  instagramHandle: string;
  socials: {
    facebook?: string;
    instagram: string;
    telegram?: string;
    github?: string;
  };
}
