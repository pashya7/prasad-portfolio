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
    photo: "/profile_photo.jpg",
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
    {
      group: "ServiceNow Platform",
      skills: [
        { name: "ITSM", level: 97 },
        { name: "CSM", level: 90 },
        { name: "Service Portal", level: 92 },
        { name: "Flow Designer", level: 90 },
        { name: "Integration Hub", level: 88 },
        { name: "Service Catalog", level: 90 },
        { name: "CMDB", level: 85 },
        { name: "Asset Management", level: 80 },
        { name: "Data Migration", level: 80 },
      ]
    },
    {
      group: "Scripting & APIs",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Client-side Scripting", level: 92 },
        { name: "Server-side Scripting", level: 92 },
      ]
    },
    {
      group: "ITSM/ITIL Processes",
      skills: [
        { name: "Incident Management", level: 95 },
        { name: "Change Management", level: 92 },
        { name: "Problem Management", level: 90 },
        { name: "Knowledge Base", level: 85 },
        { name: "ITIL", level: 90 },
      ]
    },
    {
      group: "Tools & Methodologies",
      skills: [
        { name: "Tables", level: 85 },
        { name: "REST/SOAP APIs", level: 92 },
        { name: "Integration", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Scrum", level: 85 },
        { name: "Automation", level: 88 },
        { name: "Notifications", level: 80 }, 
      ]
    }
  ],
  languages: [
    { name: 'English', code: 'en', proficiency: 'Fluent', native: false, flag: '🇬🇧', percent: 95 },
    { name: 'Hind', code: 'hi', proficiency: 'Fluent', native: false, flag: '🇮🇳', percent: 90 },
    { name: 'Marathi', code: 'mr', proficiency: 'Native', native: true, flag: '🇮🇳', percent: 99 }
  ],
  downloads: [
    { name: 'Resume', file: '/ServiceNow_Senior_Dev_Prasad_Shelar(6+yrs).pdf', label: 'Resume', description: 'Download my latest resume for ServiceNow roles.', icon: '📄', type: 'PDF', ariaLabel: 'Download Resume as PDF' },
    { name: 'Cover Letter', file: '/Cover_Letter.pdf', label: 'Cover Letter', description: 'Download my tailored cover letter for your reference.', icon: '✉️', type: 'PDF', ariaLabel: 'Download Cover Letter as PDF' }
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
   // Experience
    { type: 'experience', date: 'Dec 2025 - Current', title: 'ServiceNow Senior Consultant', org: 'ThirdEra (Remote)', details: [
      'Platform set, ITSM, ITOM implementation.'
    ], icon: '💼' },
    { type: 'experience', date: 'Apr 2022 - Dec 2025', title: 'ServiceNow Senior Consultant', org: 'Deloitte India (Pune, Maharashtra)', details: [
      'Led projects on Integration, ITSM, CSM, and Service Portal development.',
      'Developed Plaid and ACHWorks integrations, Google Cloud Translator, and REST/SOAP ServiceNow integrations.',
      'Customized CSM Portal, implemented ITOM/ITAM, SPM, and multilingual portals.',
      'Delivered Advanced Digital Health (ADH) project.',
      'Proficient in scripting, branding, documentation, and training.',
      'Recognized for high-quality results and team collaboration.'
    ], icon: '💼' },
    { type: 'experience', date: 'Oct 2019 – Apr 2022', title: 'ServiceNow Associate Consultant', org: 'T-systems India Pvt Ltd (Pune, Maharashtra)', details: [
      'Expert in ITSM, ITBM, and integration.',
      'Designed service catalogs, performed scripting, managed notifications, data loads, and integrations.',
      'Gathered requirements, managed code migration, and delivered solutions in agile teams.',
      'Six months BMC Remedy experience.'
    ], icon: '💼' },
   // Education
   { type: 'education', date: '2019 - 2021', title: 'Master of Computer Science', org: 'Dr. D. Y. Patil, Computer Science College, Pune, MH', details: [
     'Graduated with 86%',
     'Focused on advanced computer science concepts, research, and real-world applications through academic projects.'
   ], icon: '🎓' },
   { type: 'education', date: '2016 - 2019', title: 'Bachelor of Computer Science', org: 'Dr. D. Y. Patil, ACS College, Pune, MH', details: [
     'Graduated with 75.05%',
     'Built a strong foundation in programming, algorithms, and software development.'
   ], icon: '🎓' },
   { type: 'education', date: '2015 - 2016', title: '12th', org: 'MJS College, Shrigonda, MH', details: [
     'Passed with 64%'
      ], icon: '🎓' },
   { type: 'education', date: '2013 - 2014', title: '10th', org: 'JVK School, Kashti, MH', details: [
     'Passed with 80.80%'
     ], icon: '🎓' }
  ],
  careerJourneyMap: [
    { date: '2018', title: '1st Prize - Programming Competition', icon: '🏆', description: 'Won 1st prize in a programming competition organized by Dr. D. Y. Patil College.' },
    { date: '2019', title: 'Complete BCS', icon: '🎓', description: 'Completed Bachalor of Computer Science with first class with distinction.' },
    { date: '2019', title: 'Joined T-systems India', icon: '💼', description: 'Career change: Joined T-systems India as an Associate Consultant, specializing in ServiceNow ITSM, ITBM, and integrations.' },
    { date: '2020', title: '3rd Prize - Hackathon Automation', icon: '🏆', description: "Won 3rd prize in the 'Hackathon Automation' competition organized by Automation team T-systems." },
    { date: '2020', title: 'ITIL 4 Certified', icon: '📜', description: 'Completed ITIL Foundation v4 Certification.' },
    { date: '2021', title: 'ServiceNow CSA Certified', icon: '📜', description: 'Achieved ServiceNow System Administrator certification.' },
    { date: '2021', title: 'Complete MCS', icon: '🎓', description: 'Completed Master of Computer Science with first class with distinction.' },
    { date: '2021', title: 'Promoted to Consultant', icon: '💼', description: 'Promoted to Consultant at T-systems India.' },
    { date: 'Apr 2022', title: 'Joined Deloitte India', icon: '💼', description: 'Career change: Joined Deloitte India as a ServiceNow Consultant.' },
    { date: '2022', title: 'Promoted to Senior Consultant', icon: '💼', description: 'Promoted to Senior Consultant at Deloitte India.' },
    { date: 'Dec 2023', title: 'ServiceNow CIS-ITSM Certified', icon: '📜', description: 'Achieved ServiceNow CIS-ITSM certification.' },
    { date: '2023', title: 'ServiceNow Now Community Rising Star Award', icon: '🏆', description: 'Earned for exceptional contributions and leadership in the ServiceNow community.' },
    { date: '2023', title: 'ServiceNow Certified Application Developer', icon: '📜', description: 'Achieved ServiceNow Certified Application Developer certification.' },
    { date: '2024', title: 'ServiceNow Now Community Rising Star Award', icon: '🏆', description: 'Earned for exceptional contributions and leadership in the ServiceNow community.' },
    { date: 'Dec 2025', title: 'Joined ThirdEra', icon: '💼', description: 'Career change: Joined ThirdEra as a ServiceNow Senior Consultant, focusing on platform setup, ITSM, and ITOM implementation.' },
    { date: 'Dec 2025', title: 'ServiceNow CIS-Discovery Certified', icon: '📜', description: 'Achieved ServiceNow CIS-Discovery certification.' }
  ]
};

export default profileData;
