/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Kumar",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A tech builder pursuing IDD in Computer Science & AI at RGIPT. I transform complex challenges into robust, scalable solutions—from competitive coding to architecting full-stack applications and exploring AI. With strong analytical skills and a passion for innovation, I turn ideas into reality."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zcR_a30BCCdHkz77Uz0siAzvyfgJIecv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aditya-kumar-856959298/",
  github: "https://github.com/jarvisxys",
  gmail: "adisingh8071@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// const skillsSection = {
//   title: "What I do",
//   subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
//   skills: [
//     emoji(
//       "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
//     ),
//     emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
//     emoji(
//       "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
//     )
//   ],

//   /* Make Sure to include correct Font Awesome Classname to view your icon
// https://fontawesome.com/icons?d=gallery */

//   softwareSkills: [
//     {
//       skillName: "html-5",
//       fontAwesomeClassname: "fab fa-html5"
//     },
//     {
//       skillName: "css3",
//       fontAwesomeClassname: "fab fa-css3-alt"
//     },
//     {
//       skillName: "sass",
//       fontAwesomeClassname: "fab fa-sass"
//     },
//     {
//       skillName: "JavaScript",
//       fontAwesomeClassname: "fab fa-js"
//     },
//     {
//       skillName: "reactjs",
//       fontAwesomeClassname: "fab fa-react"
//     },
//     {
//       skillName: "nodejs",
//       fontAwesomeClassname: "fab fa-node"
//     },
//     {
//       skillName: "swift",
//       fontAwesomeClassname: "fab fa-swift"
//     },
//     {
//       skillName: "npm",
//       fontAwesomeClassname: "fab fa-npm"
//     },
//     {
//       skillName: "sql-database",
//       fontAwesomeClassname: "fas fa-database"
//     },
//     {
//       skillName: "aws",
//       fontAwesomeClassname: "fab fa-aws"
//     },
//     {
//       skillName: "firebase",
//       fontAwesomeClassname: "fas fa-fire"
//     },
//     {
//       skillName: "python",
//       fontAwesomeClassname: "fab fa-python"
//     },
//     {
//       skillName: "docker",
//       fontAwesomeClassname: "fab fa-docker"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };


const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING WITH AI, FULL‑STACK, AND COMPETITIVE PROGRAMMING EDGE",
  skills: [
  <span key="1"><strong>Academic Excellence</strong> – CGPA: <strong>8.95 / 10</strong> · JEE Advanced <strong>top 10%</strong></span>,
  <span key="2"><strong>Competitive Programming</strong> – CodeChef <strong>3‑star</strong> (peak rating <strong>1600+</strong>)</span>,
  <span key="3"><strong>Data Structures & Algorithms</strong> – <strong>300+</strong> problems solved across platforms · Strong analytical foundation</span>
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
     https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fab fa-react" }, // Next.js often uses same icon
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" }, // Lightning bolt for API
    { skillName: "TensorFlow", fontAwesomeClassname: "fab fa-tensorflow" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" }
  ],

  display: true // Set false to hide this section, defaults to true
};


// Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Rajiv Gandhi Institute of Petroleum Technology",
//       logo: require("./assets/images/RGIPTLogo.jpeg"),
//       subHeader: "IDD in Computer Science and Artificial Intelligence",
//       duration: "August 2023 - September 2028",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Rajiv Gandhi Institute of Petroleum Technology",
      logo: require("./assets/images/RGIPTLogo.jpeg"), // Replace with actual logo file
      subHeader: "Integrated Dual Degree (IDD) in Computer Science and Artificial Intelligence",
      duration: "August 2023 – Present (Expected 2028)",
      desc: "CGPA: 8.95 / 10",
      descBullets: [
        "Recipient of MCM Scholarship (awarded to top 10% students, 25% tuition waiver)",
        "Coursework: Data Structures, Algorithms, Machine Learning, AI, DBMS, Operating Systems, Web Development",
        "Executive member of Tinkering Club, Science and Technology Council"
      ]
    },
    {
      schoolName: "Adarsh Vikas Vidyalaya Patna",
      logo: require("./assets/images/ADARSHLogo.jpg"), // Replace with actual logo file
      subHeader: "Class XII - CBSE Board",
      duration: "2022",
      desc:"Scored 84% in CBSE Class XII Board Examination.",
      // descBullets: [
      //   "Secured 95% in CBSE examinations",
      //   "Strong foundation in Physics, Chemistry, and Mathematics"
      // ]
    },
    {
      schoolName: "Kendriya Vidyalaya Patna",
      logo: require("./assets/images/kvs-logo.png"), // Replace with actual logo file
      subHeader: "Class X - CBSE Board",
      duration: "2020",
      desc: "Scored 95% in CBSE Class X Board Examination.",
      // descBullets: [
      //   "Achieved 84% in CBSE examinations"
      // ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/RGIPTLogo.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Engineering Projects",
  subtitle:
    "Systems and AI platforms I have designed and built to solve real-world problems.",
  projects: [
    {
      featured: true,
      image: require("./assets/images/apex_white.png"), // swap with apex screenshot later
      projectName: "APEX – Autonomous Crypto Trading System",
      projectDesc:
        "End-to-end algorithmic trading platform with 6 strategies, 12 risk controls, and a live Flask dashboard.",
      techStack: ["Python 3.11", "asyncio", "aiohttp", "WebSockets", "SQLite", "Flask", "NumPy", "pandas"],
      highlights: [
        "Sub-100ms WebSocket feed for 3 symbols × 3 timeframes simultaneously",
        "6 strategies: EMA Crossover, RSI Mean Reversion, Breakout Momentum, VWAP Reversion, Scalp Oscillator, Trend Pullback",
        "12-layer risk engine — 1% per-trade cap, 15% drawdown kill-switch, consecutive-loss limiter",
        "Adaptive Strategy Selector ranks by rolling Sharpe, allocates regime-appropriate strategy per candle",
        "Backtested across 50,000 candles (180 days) of real Binance OHLCV data per symbol",
        "Walk-forward & Monte Carlo validation to verify edge consistency across market regimes",
        "Diagnosed & fixed 3 critical bugs via forensic analysis — eliminated artificial -30% loss floor",
        "14 technical indicators (EMA, MACD, RSI, Bollinger Bands, VWAP, ATR, ADX, StochRSI) built from scratch",
      ],
      stats: [
        {label: "Lines of Code", value: "~5,400"},
        {label: "Trading Strategies", value: "6"},
        {label: "Risk Controls", value: "12"},
        {label: "Candles Backtested", value: "50K+"},
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/jarvisxys/apex-bot"},
        // Uncomment when deployed:
        // {name: "Live Demo", url: "https://apex-bot.com/"},
      ],
    },
    {
      featured: false,
      image: require("./assets/images/Gyanmanch.png"), // swap with gyanmanch screenshot
      projectName: "GyanManch",
      tagline: "AI Quiz Generation Platform",
      projectDesc:
        "Converts documents, images, and topics into structured quizzes with MCQs, time limits, and QR sharing.",
      techStack: ["Python", "React", "FastAPI", "NLP", "OCR", "PDF Processing"],
      highlights: [
        "Multi-input flow: document upload, text paste, topic selection, and image upload",
        "Content-analysis pipeline extracts key concepts and auto-generates MCQs with distractors",
        "Quiz config: time limits, attempt restrictions, passing scores, customizable themes",
        "Sharing features with direct links and QR codes for easy distribution",
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/jarvisxys/Gyaanmunch"},
        {name: "Live Demo", url: "https://gyaanmunch.vercel.app/"},
      ],
    },
    {
      featured: false,
      image: require("./assets/images/Plantaeai.png"), // swap with plantae screenshot
      projectName: "Plantae.AI",
      tagline: "Smart Farming Assistant",
      projectDesc:
        "AI farm assistant with plant disease detection (38 classes), weed classification, and tree crown counting.",
      techStack: ["Next.js (PWA)", "FastAPI", "TensorFlow", "MobileNetV2", "Tailwind CSS", "Docker"],
      highlights: [
        "Trained on 54K+ PlantVillage images; lightweight offline-ready models",
        "Detects 38 disease classes across multiple crop species",
        "Containerized FastAPI inference API optimized for low-latency predictions",
        "Progressive Web App — works offline in low-connectivity agricultural environments",
      ],
      footerLink: [
        {name: "GitHub", url: "https://github.com/jarvisxys/Plantae-AI"},
        {name: "Live Demo", url: "https://plantae-ai.vercel.app/"},
      ],
    },
  ],
  display: true,
};

const researchPapers = {
  display: true,
  papers: [
    {
      image: require("./assets/images/SyncTLC.png"), // add paper thumbnail if you have one
      video: require("./assets/images/SyncTLC 2.mp4"),
      title:
        "SyncTLC: Synchronous Multi-Agent Deep Reinforcement Learning with Arrival Rate Modification for Adaptive Traffic Signal Control in Heterogeneous Indian Urban Networks",
      venue: "Under Review · 2025",
      authors:
        "Aditya Kumar, Himanshu Yadav, Sachin Kumar, Gaurav Kant Nigam, Charu Sharma",
      institution:
        "Rajiv Gandhi Institute of Petroleum Technology, Amethi, India",
      abstract:
        "Proposes SyncTLC, a novel synchronous multi-agent DRL framework for adaptive traffic signal control addressing heterogeneous Indian urban traffic through three key innovations: graph-based network representation, arrival rate modification via speed advisory, and a Traffic Pressure Index (TPI) reward formulation.",
      highlights: [
        "MARDDPG architecture with LSTM networks capturing temporal traffic patterns",
        "Novel Traffic Pressure Index (TPI) — PCE-weighted queue for heterogeneous Indian traffic",
        "Arrival Rate Modification (ARM): proactive speed advisory smooths vehicle arrivals",
        "Graph-based network: each intersection controlled by an independent DRL agent sharing state with neighbors",
        "Validated on SUMO simulator — 40% two-wheelers, lane-splitting modeled",
        "Up to 26% reduction in average queue length vs. fixed-time control",
        "14% reduction in average waiting time vs. state-of-the-art MARDDPG baseline",
      ],
      stats: [
        {label: "Queue Reduction", value: "26%"},
        {label: "Wait Time Reduction", value: "14%"},
        {label: "Intersections", value: "6"},
        {label: "Episodes", value: "2,000"},
      ],
      tags: ["Multi-Agent RL", "Deep RL", "Traffic Signal Control", "LSTM", "SUMO"],
      // ← Add your Google Drive / arXiv PDF link here:
      pdfLink: "https://drive.google.com/file/d/1RGFZkScsaQ8285BzZ5Uaz-eD3zeGTcoX/view?usp=drive_link",
    },
  ],
};





// Achievement Section
// Include certificates, talks etc


const achievementSection = {
  title: emoji("Achievements & Recognitions 🏆"),
  subtitle:
    "Competitive milestones, hackathon finishes, and institute-level honours.",

  achievementsCards: [
    {
      title: "CodeChef 3★ Coder",
      subtitle:
        "Reached a peak rating of 1600 on CodeChef, earning the 3-Star badge through consistent competitive programming.",
      image: require("./assets/images/CodeChef.png"), // ← add your image
      imageAlt: "CodeChef Logo",
      footerLink: [
        // {
        //   name: "CodeChef Profile",
        //   url: "https://www.codechef.com/users/YOUR_USERNAME" // ← update
        // }
      ]
    },
    {
      title: "First Prize — Institute Day (RGIPT)",
      subtitle:
        "Won First Prize in the Model Prototype Display for building a Digital Twin Robotic system.",
      image: require("./assets/images/Prize.png"), // ← add your image
      imageAlt: "RGIPT Logo",
      footerLink: []
    },
    {
      title: "Finalist — Roostoo Web3 Hackathon",
      subtitle:
        "Selected as a finalist in the Roostoo Web3 Trading Bot Hackathon among teams globally.",
      image: require("./assets/images/Roostoo.png"), // ← add your image
      imageAlt: "Roostoo Logo",
      footerLink: [
        // {
        //   name: "Hackathon Info",
        //   url: "" // ← add URL if available
        // }
      ]
    }
  ],

  // ── Certificates ──────────────────────────────────────
  // Each entry: { title, image (require), tag }
  // Clicking a card opens the full-size image in a modal.
  certificates: [
    {
      title: "Python Course",
      image: require("./assets/images/Python.png"), // ← replace
      tag: "Programming"
    },
    // {
    //   title: "Certificate Title 2",
    //   image: require("./assets/images/RGIPTLogo.jpeg"), // ← replace
    //   tag: "Robotics"
    // },
    // {
    //   title: "Certificate Title 3",
    //   image: require("./assets/images/RGIPTLogo.jpeg"), // ← replace
    //   tag: "Web3"
    // }
    // Add more as needed
  ],

  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to new opportunities — actively applying to top firms including JPMorgan Chase. Got a project or an opening? My inbox is always open.",
 
  number: "+91-7201006080",
  email_address: "adisingh8071@gmail.com",
 
  // Your photo — put it at src/assets/images/profile.jpg
  // and update the path below. This is the image that appears
  // in the circular ring on the right side of the contact section.
  profileImage: require("./assets/images/Adi.png"),
  profileName: "Aditya Kumar",
  profileRole: "IDD CS & AI · RGIPT",
 
  isHireable: true,
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  researchPapers,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
