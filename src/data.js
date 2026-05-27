export const portfolioData = {
  personal: {
    name: 'Daksh Ghandat',
    title: 'Aspiring AI Engineer',
    status: 'Currently training at ITM Skill University',
    email: 'dakshghandat@gmail.com',
    phone: '+91-XXX-XXX-XXXX',
    location: 'India',
    bio: 'I am Daksh Ghandat, a student AI Engineer specializing in the synthesis of architectural logic and machine intelligence. Currently navigating the advanced curriculums of ITM Skill University, my journey is defined by a relentless pursuit of "Digital Craftsmanship."'
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
      description: 'Crafting high-performance backends with C++ and Python, focusing on algorithmic efficiency.',
      skills: ['C++20', 'Python 3.10', 'Go']
    },
    {
      icon: '🎨',
      title: 'Interface Architecture',
      description: 'Designing modern, reactive user experiences using React and the principles of atomic design.',
      skills: ['React', 'Tailwind', 'Next.js']
    }
  ],

  education: [
    {
      year: 'Present — 2024',
      title: 'Advanced AI Specialization',
      institution: 'ITM Skill University',
      description: 'Deep diving into neural network architectures and autonomous system design.',
      image: 'gradient'
    },
    {
      year: '2023 — 2024',
      title: 'Foundations of Computation',
      institution: 'ITM Skill University',
      description: 'Mastering algorithmic complexity, data structures, and the core principles of software engineering.',
      image: 'code'
    }
  ],

  techStack: [
    { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Express'] },
    { name: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'scikit-learn'] },
    { name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] }
  ],

  experience: [
    {
      title: 'AI Research Intern',
      company: 'Tech Innovation Labs',
      duration: 'Jun 2024 — Present',
      description: 'Working on cutting-edge neural network architectures and deep learning models for autonomous systems.',
      responsibilities: [
        'Developed transformer-based models for NLP tasks',
        'Optimized inference pipelines for 50ms latency requirements',
        'Collaborated with cross-functional teams on ML infrastructure'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Crafts Studio',
      duration: 'Mar 2024 — May 2024',
      description: 'Built scalable web applications with modern tech stack.',
      responsibilities: [
        'Created responsive React applications',
        'Implemented REST APIs with Node.js',
        'Deployed applications on AWS'
      ],
      skills: ['React', 'Node.js', 'AWS']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'Synapse_Engine',
      category: 'ARTIFICIAL_INTELLIGENCE',
      shortDescription: 'Building a low-latency neural orchestration layer for real-time edge processing.',
      fullDescription: 'An advanced neural orchestration layer for real-time edge processing. This engine powers autonomous agents with sub-50ms inference feedback loops, enabling intelligent decision-making at the edge.',
      image: 'robot',
      tags: ['ML', 'Python', 'TensorFlow'],
      featured: true,
      stats: {
        performance: '312%',
        latency: '18ms',
        accuracy: '99.99'
      },
      challenge: [
        {
          icon: '⚡',
          title: 'Latency Bottlenecks',
          description: 'Standard ML inference suffered from variable latency. Built elastic response for industrial robotics.'
        },
        {
          icon: '🔧',
          title: 'Hardware Constraints',
          description: 'System needed to handle TPU acceleration across cloud and edge devices.'
        },
        {
          icon: '🔗',
          title: 'Data Integrity',
          description: 'Ensuring zero-loss message proof certification across distributed communications.'
        }
      ],
      architecture: [
        {
          icon: 'M',
          name: 'Ingestion Layer',
          description: 'Compressed stream processing using Redis backed data inflow'
        },
        {
          icon: 'C',
          name: 'Core Neural Hub',
          description: 'Adaptive neural orchestration orchestrated compute processing'
        },
        {
          icon: 'E',
          name: 'Execution API',
          description: 'Low-latency gRPC endpoints for fast request distribution'
        }
      ]
    },
    {
      id: 2,
      title: 'Neural Text Summarizer',
      category: 'AI',
      shortDescription: 'Advanced Transformer-based model for extractive and abstractive summarization.',
      fullDescription: 'An advanced Transformer-based model optimized for extractive and abstractive summarization of complex technical documentation with 96% accuracy.',
      image: 'code',
      tags: ['AI', 'Python', 'Transformer'],
      featured: true,
      stats: {
        performance: '96%',
        latency: '200ms',
        accuracy: '96.2'
      }
    },
    {
      id: 3,
      title: 'Autonomous Drone Navigation',
      category: 'Robotics',
      shortDescription: 'Real-time obstacle avoidance using reinforcement learning and stereo vision.',
      fullDescription: 'Real-time obstacle avoidance and path planning using reinforcement learning and stereo vision depth estimation for autonomous aerial vehicles.',
      image: 'code',
      tags: ['Robotics', 'Python', 'Computer Vision'],
      featured: true,
      stats: {
        performance: '95%',
        latency: '50ms',
        accuracy: '97.1'
      }
    },
    {
      id: 4,
      title: 'Sentiment Analysis Engine',
      category: 'ML_NLP',
      shortDescription: 'Multi-modal sentiment engine analyzing text, tone, and facial expressions.',
      fullDescription: 'A multi-modal sentiment engine that analyzes text, tone, and facial expressions to deliver nuanced emotional intelligence for real-world applications.',
      image: 'code',
      tags: ['ML', 'NLP', 'Computer Vision'],
      featured: false,
      stats: {
        performance: '94%',
        latency: '150ms',
        accuracy: '94.5'
      }
    },
    {
      id: 5,
      title: 'QUANTUM_COMPU',
      category: 'Infrastructure',
      shortDescription: 'Distributed management system for hybrid classical-quantum workloads.',
      fullDescription: 'A distributed management system for hybrid classical-quantum workloads, ensuring optimal qubit allocation and error correction.',
      image: 'code',
      tags: ['Infrastructure', 'Quantum'],
      featured: false,
      stats: {
        performance: '92%',
        latency: '100ms',
        accuracy: '98.5'
      }
    },
    {
      id: 6,
      title: 'Globa_Lingo API',
      category: 'API',
      shortDescription: 'Ultra-low latency translation API supporting 140+ dialects.',
      fullDescription: 'Ultra-low latency translation API supporting 140+ dialects with context-aware semantic mapping for global communication.',
      image: 'code',
      tags: ['API', 'NLP'],
      featured: false,
      stats: {
        performance: '99.99%',
        latency: '18ms',
        accuracy: '98.8'
      }
    }
  ],

  research: [
    {
      id: 1,
      title: 'Neural Architecture Search for Edge Devices',
      conference: 'International Conference on Machine Learning (ICML) 2024',
      abstract: 'A novel NAS approach optimized for edge deployment with latency constraints.',
      url: '#research-paper-1',
      year: 2024,
      authors: ['Daksh Ghandat', 'Research Team']
    },
    {
      id: 2,
      title: 'Efficient Transformer Models for Real-time Processing',
      conference: 'NeurIPS Workshop 2024',
      abstract: 'Comprehensive study on optimizing transformer architectures for sub-50ms inference.',
      url: '#research-paper-2',
      year: 2024,
      authors: ['Daksh Ghandat', 'AI Research Lab']
    },
    {
      id: 3,
      title: 'Distributed ML Systems: Challenges and Solutions',
      conference: 'ACM SIGMOD 2024',
      abstract: 'Analysis of distributed machine learning architectures and optimization techniques.',
      url: '#research-paper-3',
      year: 2024,
      authors: ['Daksh Ghandat', 'Systems Team']
    }
  ],

  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'dakshghandat@gmail.com'
  },

  philosophy: '"The architecture of code is the blueprint of our collective future. We don\'t just build software; we engineer the interfaces through which humanity will experience tomorrow."'
};
