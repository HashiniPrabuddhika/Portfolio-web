import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  frontend,
  fullStack,
  mobileAp,
  
  Ayurvedic,
  mobileApp,
  wineQuality,
  POS,
  supermarket,
  chatAPP,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "projectworks",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Quality Assurance",
    icon: backend,
  },
  {
    title: "Mobile App DeVeloper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Supermarket Application with Location-Based Service",
    icon: frontend,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including client, product manager, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Staying up-to-date with emerging trends and technologies in frontend development.",
    ],
  },
  {
    title: "Mobile APP Developer",
    company_name: "Blood Donation Mobile Application",
    icon: mobileAp,
    iconBg: "#E6DEDD",
    date: "Dec 2023- Feb 2024",
    points: [
      "Developing and maintaining high-quality mobile applications for Android platforms",
      "Collaborating with cross-functional team to create high-quality products.",
      "Implementing user interfaces that are both functional and visually appealing, adhering to design guidelines and standards.",
      "Optimizing the mobile application for performance, scalability, and security.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Ayurvedic online recipes and store web Application",
    icon: fullStack,
    iconBg: "#E6DEDD",
    date: " Oct 2023- Nov 2023",
    points: [
      "Developing and maintaining both frontend and backend components of web applications using MERN and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Practical experience in databases and version control systems like Git",
    ],
  },
  
];

const projects = [
  {
    name: "Ayurvedic online recipes and store web Application",
    description:[
      " This is an individual web application project that is showcasing Ayurvedic products and recipes." ,
      "The platform allows users to explore detailed recipes for various treatments and add products to their cart for purchase.",
      " It combines a comprehensive display of Ayurvedic solutions with user-friendly navigation, enhancing online shopping and improving knowledge of Ayurvedic recipes for users.",
    ],
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: Ayurvedic,
    source_code_link: "https://github.com/HashiniPrabuddhika/Ayurvedic-online-recipes-and-store-web-Application",
  },
  {
    name: "Blood Donation Mobile Application",
    description:[
      " This mobile application facilitates the connection between patients needing blood and potential donors.",
      " The app matches patients with suitable donors based on location, ensuring timely access to blood transfusions.",
      "Additionally, it supports donor engagement through participation in various donation campaigns, enhancing community impact.",
    ],
    tags: [
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
    ],
    image: mobileApp,
    source_code_link: "https://github.com/HashiniPrabuddhika/Blood-Donation-Mobile-Application",
  },
  {
    name: "Wine Quality Prediction",
    description:[
      "This is a machine learning project to predict wine quality using Decision Tree and Logistic Regression algorithms.",
      "Achieved an accuracy of 92% with Decision Tree and 84% with Logistic Regression. The project involved thorough",
      "testing of the Decision Tree algorithm, which demonstrated the highest accuracy, to validate its effectiveness in",
      "predicting wine quality",
    ],
    tags: [
      {
        name: " Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Jupyter Notebooks",
        color: "pink-text-gradient",
      },
    ],
    image: wineQuality,
    source_code_link: "https://github.com/HashiniPrabuddhika/Wine_Quality_Prediction-Machine-Learning-Project",
  },
  {
    name: "POS System",
    description:[
      " The Point of Sale System is a user-friendly application developed using WPF (Windows Presentation Foundation) and",
      "C#. The application features an efficient and intuitive interface for managing sales, product management, and user roles",
      "streamlining operations for commercial environments.",
    ],
    tags: [
      {
        name: " ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
      {
        name: " SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: POS,
    source_code_link: "https://github.com/HashiniPrabuddhika/Point-of-Sale-System-Desktop-Application",
  },
  {
    name: "Supermarket Application with Location-Based Service",
    description:[
      "LuxeMart Supermarket Application is a group project with web and mobile applications with user-friendly interfaces",
      "and diverse functionalities. The Android app sends text alerts to nearby customers about ongoing sales. Both the web",
      "and mobile applications provide features such as viewing ongoing sales, product prices, categorized product details,",
      "smooth navigation, and add-to-cart and add-to-favorites functions.",
    ],
    tags: [
      {
        name: " Node.js",
        color: "blue-text-gradient",
      },
      {
        name: " Jira",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: " Flutter",
        color: "blue-text-gradient",
      },
      {
        name: " Firebase",
        color: "green-text-gradient",
      },
      {
        name: " Cloud Firestore",
        color: "pink-text-gradient",
      },
    ],
    image: supermarket,
    source_code_link: "https://github.com/SuperMarket-Project",
  },
  {
    name: " Chat Application System",
    description:[
      " The network programming application for group chat communication using sockets. Implemented with threads and a",
      "GUI interface to enable efficient and seamless real-time communication among users.",
      
    ],
    tags: [
      {
        name: "  Java",
        color: "blue-text-gradient",
      },
      {
        name: " Threads",
        color: "green-text-gradient",
      },
      {
        name: "  Eclipse",
        color: "pink-text-gradient",
      },
    ],
    image: chatAPP,
    source_code_link: "https://github.com/HashiniPrabuddhika/Group-Chat-Application-With-Socket",
  },
];


export { services,experiences,technologies,projects };

