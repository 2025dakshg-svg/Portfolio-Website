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
    icon: '💻',
    title: 'Frontend Development',
    description: 'Building modern and responsive web applications using React.js and focusing on clean UI/UX and component-based architecture.',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    icon: '⚙️',
    title: 'Programming & Problem Solving',
    description: 'Developing strong programming fundamentals using C++ and Python with a focus on logic building and problem-solving.',
    skills: ['C++', 'Python', 'Problem Solving']
  },
  {
    icon: '🧠',
    title: 'AI Learning & Exploration',
    description: 'Exploring core concepts of Artificial Intelligence and Machine Learning while building a foundation for advanced AI development.',
    skills: ['AI Basics', 'Machine Learning Basics']
  }
],

  experience: [
    {
      id: 1,
      period: '2024 — The Beginning',
      title: 'Started My Tech Journey',
      company: 'Self Started',
      location: 'India',
      description: 'Began my journey with zero prior knowledge while studying in 12th grade. Explored basic computer concepts, programming fundamentals, and built curiosity for technology and AI.',
      achievements: [
        
      ],
    },
    {
      id: 2,
      period: '2025 — Academic & Technical Journey',
      title: 'Started Journey at ITM Skills University',
      company: 'ITM Skill University',
      location: 'India',
      description: 'Began my professional journey at ITM Skills University with foundational knowledge in Python and C++. Strengthened programming skills, explored problem-solving techniques, and started building real-world development understanding.',
      achievements: [
        
      ],
    },
    {
      id: 3,
      period: '2026 — Growth & Development',
      title: 'B.Tech Journey & Frontend Development',
      company: 'ITM Skill University',
      location: 'India',
      description: 'Currently pursuing my first year of B.Tech while continuously improving my development skills. Gained strong experience in React.js and modern web technologies, building interactive and responsive applications. Actively expanding my knowledge in AI and software development.',
      achievements: [
        'Python',
        'React.js',
        'Modern Web Technologies',
        'DSA using cpp'
        
      ],
    }
  ],

education: [
  {
    year: '2026 — Present',
    title: 'B.Tech (First Year) — AI & Development Journey',
    institution: 'ITM Skills University',
    description: 'Currently pursuing B.Tech while building strong skills in React.js and modern web development. Actively working on real-world projects and exploring AI concepts.',
    focus: ['React.js', 'Web Development', 'AI Basics', 'Projects']
  },
  {
    year: '2025 — 2026',
    title: 'Programming Foundations',
    institution: 'ITM Skills University',
    description: 'Started my journey at ITM Skills University, building a strong foundation in Python and C++. Focused on problem-solving and core programming concepts.',
    focus: ['Python', 'C++', 'Problem Solving', 'Programming Fundamentals']
  },
  {
    year: '2024',
    title: 'Beginning of Tech Journey',
    institution: 'Self Learning',
    description: 'Started from zero knowledge during 12th grade. Explored basic computer science concepts and developed interest in programming and AI.',
    focus: ['Computer Basics', 'Introduction to Programming', 'Learning Mindset']
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
  
  ],

  research: [
  {
    id: 1,
    title: 'Exploring AI Fundamentals and Real-World Applications',
    year: 2026,
    category: 'Artificial Intelligence',
    description: 'Currently exploring core AI concepts and understanding how machine learning models are applied in real-world scenarios.',
    abstract: 'Focused on learning the fundamentals of AI, including basic model understanding, workflows, and practical implementation approaches.',
    status: 'In Progress',
    tags: ['AI Basics', 'Machine Learning', 'Learning']
  },
  {
    id: 2,
    title: 'Frontend Development with React.js',
    year: 2026,
    category: 'Web Development',
    description: 'Building modern and responsive web applications using React.js and improving UI/UX design skills.',
    abstract: 'Hands-on development of projects focusing on component-based architecture and interactive user interfaces.',
    status: 'In Progress',
    tags: ['React.js', 'JavaScript', 'UI/UX']
  },
  {
    id: 3,
    title: 'Programming Foundations and Problem Solving',
    year: 2025,
    category: 'Programming',
    description: 'Focused on building strong programming fundamentals using Python and C++ along with logical problem solving.',
    abstract: 'Learning core concepts like variables, loops, functions, and basic data structures to strengthen coding skills.',
    status: 'Completed',
    tags: ['Python', 'C++', 'Problem Solving']
  }
], 

  techStack: [
  {
    name: 'Frontend',
    icon: 'F',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: 'B',
    items: ['Node.js (Basics)', 'Python']
  },
  {
    name: 'Programming',
    icon: 'P',
    items: ['C++', 'Python', 'Problem Solving']
  },
  {
    name: 'AI / Learning',
    icon: 'M',
    items: ['Machine Learning Basics', 'AI Concepts']
  },
  {
    name: 'Tools',
    icon: 'T',
    items: ['Git', 'GitHub', 'VS Code']
  }
],
  philosophy: '"The architecture of code is the blueprint of our collective future. We don\'t just build software; we engineer the interfaces through which humanity will experience tomorrow."',

  stats: {
    projects: '5+',
    research: '3',
    uptime: '99.99',
    experience: '2+',
  }
};
