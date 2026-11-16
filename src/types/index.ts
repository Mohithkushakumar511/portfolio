export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI Assistant' | 'Conversational AI' | 'Travel Web Design' | 'Web Engineering';
  image: string;
  tags: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl: string;
  metricsOrHighlights?: string[];
}

export interface Skill {
  name: string;
  iconKey: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  type: 'education' | 'achievement' | 'milestone';
  description: string;
  tags?: string[];
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  handle: string;
  icon: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    preferredName: string;
    fullName: string;
    title: string;
    tagline: string;
    bioParagraphs: string[];
    email: string;
    location: string;
    status?: string;
    avatarUrl: string;
  };
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  journey: JourneyMilestone[];
  coreEthos: {
    title: string;
    description: string;
    icon: string;
  }[];
}
