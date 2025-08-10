// Example dynamic profile data file
const profileData = {
  faq: [
    {
      category: 'About Prasad',
      qa: [
        { q: 'What is your ServiceNow experience?', a: 'I have 6+ years of experience in ServiceNow development, ITSM, and workflow automation.' },
        { q: 'What certifications do you have?', a: 'I am a ServiceNow Certified System Administrator and ITIL Foundation certified.' },
        { q: 'What is your professional background?', a: 'I have a background in ServiceNow, ITSM, and cloud transformation.' },
      ],
    },
    {
      category: 'Portfolio & Projects',
      qa: [
        { q: 'Show me your top project.', a: 'Check out the Incident Automation Platform in my portfolio gallery for a showcase of automation and analytics.' },
        { q: 'What is the Incident Automation Platform?', a: 'It is a platform built on ServiceNow that automated the incident lifecycle, integrated with Slack, and provided real-time analytics dashboards.' },
        { q: 'Do you have any case studies?', a: 'Yes, see my portfolio section for case studies and project details.' },
      ],
    },
    {
      category: 'Contact & More',
      qa: [
        { q: 'How can I contact you?', a: 'Use the contact form at the bottom of this page or connect with me on LinkedIn.' },
        { q: 'Can I download your resume?', a: 'Yes, you can download my resume from the Quick Downloads section.' },
        { q: 'Where can I find your LinkedIn?', a: 'You can find my LinkedIn profile in the contact section.' },
      ],
    },
  ],
  profile: {
    name: "Prasad Shelar",
    title: "ServiceNow Senior Developer",
    about: "6+ 2 years of experience in ServiceNow, ITSM, and cloud transformation. Passionate about building scalable, user-centric enterprise apps and mentoring future tech leaders.",
    tagline: "1Transforming challenges into seamless digital solutions.",
    photo: "https://drive.google.com/uc?export=view&id=1aFsFmzUM_5qL8hVOlApd7FIqIx_FKZML",
    location: "Pune, India",
    contact: {
      email: {
        value: "prasad7official2@gmail.com",
        icon: "email"
      },
      phone: {
        value: "+91 9503669461",
        icon: "phone"
      },
      github: "https://github.com/prasad-shelar"
    }
  },
  skills: [
    { name: "ServiceNow1", level: 5 },
    { name: "JavaScript 2", level: 92 },
    { name: "ITIL", level: 90 },
    { name: "React", level: 88 },
    { name: "REST 2 API", level: 85 },
    { name: "Team Leadership", level: 84 },
    { name: "Agile/Scrum", level: 83 },
    { name: "UI/UX", level: 8 }
  ],
  languages: [
    { name: 'English', code: 'en', proficiency: 'Fluent', native: false, flag: '🇬🇧', percent: 95 },
    { name: 'Hind', code: 'hi', proficiency: 'Fluent', native: false, flag: '🇮🇳', percent: 90 },
    { name: 'Marathi', code: 'mr', proficiency: 'Native', native: true, flag: '🇮🇳', percent: 99 }
  ],
  downloads: [
    { name: 'Resume', file: 'https://docs.google.com/document/d/1G2KWbs6QZSTK6UIQC4vaCf6eE-lAhvEA/export?format=pdf', label: 'Resume', description: 'Download my latest resume for ServiceNow roles.', icon: '📄', type: 'PDF', ariaLabel: 'Download Resume as PDF' },
    { name: 'Cover Letter', file: 'https://docs.google.com/document/d/1c9LikCHDSx7iJbfC2gf07XSJMv54VXmq/edit?usp=drive_link&ouid=109198433832835124652&rtpof=true&sd=true', label: 'Cover Letter', description: 'Download my tailored cover letter for your reference.', icon: '✉️', type: 'PDF', ariaLabel: 'Download Cover Letter as PDF' }
  ],
  funFacts: [
    'Avid1 trekker & nature photographer',
    'Loves 2 solving Rubik’s cubes',
    'Writes tech blogs & mentors juniors',
    'Enjoys cricket and chess',
    'Coffee enthusiast ',
    'Passionate about open-source',
    'Plays guitar and sings',
    'Volunteers for STEM education'
  ],
  certifications: [
    { name: "ServiceNow CIS - Discovery", year: 2025, url: "https://cloud.google.com/certification/cloud-engineer", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
    { name: "ServiceNow Certified Application Developer", year: 2023 , url: "https://cloud.google.com/certification/cloud-engineer", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
    { name: "ServiceNow CIS – ITSM", year: 2023 },
    { name: "Micro Certification – Citizen Developer Application Creator", year: 2022 },
    { name: "ServiceNow System Administrator (CSA)", year: 2021 },
    { name: "Micro-Certification – Integration Hub", year: 2021 },
    { name: "Micro-Certification - Flow Designer", year: 2021 },
    { name: "Advanced JavaScript Certificate", year: 2021 },
    { name: "ITIL Foundation v4 Certificate in ITSM", year: 2020 }
  ],
  articles: [
    { title: "H ow to Use Switch Case in JavaScript (ServiceNow Example)", url: "https://www.servicenow.com/community/developer-articles/how-to-use-switch-case-in-javascript-with-example-servicenow/ta-p/2312594", excerpt: "A practical guide to using switch-case statements in JavaScript, with ServiceNow-specific examples.", category: "Tutorial", tags: ["JavaScript", "ServiceNow", "Tutorial"] },
    { title: "5 ServiceNow Best Practices for Enterprise IT", url: "https://servicenow.com/blog/best-practices.html", excerpt: "Learn how to optimize your ServiceNow implementation for scale and reliability with these 5 proven strategies.", category: "Tutorial", tags: ["Tutorial", "Best Practices"] },
    { title: "Solving Real-World ITSM Challenges", url: "https://community.servicenow.com/community?id=community_blog&sys_id=abc123", excerpt: "A deep dive into common ITSM pain points and how to address them using ServiceNow workflows.", category: "Insights", tags: ["Problem-Solving", "ITSM"] },
    { title: "Automating HR Service Delivery", url: "https://servicenow.com/blog/hr-automation.html", excerpt: "How automation in ServiceNow can transform HR service delivery and employee experience.", category: "Case Study", tags: ["Automation", "HR"] },
    { title: "Building a ServiceNow Integration with REST APIs", url: "https://developer.servicenow.com/blog/integration-rest-api", excerpt: "Step-by-step guide to connecting ServiceNow with external systems using REST APIs and best practices for security.", category: "Integration", tags: ["Integration", "REST API", "ServiceNow"] },
    { title: "Digital Transformation: Lessons from the Field", url: "https://servicenow.com/blog/digital-transformation-lessons.html", excerpt: "Real-world stories and lessons learned from leading successful digital transformation projects with ServiceNow.", category: "Thought Leadership", tags: ["Digital Transformation", "Strategy"] },
    { title: "Mastering ServiceNow Flow Designer", url: "https://developer.servicenow.com/blog/flow-designer-best-practices", excerpt: "A comprehensive guide to automating workflows in ServiceNow using Flow Designer, with tips for maintainability and scale.", category: "Tutorial", tags: ["ServiceNow", "Automation", "Flow Designer"] },
    { title: "The Future of ITSM: AI and Automation", url: "https://servicenow.com/blog/itsm-ai-automation.html", excerpt: "Explore how artificial intelligence and automation are reshaping ITSM and what it means for enterprise IT teams.", category: "Insights", tags: ["AI", "ITSM", "Automation"] }
  ],
  testimonials: [
    { name: "Anjali Patil", role: "IT Manager, TechNova", quote: "1Prasad is a rare talent—his ServiceNow expertise and leadership transformed our ITSM operations.", linkedin: "https://linkedin.com/in/anjali-patil" },
    { name: "Rahul Deshmukh", role: "Senior Developer, CloudBridge", quote: "A true mentor and problem-solver. Prasad’s solutions are always innovative and reliable.", linkedin: "https://linkedin.com/in/rahul-deshmukh" },
    { name: "Priya Sharma", role: "Client, Fortune 500", quote: "Working with Prasad was a game-changer for our digital transformation journey.", linkedin: "" },
    { name: "Amit Kulkarni", role: "Architect, TechNova", quote: "His attention to detail and passion for quality are unmatched.", linkedin: "" },
    { name: "Sonal Jain", role: "Product Owner, CloudBridge", quote: "Prasad consistently delivers above expectations and inspires the team.", linkedin: "" },
    { name: "Vikram Rao", role: "Manager, Fortune 500", quote: "Excellent communicator and technical leader.", linkedin: "" }
  ],
  portfolios: [
    { name: "11 Incident Automation Platform", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "JavaScript", "Slack API"], desc: "Automated incident lifecycle, integrated with Slack, and provided real-time analytics dashboards.", details: "Reduced incident resolution time by 40%. Features: auto-routing, Slack notifications, analytics. Role: Lead Developer.", video: "" },
    { name: "HR Service Portal", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "HR", "React"], desc: "Developed a user-friendly HR portal for onboarding and employee services.", details: "Custom onboarding workflows, document upload, employee dashboard. Role: Fullstack Developer.", video: "" },
    { name: "Change Management Automation", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "ITIL", "React"], desc: "Streamlined change management process, reducing errors and manual effort.", details: "Automated approvals, audit trails, React-based dashboards. Role: ServiceNow Developer.", video: "" },
    { name: "Knowledge Base Portal", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "Knowledge", "UI/UX"], desc: "Built a searchable knowledge base for enterprise IT.", details: "Advanced search, tagging, and analytics. Role: UI/UX Lead.", video: "" },
    { name: " F Asset Management System", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "Assets", "Automation"], desc: "Automated asset tracking and lifecycle management.", details: "Barcode scanning, automated reporting. Role: Automation Engineer.", video: "" },
    { name: "Finance Workflow Automation", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "Finance", "Workflow"], desc: "Digitized and automated finance approval workflows.", details: "Role-based approvals, audit trails. Role: Workflow Designer.", video: "" },
    { name: "Custom Reporting Dashboard", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", tech: ["ServiceNow", "Reporting", "React"], desc: "Built custom dashboards for real-time analytics.", details: "Interactive charts, export features. Role: Frontend Developer.", video: "" }
  ],
  professionalJourney: [
    { type: 'education', date: '2015 - 2019', title: 'BCS Computer Science – Pune University', org: 'Pune University', details: 'The expanded description box will now only show the title and description (details), with the date removed for a cleaner look. You can check the timeline: when you expand an item, the new box displays just the title and description as requested. If you need further adjustments—such as changing the order, font, or adding/removing other fields—just let me know!.Started as a ServiceNow Developer. Built custom HR and ITSM workflows. First Class with Distinction', icon: '📜' },
    { type: 'certification', date: '2020', title: 'Certified System Administrator (ServiceNow)', org: 'ServiceNow', details: 'Credential ID: SN-123456', icon: '📜' },
    { type: 'experience', date: '2019 - 2022', title: 'ServiceNow Developer – CloudBridge', org: 'CloudBridge', details: 'Developed custom ServiceNow apps for HR and ITSM workflows. Integrated third-party APIs and enhanced user experience with UI policies.', icon: '💼' },
    { type: 'experience', date: '2022 - Present', title: 'Lead ServiceNow Developer – TechNova Solutions', org: 'TechNova Solutions', details: 'Led a team of 5, delivering 10+ ServiceNow modules for Fortune 500 clients. Architected ITSM automation for Fortune 500 clients.', icon: '💼' },
    { type: 'certification', date: '2022', title: 'Certified Scrum Master', org: 'Scrum Alliance', details: 'Credential ID: CSM-654321', icon: '📜' },
    { type: 'award', date: '2024', title: 'Awarded "Innovator of the Year"', org: 'TechNova', details: 'Recognized for automating 80% of manual workflows.', icon: '🏆' }
  ],
  careerJourneyMap: [
    { date: '2019', title: 'Joined 2 CloudBridge', icon: '💼', description: ' The expanded description box will now only show the title and description (details), with the date removed for a cleaner look. You can check the timeline: when you expand an item, the new box displays just the title and description as requested. If you need further adjustments—such as changing the order, font, or adding/removing other fields—just let me know!.Started as a ServiceNow Developer. Built custom HR and ITSM workflows.' },
    { date: '2020', title: 'ServiceNow Certified', icon: '📜', description: 'Achieved ServiceNow System Administrator certification.' },
    { date: '2021', title: 'Incident Automation Platform', icon: '  🛠️', description: 'Launched automation platform, reducing incident resolution time by 40%.' },
    { date: '2022', title: 'Lead Developer at TechNova', icon: '💼', description: 'Promoted to Lead. Architected ITSM automation for Fortune 500 clients.' },
    { date: '2023', title: 'ITIL 2 Certified', icon: '📜', description: 'Completed ITIL Foundation Certification.' },
    { date: '2024', title: 'Awarded "Innovator of the Year"', icon: '🏆', description: 'Recognized for automating 80% of manual workflows.' }
  ]
};

export default profileData;
