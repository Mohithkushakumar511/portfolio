import { PortfolioConfig } from '../types';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Mohith Kusha Kumar',
    preferredName: 'Mohith',
    fullName: 'Mohith Kusha Kumar',
    title: 'Software Developer | Computer Science Enthusiast',
    tagline: 'Passionate about software development, artificial intelligence, and engineering clean, practical digital solutions.',
    bioParagraphs: [
      'I am a software developer with a strong foundation in computer science and a passion for engineering practical, high-performance software systems.',
      'My work spans conversational artificial intelligence, asynchronous backend microservices with FastAPI, and modern, responsive web applications built using React, TypeScript, and Tailwind CSS.',
      'Dedicated to continuous learning and clean code craftsmanship, I enjoy solving complex engineering challenges and transforming innovative ideas into reliable digital products.'
    ],
    email: 'contact@mohithkushakumar.dev',
    location: 'India',
    avatarUrl: '/assets/images/profile-photo.jpg',
  },
  socials: [
    {
      name: 'Email',
      label: 'Email Inquiries',
      url: 'mailto:contact@mohithkushakumar.dev',
      handle: 'contact@mohithkushakumar.dev',
      icon: 'Mail'
    },
    {
      name: 'GitHub',
      label: 'GitHub Profile',
      url: 'https://github.com/Mohithkushakumar511',
      handle: '@Mohithkushakumar511',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn Network',
      url: 'https://linkedin.com/in/mohithkushakumar',
      handle: 'Mohith Kusha Kumar',
      icon: 'Linkedin'
    },
    {
      name: 'Instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/m_x_hi_x_h/',
      handle: '@m_x_hi_x_h',
      icon: 'Instagram'
    },
    {
      name: 'Discord',
      label: 'Discord',
      url: 'https://discord.com/channels/@me',
      handle: 'Discord | Friends',
      icon: 'Discord'
    }
  ],
  skills: [
    {
      title: 'Languages',
      description: 'Core programming and markup languages utilized for computational logic and structure.',
      skills: [
        {
          name: 'C',
          iconKey: 'C',
          description: 'Low-level procedural logic & memory management',
          highlight: false
        },
        {
          name: 'Java',
          iconKey: 'Java',
          description: 'Object-oriented programming & robust architecture',
          highlight: true
        },
        {
          name: 'Python',
          iconKey: 'Python',
          description: 'Applied AI, scripting & backend automation',
          highlight: true
        },
        {
          name: 'HTML5',
          iconKey: 'HTML5',
          description: 'Semantic markup & modern web standards',
          highlight: false
        },
        {
          name: 'CSS3',
          iconKey: 'CSS3',
          description: 'Responsive styling, animations & layouts',
          highlight: false
        },
        {
          name: 'JavaScript',
          iconKey: 'JavaScript',
          description: 'ES6+ async logic & event handling',
          highlight: true
        }
      ]
    },
    {
      title: 'Frameworks',
      description: 'Modern libraries and frameworks powering web applications and backend APIs.',
      skills: [
        {
          name: 'React',
          iconKey: 'React',
          description: 'Component architecture & reactive state machines',
          highlight: true
        },
        {
          name: 'FastAPI',
          iconKey: 'FastAPI',
          description: 'High-speed asynchronous Python REST APIs',
          highlight: true
        }
      ]
    },
    {
      title: 'Tools',
      description: 'Essential developer tools and platforms powering daily software workflows.',
      skills: [
        {
          name: 'Git',
          iconKey: 'Git',
          description: 'Distributed version control & branch workflows',
          highlight: true
        },
        {
          name: 'GitHub',
          iconKey: 'GitHub',
          description: 'Remote repository hosting & collaboration',
          highlight: true
        },
        {
          name: 'VS Code',
          iconKey: 'VSCode',
          description: 'Code editor, debugging & extensions workflow',
          highlight: false
        }
      ]
    }
  ],
  projects: [
    {
      id: 'ai-companion',
      title: 'AI Companion',
      subtitle: 'Personal Intelligent Assistant',
      description: 'An advanced personal AI assistant engineered to streamline cognitive tasks, maintain context-aware dialogue, and assist in daily productivity workflows through dynamic prompt orchestration and intelligent response synthesis.',
      category: 'AI Assistant',
      image: '/assets/images/project-ai-companion.svg',
      tags: ['Python', 'FastAPI', 'LLM Integration', 'Prompt Engineering', 'React'],
      keyFeatures: [
        'Context-aware multi-turn reasoning with conversational memory',
        'Intelligent prompt routing and dynamic response generation',
        'High-performance backend API with asynchronous request pipelines',
        'Clean, responsive user interface focused on frictionless interaction'
      ],
      githubUrl: 'https://github.com/Mohithkushakumar511/ai-companion',
      liveDemoUrl: '#',
      metricsOrHighlights: [
        'Streamlined multi-turn dialogue architecture',
        'Asynchronous Python backend with FastAPI'
      ]
    },
    {
      id: 'alpha-chatbox',
      title: 'Alpha Chatbox',
      subtitle: 'AI-Powered Chatbot with Robot-Inspired Interface',
      description: 'A responsive intelligent chatbot application featuring a distinctive robot-inspired UI, powered by FastAPI on the backend and the Groq API for ultra-fast LLM inference, delivering natural and fluid conversational experiences.',
      category: 'Conversational AI',
      image: '/assets/images/project-alpha-chatbox.svg',
      tags: ['Python', 'FastAPI', 'Groq API', 'LLM', 'React', 'Tailwind CSS'],
      keyFeatures: [
        'Ultra-fast LLM inference powered by the Groq API backend',
        'Custom robot-inspired chat interface with animated response indicators',
        'Asynchronous request handling for low-latency conversational streaming',
        'Configurable system prompts and dialogue history persistence'
      ],
      githubUrl: 'https://github.com/Mohithkushakumar511/alpha-chatbox',
      liveDemoUrl: 'https://alpha-chatbot-one.vercel.app',
      metricsOrHighlights: [
        'Groq-powered ultra-fast conversational inference',
        'Custom robot-inspired conversational UI'
      ]
    },
    {
      id: 'japan-tour',
      title: 'Japan Tour Website',
      subtitle: 'Cinematic Travel Web Experience',
      description: 'A premium, visually immersive travel website dedicated to Japan — showcasing iconic destination visuals, elegant editorial layouts, curated cultural travel experiences, and a booking-oriented UI inspired by high-end travel aesthetics.',
      category: 'Travel Web Design',
      image: '/assets/images/project-japan-tour.svg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
      keyFeatures: [
        'Full-screen immersive hero with curated destination imagery',
        'Elegantly structured destination cards for iconic Japanese landmarks',
        'Smooth scroll interactions and editorial travel layout design',
        'Booking-oriented interface with itinerary presentation elements',
        'Fully responsive mobile-friendly architecture across all viewports'
      ],
      githubUrl: 'https://github.com/Mohithkushakumar511/japan-tour',
      liveDemoUrl: 'https://japan-tour-blue.vercel.app/',
      metricsOrHighlights: [
        'Cinematic full-screen immersive travel UI',
        'Curated cultural itineraries and booking-focused layout'
      ]
    }
  ],
  journey: [
    {
      period: 'Conversational Systems',
      title: 'Alpha Chatbox & AI Companion',
      organization: 'LLM & Fast Inference Architecture',
      type: 'milestone',
      description: 'Engineered high-throughput conversational interfaces powered by FastAPI and Groq API. Implemented custom robot-inspired UI, multi-turn reasoning context, and real-time streaming.',
      tags: ['FastAPI', 'Groq API', 'LLM Inference', 'React']
    },
    {
      period: 'Editorial Web Experience',
      title: 'Japan Tour Cinematic Platform',
      organization: 'Creative Frontend Engineering',
      type: 'milestone',
      description: 'Crafted a full-featured immersive travel web experience celebrating Japanese culture and landmarks with booking-focused UI and responsive mobile architecture.',
      tags: ['Creative Web Design', 'UI/UX', 'Responsive Design', 'JavaScript']
    },
    {
      period: 'Core Foundations',
      title: 'Computer Science & Software Engineering',
      organization: 'Engineering Foundations',
      type: 'education',
      description: 'Comprehensive study and practice in Data Structures, Algorithms, Object-Oriented Design, Operating Systems, Database Management Systems, and Web Technologies.',
      tags: ['Data Structures', 'Algorithms', 'OOP', 'Python', 'Java', 'C']
    }
  ],
  coreEthos: [
    {
      title: 'Pragmatic Engineering',
      description: 'Prioritizing clean, maintainable architecture over unnecessary complexity to solve concrete problems.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Intelligent Systems',
      description: 'Harnessing modern AI, API services, and machine learning to build responsive, helpful tools.',
      icon: 'Brain'
    },
    {
      title: 'Design & Usability',
      description: 'Pairing robust computational logic with refined typography, accessible layouts, and intuitive interaction.',
      icon: 'Sparkles'
    }
  ]
};
