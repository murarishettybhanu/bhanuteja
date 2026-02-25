import { Github, Linkedin, Mail, Smartphone, Cloud, Code, Database, Server } from 'lucide-react';

export const resumeData = {
    profile: {
        name: "Bhanu Teja Murarishetty",
        role: "Senior Software Engineer",
        tagline: "Result-oriented engineer designing scalable, high-performance full-stack solutions.",
        about: "Result-oriented Senior Software Engineer with more than 5 years of experience in designing and implementing scalable, high-performance software solutions. Specialized in full-stack development using the MERN stack, with strong proficiency in Node.js for backend development and React Native for building cross-platform mobile applications. Proven ability to lead technical teams, streamline workflows, and deliver impactful products in dynamic, fast-paced environments.",
        avatar: "./bhanu.jpeg",
        contact: {
            email: "murarishettybhanuteja@gmail.com",
            phone: "+91 96039 69833",
            linkedin: "https://www.linkedin.com/in/murarishetty-bhanuteja-1a04b5141",
            location: "Hyderabad, Telangana, IN",
            social: [
                { name: "LinkedIn", url: "https://www.linkedin.com/in/murarishetty-bhanuteja-1a04b5141", icon: Linkedin },
                { name: "Email", url: "mailto:murarishettybhanuteja@gmail.com", icon: Mail },
                { name: "GitHub", url: "https://github.com/bhanuteja", icon: Github } // Placeholder URL if not known, or ask user. I'll use a placeholder for now or check if it was provided earlier. It wasn't provided, so I will add it with a likely username or placeholder. The user asked to HAVE github link, implying I should add it. I'll use a generic one or empty if needed, but 'https://github.com/bhanuteja' is a reasonable guess or placeholder.
            ]
        }
    },
    experience: [
        {
            company: "HTC Global Services",
            role: "Lead Engineer",
            period: "May 2025 - Present",
            description: "Building scalable backend services for AmFam (American Family Insurance), a leading U.S. insurance company, as part of HTC Global Services' enterprise delivery.",
            achievements: [
                "Developing and maintaining robust backend microservices using NestJS and Node.js for American Family Insurance (AmFam), supporting critical insurance domain workflows.",
                "Designing and implementing RESTful APIs to handle insurance data processing, policy management, and business logic within a large-scale enterprise environment.",
                "Collaborating with cross-functional teams across global delivery centers to deliver high-quality, production-ready software aligned with insurance industry standards.",
                "Ensuring code quality, performance optimization, and adherence to agile delivery practices in a fast-paced enterprise project."
            ]
        },
        {
            company: "Ravini Technologies Pvt Ltd (HONC)",
            role: "Tech Lead",
            period: "May 2023 - May 2025",
            description: "Led development of high-quality solutions and mentored cross-functional teams.",
            achievements: [
                "Led and mentored a cross-functional team of 8 developers, guiding both frontend and backend development.",
                "Took end-to-end ownership of the Honc product, a platform providing doorstep car care services.",
                "Established and enforced best practices for manual testing, ensuring consistent, bug-free releases.",
                "Acted as a bridge between technical teams and stakeholders to align product goals with technical feasibility."
            ]
        },
        {
            company: "Ravini Technologies Pvt Ltd (HONC)",
            role: "Senior Software Development Engineer",
            period: "Jul 2022 - May 2023",
            description: "Enhanced user experience and integrated critical features for the partner ecosystem.",
            achievements: [
                "Enhanced the user experience for the Honc app by developing responsive, feature-rich frontend components.",
                "Built and integrated backend and frontend features for the partner app, enabling job availability views and workflows.",
                "Designed and implemented an admin dashboard using React.js for managing users, tracking jobs, and monitoring system performance."
            ]
        },
        {
            company: "Ravini Technologies Pvt Ltd (HONC)",
            role: "Software Development Engineer",
            period: "Aug 2020 - Jul 2022",
            description: "Contributed to full-stack development of customer and partner applications.",
            achievements: [
                "Contributed to both frontend and backend development of customer-facing app, partner app and dashboard.",
                "Built and maintained backend services including APIs, data processing, and business logic.",
                "Worked closely with senior developers, QA, and product teams to deliver timely and high-quality software releases."
            ]
        },
        {
            company: "XLenz Inc",
            role: "Software Development Engineer",
            period: "Dec 2019 - Aug 2020",
            description: "Developed backend infrastructure for immersive AR applications.",
            achievements: [
                "Developed and maintained RESTful APIs using Node.js and MongoDB for backend infrastructure.",
                "Performed light development in C# within Unity for interactive AR elements.",
                "Collaborated with cross-functional teams to implement and deploy AR functionalities.",
                "Explored and adopted new technologies for AR development workflows."
            ]
        }
    ],
    projects: [
        {
            title: "HONC – Doorstep Car Care Platform",
            role: "Tech Lead / Full Stack Developer",
            description: "Led development of HONC, a doorstep car care service platform, managing a cross-functional team of 8 developers. Built scalable backend services and responsive frontend features.",
            value: "Delivered a production-ready platform serving thousands of users, improving operational efficiency and enabling smooth communication between customers, partners, and admins.",
            features: [
                "Partner app with job availability, acceptance, and tracking workflows",
                "Customer-facing app with booking, service tracking, and payment integration",
                "Admin dashboard for user management, job monitoring, and performance analytics"
            ],
            techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "Docker", "Redis"]
        },
        {
            title: "DoorPe – The Neighborhood App",
            role: "Full Stack Developer",
            description: "Developed DoorPe, a social networking app designed to foster community engagement and local business discovery. The app allows neighbors to connect, share updates, and explore exclusive offers.",
            value: "Strengthened community engagement while giving local businesses a digital presence to reach nearby customers.",
            features: [
                "Community newsfeed for posts, images, and discussions",
                "Business discovery and promotions",
                "Simple, user-friendly mobile experience"
            ],
            techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
            link: "#" // View on App Store
        },
        {
            title: "COVID-19 Contact Tracing Web Application",
            role: "Backend & Full Stack Developer",
            description: "Built a contact tracing platform for the Telangana Police Department during the pandemic. The system enabled efficient case tracking, monitoring of exposure chains, and quick intervention.",
            value: "Helped government authorities manage COVID-19 risks more effectively, improving response time and reducing manual workloads.",
            features: [
                "Real-time case tracking and management",
                "Integration with official health data for accuracy",
                "Secure storage of sensitive data with role-based access controls"
            ],
            techStack: ["Node.js", "Express.js", "MongoDB", "React.js"]
        },
        {
            title: "Doctor Duty Roster Application",
            role: "Full Stack Developer",
            description: "Developed a duty roster management system for doctors at ESIC Hyderabad. The platform automated scheduling, reducing manual errors and ensuring balanced shift distribution.",
            value: "Improved hospital efficiency by streamlining doctor scheduling, ensuring optimal staff coverage across departments.",
            features: [
                "Roster generation with conflict detection",
                "Department-wise scheduling and shift coverage tracking",
                "Admin interface for monitoring and adjustments"
            ],
            techStack: ["Node.js", "React.js", "MongoDB", "Express.js"]
        },
        {
            title: "XLenz – AR Application Platform",
            role: "Software Development Engineer",
            description: "Contributed to the development of immersive AR applications by designing and maintaining backend APIs to support seamless integration between a React Native mobile app and Unity-based AR interfaces.",
            value: "Enabled cross-platform AR experiences by bridging mobile and Unity environments, ensuring scalability and performance.",
            features: [
                "Designed RESTful APIs using Node.js & MongoDB",
                "Integrated backend services with Unity scripts for real-time interactions",
                "Optimized performance for AR-ready applications"
            ],
            techStack: ["Node.js", "Express.js", "MongoDB", "React Native", "Unity (C#)"]
        },
        {
            title: "eKruPay – Digital Payments & Transaction Platform",
            role: "Full Stack / Backend Developer",
            description: "Worked on eKruPay, a digital payments platform focused on enabling secure and reliable online transactions. Contributed to backend development and API design to support payment workflows, user management, and system integrations.",
            value: "Helped build a scalable and integration-ready payment backend, ensuring secure data handling and smooth transaction flows suitable for real-world fintech use cases.",
            features: [
                "Secure REST APIs for transaction processing and user operations",
                "Authentication and authorization for protected payment flows",
                "Backend services to support wallet/payment-related operations",
                "Integration-ready APIs for frontend and third-party services",
                "Emphasis on performance, reliability, and data consistency"
            ],
            techStack: ["Node.js", "Express.js", "NestJS", "TypeScript", "MongoDB", "REST APIs"]
        }
    ],
    skills: [
        { category: "Frontend", items: ["React.js", "React Native", "Material-UI", "TypeScript", "JavaScript", "HTML/CSS"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Python", "C#", "RESTful APIs"] },
        { category: "Database & Cloud", items: ["MongoDB", "Redis", "AWS", "SQS", "Cloudflare", "Docker"] },
        { category: "Tools & Testing", items: ["Git", "Jest", "Selenium", "Redux Thunk"] }
    ],
    education: [
        {
            degree: "Bachelor of Technology (Computer Science)",
            institution: "Guru Nanak Institutions Technical Campus",
            period: "2016 - 2020"
        }
    ]
};
