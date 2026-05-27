// Portfolio Data - Centralized Content
export const portfolioData = {
  personal: {
    name: 'Daksh Ghandat',
    title: 'Aspiring AI Engineer',
    email: 'dakshghandat@gmail.com',
    phone: '+91-XXXXXXXXXX',
    location: 'India',
    bio: 'I am Daksh Ghandat, a student AI Engineer specializing in the synthesis of architectural logic and machine intelligence. Currently navigating the advanced curriculums of ITM Skill University, my journey is defined by a relentless pursuit of "Digital Craftsmanship."',
    status: 'Currently training at ITM Skill University',
    systemStatus: 'OPTIMAL',
    latency: '14MS'
  },

  social: {
    github: 'https://github.com/dakshghandat',
    linkedin: 'https://linkedin.com/in/dakshghandat',
    twitter: 'https://twitter.com/dakshghandat',
    email: 'dakshghandat@gmail.com'
  },

  expertise: [
    {
      icon: '🧠',
      title: 'AI / ML Synthesis',
      description: 'Implementing neural networks, building ML architectures and predictive models to solve complex neuralistic challenges.',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      icon: '⚙️',
      title: 'Systems Engineering',
      description: 'Crafting high-performance backends with C++ and Python, focusing on algorithmic efficiency and scalability.',
      skills: ['C++', 'Python', 'Go']
    },
    {
      icon: '🎨',
      title: 'Interface Architecture',
      description: 'Designing modern, reactive user experiences using React and the principles of atomic design.',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    }
  ],

  experience: [
    {
      id: 1,
      period: '2024 - Present',
      title: 'Student AI Engineer',
      company: 'ITM Skill University',
      location: 'India',
      description: 'Deep diving into neural network architectures, autonomous systems, and advanced AI specialization. Building end-to-end AI solutions and contributing to open-source ML projects.',
      achievements: [
        'Implemented state-of-the-art transformer models for NLP tasks',
        'Built autonomous systems with reinforcement learning',
        'Contributed to multiple open-source AI projects',
        'Achieved 96.8% accuracy on multi-modal sensor inputs'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      id: 2,
      period: '2023 - 2024',
      title: 'Foundations of Computation',
      company: 'ITM Skill University',
      location: 'India',
      description: 'Mastering algorithmic complexity, data structures, and the core principles of software engineering.',
      achievements: [
        'Completed advanced algorithms course with distinction',
        'Built compiler architecture project',
        'Mastered data structure implementation'
      ],
      skills: ['Data Structures', 'Algorithms', 'C++', 'Python', 'System Design']
    }
  ],

  education: [
    {
      year: 'Present — 2024',
      title: 'Advanced AI Specialization',
      institution: 'ITM Skill University',
      description: 'Deep diving into neural network architectures and autonomous system design at ITM Skill University.',
      focus: ['Neural Networks', 'Autonomous Systems', 'Advanced AI']
    },
    {
      year: '2023 — 2024',
      title: 'Foundations of Computation',
      institution: 'ITM Skill University',
      description: 'Mastering algorithmic complexity, data structures, and the core principles of software engineering.',
      focus: ['Algorithms', 'Data Structures', 'System Design']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Synapse_Engine',
      category: 'ARTIFICIAL_INTELLIGENCE',
      description: 'Building a low-latency neural orchestration layer for real-time edge processing. This engine powers autonomous agents with sub-50ms inference feedback loops.',
      fullDescription: 'A sophisticated ML orchestration system designed for real-time processing with minimal latency. Built to handle high-throughput inference requests while maintaining accuracy.',
      tags: ['ML', 'Python', 'TensorFlow', 'Real-time Processing'],
      featured: true,
      caseStudy: true,
      stats: {
        performance: '312%',
        latency: '18ms',
        uptime: '99.99%',
        accuracy: '96.8%'
      },
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker']
    },
    {
      id: 2,
      title: 'Neural Text Summarizer',
      category: 'NLP',
      description: 'An advanced Transformer-based model optimized for extractive and abstractive summarization of complex technical documentation.',
      fullDescription: 'Leveraging state-of-the-art transformer architectures to generate concise and accurate summaries from large technical documents.',
      tags: ['NLP', 'Transformers', 'Python', 'BERT'],
      featured: true,
      caseStudy: true,
      stats: {
        performance: '45%',
        latency: '850ms',
        uptime: '99.95%',
        accuracy: '94.2%'
      },
      techStack: ['Python', 'PyTorch', 'Transformers', 'NLTK', 'spaCy']
    },
    {
      id: 3,
      title: 'Autonomous Drone Navigation',
      category: 'ROBOTICS',
      description: 'Real-time obstacle avoidance and path planning using reinforcement learning and stereo vision depth estimation.',
      fullDescription: 'A complete autonomous navigation system combining computer vision and reinforcement learning for intelligent drone pathfinding.',
      tags: ['Robotics', 'CV', 'Reinforcement Learning', 'Python'],
      featured: true,
      caseStudy: true,
      stats: {
        performance: '89%',
        latency: '50ms',
        uptime: '99.9%',
        accuracy: '97.5%'
      },
      techStack: ['Python', 'OpenCV', 'PyTorch', 'ROS', 'C++']
    },
    {
      id: 4,
      title: 'Sentiment Analysis Engine',
      category: 'NLP_ML',
      description: 'A multi-modal sentiment engine that analyzes text, tone, and facial expressions to deliver nuanced emotional intelligence.',
      tags: ['ML', 'NLP', 'Computer Vision'],
      featured: false,
      stats: {
        accuracy: '92.1%',
        latency: '120ms',
        uptime: '99.88%'
      },
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Librosa']
    },
    {
      id: 5,
      title: 'QUANTUM_COMPU',
      category: 'INFRASTRUCTURE',
      description: 'A distributed management system for hybrid classical-quantum workloads, ensuring optimal qubit allocation and error correction.',
      tags: ['Infrastructure', 'Quantum', 'Distributed Systems'],
      featured: false,
      stats: {
        accuracy: '99.99%',
        latency: '2500ms',
        uptime: '99.99%'
      },
      techStack: ['Qiskit', 'Python', 'AWS', 'Kubernetes']
    },
    {
      id: 6,
      title: 'Globa_Lingo API',
      category: 'API',
      description: 'Ultra-low latency translation API supporting 140+ dialects with context-aware semantic mapping.',
      tags: ['API', 'NLP', 'Backend'],
      featured: false,
      stats: {
        languages: '140+',
        latency: '85ms',
        uptime: '99.99%'
      },
      techStack: ['Node.js', 'Python', 'Google Translate API', 'MongoDB']
    }
  ],

  research: [
    {
      id: 1,
      title: 'Bridging Theoretical AI and Production-Ready Systems',
      year: 2024,
      category: 'AI Architecture',
      description: 'Research focusing on bridging the gap between theoretical AI models and production-ready systems that solve real-world problems at scale.',
      abstract: 'This research explores methodologies for deploying complex AI models in production environments while maintaining performance and reliability.',
      status: 'In Progress',
      tags: ['AI', 'ML Ops', 'System Design']
    },
    {
      id: 2,
      title: 'Neural Architecture Search for Edge Devices',
      year: 2024,
      category: 'Neural Networks',
      description: 'Automated discovery of optimal neural network architectures for resource-constrained edge computing environments.',
      abstract: 'NAS techniques adapted for edge deployment scenarios where computational resources are limited.',
      status: 'In Progress',
      tags: ['NAS', 'Edge Computing', 'AutoML']
    },
    {
      id: 3,
      title: 'Multi-Modal Fusion for Autonomous Systems',
      year: 2023,
      category: 'Computer Vision',
      description: 'Advanced fusion techniques for combining visual, audio, and sensor data in autonomous system decision-making.',
      abstract: 'Novel approaches to sensor fusion for improved situational awareness in autonomous agents.',
      status: 'Completed',
      tags: ['Computer Vision', 'Sensor Fusion', 'Robotics']
    }
  ],

  techStack: [
    {
      name: 'Frontend',
      icon: 'F',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      icon: 'B',
      items: ['Node.js', 'Python', 'FastAPI', 'Flask']
    },
    {
      name: 'ML/AI',
      icon: 'M',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV']
    },
    {
      name: 'Database',
      icon: 'D',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DB']
    },
    {
      name: 'DevOps',
      icon: 'O',
      items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions']
    },
    {
      name: 'Tools',
      icon: 'T',
      items: ['Git', 'VS Code', 'Jupyter', 'Figma']
    }
  ],

  philosophy: '"The architecture of code is the blueprint of our collective future. We don\'t just build software; we engineer the interfaces through which humanity will experience tomorrow."',

  stats: {
    projects: '12+',
    research: '3',
    publications: '2',
    uptime: '99.99',
    experience: '2+',
    systems: '12+'
  }
};
