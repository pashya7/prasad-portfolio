// Example dynamic profile data file
const profileData = {
  faq: [
    {
      category: 'About Prasad',
      qa: [
        { q: 'What is your ServiceNow experience?', a: 'I have 6 years of hands-on experience as a ServiceNow developer, leading ITSM, CSM, Service Portal, and automation projects for global clients.' },
        { q: 'What certifications do you have?', a: 'I am certified in ServiceNow CIS-ITSM, CIS-Discovery, Application Developer, and ITIL v4.' },
        { q: 'What is your professional background?', a: 'I specialize in ServiceNow platform configuration, custom app development, integrations (REST/SOAP, Integration Hub), and process automation. I enjoy mentoring, collaborating, and delivering value through digital transformation.' },
      ],
    },
    {
      category: 'Portfolio & Projects',
      qa: [
        { q: 'Show me your top project.', a: 'Sure! My Incident Automation Platform automates the entire incident lifecycle in ServiceNow, with Slack integration and real-time analytics. It reduced resolution time by 40%.' },
        { q: 'What is the Incident Automation Platform?', a: 'It’s a custom solution on ServiceNow that automates incidents, routes tasks, integrates with Slack, and provides actionable analytics dashboards.' },
        { q: 'Do you have any case studies?', a: 'Absolutely! Please visit my portfolio section for detailed case studies and project highlights.' },
      ],
    },
    {
      category: 'Contact & More',
      qa: [
        { q: 'How can I contact you?', a: 'You can reach me via the contact form below, email (prasad7official2@gmail.com), or connect with me on LinkedIn.' },
        { q: 'Can I download your resume?', a: 'Yes! My latest resume and cover letter are available in the Quick Downloads section.' },
        { q: 'Where can I find your LinkedIn?', a: 'You’ll find my LinkedIn link in the contact section. I’m happy to connect!' },
      ],
    },
  ],
  profile: {
    name: "Prasad Shelar",
    title: "ServiceNow Senior Developer",
    about: [
      "Prasad Shelar is a certified Senior ServiceNow Developer with 6+ years of experience delivering enterprise-grade solutions across ITSM, ITOM, CSM, and Service Portal. He specializes in scripting, integrations, and automation, having led complex implementations for global clients. With strong skills in JavaScript, REST/SOAP APIs, and ServiceNow architecture, Prasad builds scalable, user-focused platforms that drive efficiency and transformation. Passionate about solving problems and enhancing user experience, he thrives in collaborative environments, enjoys mentoring, and continuously seeks innovative ways to improve."],
    tagline: "Turning business challenges into smart ServiceNow solutions - with precision, passion, and purpose.",
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
      github: "https://github.com/pashya7",
      linkedin: "https://www.linkedin.com/in/prasad-shelar-713b18185/"
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
    '🥾 I love trekking - nothing beats the thrill of a good trail!',
    '🧊 Cold coffee is my go-to fuel.',
    '👨‍🏫 Mentoring is something I genuinely enjoy - sharing knowledge and helping others grow.',
    '🎬 Lately, I’ve been hooked on editing reels - it’s my new creative outlet!',
    '🚚 I’m fond of monster truck toys - they’re just too cool to resist!'
  ],
  certifications: [
    { name: "ServiceNow CIS - Discovery", year: 2025, url: "", img: "/CIS-Discovery.jpeg" },
    { name: "ServiceNow Certified Application Developer", year: 2023 , url: "", img: "/Servicenow_CAD.jpg" },
    { name: "ServiceNow CIS – ITSM", year: 2023, img:"/CIS_ITSM_Prasad.jpeg"},
    { name: "ITIL Foundation v4 Certificate in ITSM", year: 2020, img:"/ITIL_V4_Foundation.png" },
    { name: "ServiceNow System Administrator (CSA)", year: 2021, img:"/ServiceNow_CSA_Prasad Shelar.jpg" },
    { name: "Micro Certification – Introduction to App Engine Studio", year: 2022, img:"/Micro-Introduction_to_App_Engine_Studio.png"},
    { name: "Micro-Certification – Integration Hub", year: 2021, img:"/Micro-IntegrationHub.png" },
    { name: "Micro-Certification - Flow Designer", year: 2021, img:"/Micro-FlowDesigner.png" },
    { name: "Javascript Algorithms & DataStructure @freeCodeCamp", year: 2021, img:"/Javascript_Algorithms_and_DataStructure_freeCodeCamp.PNG" },
    { name: "Advanced JavaScript Certificate", year: 2021, img:"/Advance-javascript_Prasad_Shelar.jpg" }
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
    {
      "name": "ICT CMDB & Asset Management Implementation at AirTrunk",
      "img": "/AirTrunk.JPG",
      "tech": [ 
        "ITOM",
        "CMDB",
        "Integration",
        "Asset Lifecycle",
        "Microsoft Intune"
      ],
      "desc": "Designed a ServiceNow CMDB and asset management solution integrated with Microsoft Intune for streamlined ICT operations across APAC.",
      "details": "Delivered a centralized CMDB and asset lifecycle system for AirTrunk, integrating MS Intune for automated device onboarding. Supported multi-location operations with dashboards for compliance and configuration tracking. Included training, stakeholder engagement, and phased rollout for successful adoption.",
      "company":"Deloitte India",
      "client": "AirTrunk",
      "video":""
  },
   {
      "name": "ITSM & ITAM Integration",
      "img": "/AP+.JPG",
      "tech": [
        "ServiceNow", 
        "ITSM",
        "ITAM",
        "ESP Portal",
        "CSM Portal",
        "Integration",
        "Plaid",
        "ACHWorks"
      ],
      "desc": "Orchestrated a robust ITSM and ITAM integration for finance, streamlining compliance, asset management, and payment workflows.",
      "details": "This project delivered end-to-end ITSM solutions for Australian Payment Plus, optimizing Incident, Change, Problem, and Knowledge Management while deploying strategic plugins to boost operational efficiency. Payment workflows and regulatory compliance were advanced by integrating Plaid for customer finance information and ACHWorks for seamless transaction processing. ITAM features included custom asset reporting, contract management, multicurrency handling, and a tailored ESP portal with extended tables and Software Asset Workspace customization - driving value for finance operations.",
      "company":"Deloitte India",
      "client": "Australian Payment Plus",
      "video":""
  },
  {
    "name": "Ministry of External Affairs Digital Platform",
    "img": "https://imagesunsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "tech": [
      "Multilingual Service Portal",
      "Google Cloud Translator Integration",
      "Now Assist",
      "Public Sector"
    ],
    "desc": "Developed a multilingual, public sector platform with chatbot, agent workspace, and PDF integration for ministry services.",
    "details": "Engineered the Ministry of External Affairs application, closely mirroring the official Indian ministry website, featuring a user registration page, an intelligent chatbot, agent workspace, and a record producer for streamlined processes. The platform seamlessly integrates Google Cloud for translations, delivering a fully multilingual experience, and supports PDF handling for documentation—enabling efficient citizen engagement and service management for public sector needs.",
    "company": "Deloitte India",
    "client": "Internal"
  },
  {
    "name": "Future Workspace(FWS): Vaccination Tracker",
    "img": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    "tech": [
      "Service Portal",
      "Reporting",
      "Email Notifications",
      "Data Migration",
      "Scripting"
    ],
    "desc": "Built a global vaccination management portal for Genpact, automating employee status tracking and reporting.",
    "details": "Led development of a comprehensive Service Portal application to monitor and manage worldwide Genpact employee vaccination status. The solution utilizes ServiceNow modules for automated reporting, real-time email notifications, streamlined data loading, and delegated actions - ensuring centralized data management, compliance tracking, and responsive communication for large enterprises.",
    "company": "Deloitte India",
    "client": "Genpact India"
  },
  {
    "name": "Delivery Health Dashboard(ADH)",
    "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "tech": [
      "Service Portal",
      "Reporting",
      "Delegation",
      "Email Notifications",
      "Data Migration",
      "Scripting"
    ],
    "desc": "Created a dynamic dashboard for global application delivery health monitoring, enhancing visibility and stakeholder reporting.",
    "details": "This project focused on designing a user-friendly application delivery health dashboard, empowering Genpact India to visualize project KPIs and distribution. Key features included automated report generation, real-time email alerts, flexible data management, and delegated access - leveraging ServiceNow’s robust modules for improved project health monitoring and communication.",
    "company": "Deloitte India",
    "client": "Genpact India"
  },
  {
    "name": "Project Portfolio Management Suite",
    "img": "/PPM.JPG",
    "tech": [
      "ServiceNow",
      "PPM Implementation"
    ],
    "desc": "Implemented ServiceNow PPM for large-scale portfolio, resource, and cost tracking tailored to Genpact\u2019s innovation needs.",
    "details": "Spearheaded the deployment and enhancement of ServiceNow’s Project Portfolio Management (PPM) module for Genpact India, driving advanced resource allocation, cost and demand management, innovation tracking, timecard management, and fiscal calendar integration. This solution enabled holistic portfolio oversight and data-driven decision making, improving project success rates and operational transparency for enterprise clients.",
    "company": "Deloitte India",
    "client": "Genpact India"
  },
  {
    "name": "FCI: Future Cloud Infrastructure",
    "img": "/FCI.JPG",
    "tech": [
      "Cloud Automation",
      "Service Catalog",
      "CMDB",
      "Workflow Automation",
      "REST Integration"
    ],
    "desc": "Empowered enterprises to streamline access to cloud services with an automated, integrated Service Catalog.",
    "details": "FCI reimagines cloud service accessibility for modern businesses by delivering a comprehensive service catalog that allows users to provision and manage cloud services with ease. As solution owner for the Managed SDDC product line, responsibilities included integration of ServiceNow with platforms like VMware using scripted REST APIs, and automating catalog items through robust workflows. Daily stakeholder engagement ensured delivery of high-quality products tailored to client needs, driving innovation and reliability.",
    "company": "T-Systems India",
    "client": "FCI"
  },
  {
    "name": "LegacyIT",
    "img": "/LegacyIT.JPG",
    "tech": [
      "Network Services",
      "Remedy Integration",
      "CMDB",
      "Workflow Automation",
      "Service Catalog"
    ],
    "desc": "Optimized network and security provisioning with a customized, client-driven service catalog and seamless Remedy integration.",
    "details": "LegacyIT Modernization Suite transformed legacy networks by offering a user-friendly service catalog for simplified access to network and security solutions. Extensive customization through UI policies, actions, and scripts enabled tailored catalog experiences, while advanced ILOR mapping guaranteed secure, accurate data transfer to BMC Remedy for fulfillment. The result was faster, error-free request handling and improved end-user satisfaction.",
    "company": "T-Systems India",
    "client": "LegacyIT"
  },
  {
    "name": "Automobile Enabler Application",
    "img": "/AutomobileEnabler.JPG",
    "tech": [
      "Automobile",
      "CMDB",
      "Client Scripting",
      "Incident Management"
    ],
    "desc": "Developed an end-to-end ITSM extension for the automobile sector, improving incident management and customer support.",
    "details": "This application delivers a seamless ITSM experience tailored for the automobile industry, addressing post-service customer needs by customizing the incident module and streamlining ticket categorization and assignment with advanced client scripting. Comprehensive documentation and ongoing process improvements ensured robust support and transparency throughout the application lifecycle.",
    "company": "T-Systems India",

  },
  {
    "name": "BAT - Regional Service Catalog",
    "img": "/BAT.JPG",
    "tech": [
      "Service Catalog",
      "CMDB",
      "Workflow Automation",
      "Asset Lifecycle"
    ],
    "desc": "Unified global service catalog for British American Tobacco, supporting multi-region operations and asset lifecycle management.",
    "details": "BAT’s Regional Service Catalog empowers users across multiple international hubs such as Frankfurt and Houston by providing install, change, and dispose service types through intuitive catalog items. Leveraged CMDB integration for streamlined service tracking, efficient import processes, and complete product management - resulting in enhanced operational efficiency and centralized oversight.",
    "company": "T-Systems India",
    "client": "BAT"
  },
  {
    "name": "ISP: Internal Service Portal for T-Systems",
    "img": "/ISP.JPG",
    "tech": [
      "Workflow Automation",
      "CMDB",
      "Access Management",
      "Service Catalog"
    ],
    "desc": "Engineered a scalable portal for T-Systems, advancing access management and master data automation.",
    "details": "ISP revolutionized internal workflows at T-Systems by launching a robust service portal focused on Access Management and Master Data Management. Its dynamic flow designer automates request fulfillment, while customized email notifications enable real-time updates for stakeholders, driving greater transparency and faster response times.",
    "company": "T-Systems India",
    "client": "Internal"
  }
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
    { date: '2019', title: 'Joined T-systems India', icon: '💼', description: 'Career change: Joined T-systems India as an Associate Consultant, specializing in ServiceNow ITSM, Integrations.' },
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
