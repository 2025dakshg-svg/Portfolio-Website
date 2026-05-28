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
      title: 'DAMS Aerospace',
      category: 'WEB_DEVELOPMENT',
      description: 'A fully responsive aerospace company website featuring stunning hero animations, launch booking system, mission showcases, and a modern e-commerce shop — built with pure HTML, CSS & JavaScript.',
      fullDescription: 'DAMS Aerospace is a complete aerospace company website built from scratch using HTML, CSS, and JavaScript. It features immersive hero sections with video backgrounds, a launch booking system, mission pages, career portal, technology showcases, and an integrated shop — all with smooth animations and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      imageUrl: '/downloads/dams-aerospace.png',
      featured: true,
      caseStudy: true,
      liveUrl: 'https://shankara11y.github.io/DAMS-Aerospace-Website/',
      stats: {
        pages: '7+',
        animations: '20+',
        responsive: '100%',
        performance: '95%'
      },
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Google Fonts', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Percentage Calculator',
      category: 'PYTHON_DEVELOPMENT',
      description: 'A suite of Python-based calculator programs, featuring a console-based percentage calculator and a basic arithmetic calculator with robust input and zero-division handling.',
      fullDescription: 'This repository contains two simple Python calculator programs (SMALLCALCULATOR.py and PERCENTAGECALCULATOR.py) created to practice basic programming concepts such as functions, user input, conditional statements, and arithmetic operations.',
      tags: ['Python', 'Mathematics', 'CLI', 'Algorithm'],
      imageUrl: '/downloads/percentage-calculator.png',
      featured: true,
      caseStudy: true,
      liveUrl: 'https://github.com/2025dakshg-svg/PERCENTAGE-CALCULATOR',
      stats: {
        calculators: '2',
        language: 'Python 3',
        precision: 'High',
        accuracy: '100%'
      },
      techStack: ['Python 3', 'Mathematics', 'CLI', 'Input Validation'],
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
      category: 'WEB_DEVELOPMENT',
      description: 'A sleek and modern web application UI for a platform called secondspin.',
      fullDescription: 'A modern web application built for the secondspin platform, featuring a dark mode UI with neon accents, perfect for digital records and upcycled products.',
      imageUrl: '/downloads/secondspin.png',
      tags: ['Web Development', 'UI/UX', 'JavaScript', 'HTML/CSS'],
      featured: true,
      caseStudy: false,
      stats: {
        performance: '99%',
        accessibility: '100%',
        seo: '100%',
        bestPractices: '100%'
      },
      techStack: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      id: 4,
      title: 'Habit Tracker',
      category: 'PRODUCTIVITY',
      description: 'A customized, dynamic habit tracker built entirely within Google Sheets using advanced formulas.',
      fullDescription: 'A modern, dynamic habit tracker created with Google Sheets. It tracks daily progress, calculates statistics, and visualizes data using conditional formatting and advanced spreadsheet functions.',
      imageUrl: '/downloads/habit_tracker.png',
      tags: ['Google Sheets', 'Productivity', 'Data Visualization'],
      featured: false,
      caseStudy: false,
      stats: {
        efficiency: 'High',
        usability: '100%',
        automation: 'Yes'
      },
      techStack: ['Google Sheets', 'Formulas', 'Conditional Formatting']
    },
    {
      id: 5,
      title: 'React Mini Project (Unit Converter)',
      category: 'WEB_DEVELOPMENT',
      description: 'A React-based utility application for converting units like Celsius to Fahrenheit and many more.',
      imageUrl: '/downloads/unit_converter.png',
      tags: ['React', 'JavaScript', 'Frontend', 'Utility'],
      featured: false,
      stats: {
        accuracy: '100%',
        latency: '10ms',
        uptime: '99.99%'
      },
      techStack: ['React', 'JavaScript', 'HTML5', 'CSS3']
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
