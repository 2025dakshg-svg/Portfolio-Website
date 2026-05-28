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
      title: 'DAMS Aerospace',
      category: 'WEB_DEVELOPMENT',
      shortDescription: 'A fully responsive aerospace company website with hero animations, launch booking, and shop.',
      fullDescription: 'DAMS Aerospace is a complete aerospace company website built from scratch using HTML, CSS, and JavaScript. It features immersive hero sections with video backgrounds, a launch booking system, mission pages, career portal, technology showcases, and an integrated shop — all with smooth animations and responsive design.',
      image: 'rocket',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/downloads/dams-aerospace.png',
      featured: true,
      liveUrl: 'https://shankara11y.github.io/DAMS-Aerospace-Website/',
      stats: {
        pages: '7+',
        animations: '20+',
        accuracy: '100'
      },
      challenge: [
        {
          icon: '🚀',
          title: 'Immersive Hero Sections',
          description: 'Built cinematic hero sections with video backgrounds and smooth scroll-triggered animations.'
        },
        {
          icon: '🎨',
          title: 'Pure CSS Animations',
          description: 'Created complex animations and transitions using only vanilla CSS — no libraries needed.'
        },
        {
          icon: '📱',
          title: 'Fully Responsive',
          description: 'Ensured pixel-perfect responsiveness across all devices from mobile to ultra-wide displays.'
        }
      ],
      architecture: [
        {
          icon: 'H',
          name: 'HTML5 Structure',
          description: 'Semantic HTML5 layout with accessible navigation and SEO-friendly markup'
        },
        {
          icon: 'C',
          name: 'CSS3 Styling',
          description: 'Modern CSS with flexbox, grid, animations, and custom properties'
        },
        {
          icon: 'J',
          name: 'JavaScript Logic',
          description: 'Vanilla JS for interactivity, form handling, and dynamic content'
        }
      ]
    },
    {
      id: 2,
      title: 'Percentage Calculator',
      category: 'PYTHON_DEVELOPMENT',
      shortDescription: 'A suite of Python-based calculator programs, featuring percentage calculations and robust mathematical functions.',
      fullDescription: 'This repository contains two simple Python calculator programs (SMALLCALCULATOR.py and PERCENTAGECALCULATOR.py) created to practice basic programming concepts such as functions, user input, conditional statements, and arithmetic operations.',
      image: 'code',
      tags: ['Python', 'Mathematics', 'CLI', 'Algorithm'],
      imageUrl: '/downloads/percentage-calculator.png',
      featured: true,
      liveUrl: 'https://github.com/2025dakshg-svg/PERCENTAGE-CALCULATOR',
      stats: {
        calculators: '2',
        language: 'Python 3',
        accuracy: '100'
      },
      challenge: [
        {
          icon: '🐍',
          title: 'Procedural Logic',
          description: 'Structuring clean arithmetic and percentage logic into reusable, standalone Python functions.'
        },
        {
          icon: '➗',
          title: 'Zero Division Guarding',
          description: 'Implementing custom exception logic to handle and recover from division-by-zero math errors.'
        },
        {
          icon: '⚡',
          title: 'Input Robustness',
          description: 'Gracefully validating user inputs to accept floats and integers without throwing runtime errors.'
        }
      ],
      architecture: [
        {
          icon: 'I',
          name: 'Input Handling',
          description: 'Standard library inputs prompting user for specific arithmetic operation and numbers.'
        },
        {
          icon: 'C',
          name: 'Calculation logic',
          description: 'Functional backend implementing logic for small-scale arithmetic and percentage scaling.'
        },
        {
          icon: 'O',
          name: 'Output UI',
          description: 'Clean console formatting showing calculation steps and outputs to the terminal screen.'
        }
      ],
      codeSnippet: `# PERCENTAGECALCULATOR.py - Core Implementation
def calculate_percentage(part, total):
    """
    Computes the percentage of a part relative to a total.
    Handles division-by-zero errors gracefully.
    """
    try:
        percentage = (part / total) * 100
        return percentage
    except ZeroDivisionError:
        return "Error: Total cannot be zero."

def main():
    print("=== Python Percentage Calculator ===")
    try:
        part = float(input("Enter the part value: "))
        total = float(input("Enter the total value: "))
        
        result = calculate_percentage(part, total)
        if isinstance(result, str):
            print(result)
        else:
            print(f"Result: {part} is {result:.2f}% of {total}")
    except ValueError:
        print("Error: Input must be a valid number.")

if __name__ == '__main__':
    main()`
    },
    {
      id: 3,
      title: 'Secondspin Website',
      category: 'Web Development',
      shortDescription: 'A sleek and modern web application UI for secondspin.',
      fullDescription: 'A modern web application built for the secondspin platform, featuring a dark mode UI with neon accents, perfect for digital records and upcycled products.',
      imageUrl: '/downloads/secondspin.png',
      tags: ['Web Development', 'UI/UX', 'JavaScript', 'HTML/CSS'],
      featured: true,
      stats: {
        performance: '99%',
        accessibility: '100%',
        seo: '100%'
      }
    },
    {
      id: 4,
      title: 'Habit Tracker',
      category: 'Productivity',
      shortDescription: 'A dynamic habit tracker built in Google Sheets.',
      fullDescription: 'A modern, dynamic habit tracker created with Google Sheets. It tracks daily progress, calculates statistics, and visualizes data using conditional formatting and advanced spreadsheet functions.',
      imageUrl: '/downloads/habit_tracker.png',
      tags: ['Google Sheets', 'Productivity', 'Data Visualization'],
      featured: false,
      stats: {
        efficiency: 'High',
        usability: '100%',
        automation: 'Yes'
      }
    },
    {
      id: 5,
      title: 'React Mini Project (Unit Converter)',
      category: 'Web Development',
      shortDescription: 'A React-based utility application for converting units.',
      fullDescription: 'A React-based utility application for converting units like Celsius to Fahrenheit and many more.',
      imageUrl: '/downloads/unit_converter.png',
      tags: ['React', 'JavaScript', 'Utility'],
      featured: false,
      stats: {
        performance: '100%',
        latency: '10ms',
        accuracy: '100%'
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
