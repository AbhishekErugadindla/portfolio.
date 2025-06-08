import i from '../images/Screenshot 2023-11-23 185214.png'
import cbit from '../images/cbit.jpeg'
import sri from '../images/sri.jpeg'
import gapLogo from '../images/gapLogo.jpg'
import self from '../images/self.png'
import img from '../images/image.png'



export const Bio = {
  name: "Abhishek Erugadindla",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/AbhishekErugadindla",
  resume:
    "https://drive.google.com/file/d/1NeNcsIej17005Vj4wd1tvgGpNHmp6oPs/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/abhishek-erugadindla/",
  insta: "https://www.instagram.com/nameisabhiiii/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
    
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      },
      
      {
        name: "Node.js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "REST APIs",
        image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      },
    ],
  },  

  {
    title: "Others",
    skills: [
    
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
   
      
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
     
     
    
    ],
  },
];

export const experiences = [
  {
    id: 4,
    img: gapLogo, // replace with actual GAP Inc. logo import or URL
    role: "Software Engineer Intern",
    company: "GAP Inc.",
    date: "July 2024 – August 2024",
    desc: "Worked on the hiring automation backend system using Spring Boot and WebFlux. Built scalable dashboards including Stores and Activity Log modules, integrated date-range filtering, and implemented unit and integration tests using JUnit and Cucumber.",
    skills: [
      "Spring Boot",
      "Java",
      "Spring WebFlux",
      "REST API",
      "JUnit",
      "Cucumber",
      "Azure SQL",
      "R2DBC"
    ],
    doc: "", // replace with the actual document/image import or URL
  },
];


export const education = [
  {
    id: 0,
    img:cbit,
    school: "Chaitanya Bharathi Institute Of Technology,Hyderabad",
    date: "Oct 2021 - May 2025",
    grade: "9.45 CGPA",
    desc: "I hold a Bachelor's degree in Information Technology from Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, where I graduated in 2025 with a strong academic record and hands-on experience in software development, backend systems, and full-stack projects.",
    degree: "Bachelor in Engineering - BE,Information Technology",
  },
  {
    id: 1,
    img: sri,
    school: "Sri Chaitanya Junior College, Hyderabad",
    date: "Apr 2019 - Apr 2021",
    grade: "98.2%",
    desc: "I completed my Intermediate at Sri Chaitanya Junior College,Hyderabad, where I studied MPC(Maths,Physics,Chemistry).",
    degree: "TSBIE(XII), MPC",
  },
  
];

export const projects = [
  {
    id: 11,
    title: "Self-Reporting Website",
    date: "Jan 2024 – Apr 2024",
    description:
      "Built a comprehensive self-reporting website for certificate verification using the MERN stack. Developed a user-friendly interface to streamline administrative tasks, reduce unauthorized access, and allow students to input information, upload certificates, and schedule appointments.",
    image: self, // replace with actual project image if available
    tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
    category: "web app",
    github: "https://github.com/AbhishekErugadindla/cbitSelfReportWeb-stage2", // update with actual project repo if separate
    webapp: "https://github.com/AbhishekErugadindla/cbitSelfReportWeb-stage2", // update with actual deployment link
  },
  {
    id: 12,
    title: "News Aggregator Web Application",
    date: "Jun 2023 – Aug 2023",
    description:
      "Curated a diverse collection of news articles across multiple categories, offering users a centralized platform for up-to-date information. Integrated social media sharing functionality to increase content reach and user engagement.",
    image: i,
    tags: ["React.js", "Express.js", "Node.js"],
    category: "web app",
    github: "https://github.com/AbhishekErugadindla/newsaggregatorWeb",
    webapp: "https://github.com/AbhishekErugadindla/newsaggregatorWeb",
  },
  {
    id: 13,
    title: "AI-Based Email Reply Generator",
    date: "Dec 2024 – Apr 2025",
    description:
      "Developed a full-stack web app using Spring Boot and REST APIs to generate contextual email replies with Gemini API. Built a Chrome extension in JavaScript and HTML that integrates into Gmail UI, enabling an 'AI Reply' button for real-time smart response generation.",
    image: img,
    tags: ["Spring Boot", "JavaScript", "Gemini API", "REST API", "Chrome Extension", "HTML"],
    category: "web app",
    github: "https://github.com/AbhishekErugadindla/AI-Based-Email-Reply-Generator", // update with actual project repo if available
    webapp: "https://github.com/AbhishekErugadindla/AI-Based-Email-Reply-Generator", // update with actual deployment link
  },
];