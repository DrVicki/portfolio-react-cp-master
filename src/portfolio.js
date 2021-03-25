/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Dev-Vicki",
  title: "Hi all, I'm Vicki",
  subTitle: emoji(
    "Vicki Bealman, Course Director at Full Sail University & Full-Stack Instructor at DigitalCrafts, is a passionate developer & educator who partners with CEOs, executives, and industry specialists to develop web applications and web sites, plus real-world educational experiences for 21st century learners.Vicki holds an EdD in Educational Leadership, EdS in Educational Leadership, MS in Accounting and Information Technology, BS in Accounting and Information Technology from Liberty University, and a MS in Mobile Gaming from Full Sail University."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_G-B1eecbgMBspjVofjs5j-z1vDPejGZ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DrVicki",
  linkedin: "https://www.linkedin.com/in/dr-vicki-bealman/",
  gmail: "drvicki.bealman@gmail.com",
  twitter: 'https://twitter.com/Vbealman1',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE & TEACH EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop & Teach highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Develop & Teach Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Develop & Teach Integration of third party services such as Firebase/ AWS / Digital Ocean / MongoDB / PostgreSql"
    ),
    emoji(
      "⚡ Develop Full Stack Curriculum & Hands-On learning Activities"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Full Sail University",
      logo: require("./assets/images/fslogo.png"),
      subHeader: "Master of Science Mobile Gaming Engineering",
      duration: "August 2019 - Agust 2020",
    },
    {
      schoolName: "Liberty University",
      logo: require("./assets/images/libertyu.png"),
      subHeader: "Doctor of Education; EdD",
      duration: "May 2011 - May 2013",
    },
    {
      schoolName: "Liberty University",
      logo: require("./assets/images/libertyu.png"),
      subHeader: "Post Graduate Educational Specialist; EdS",
      duration: "September 2010 - May 2011",
    },
    {
      schoolName: "Liberty University",
      logo: require("./assets/images/libertyu.png"),
      subHeader: "Master of Science Accounting & Information Technology",
      duration: "August 2008 - May 2009",
    },
    {
      schoolName: "Liberty University",
      logo: require("./assets/images/libertyu.png"),
      subHeader: "Bachelor of Science Accounting & Information Technology",
      duration: "September 2010 - May 2011",
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],

};

// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Full Stack Bootcamp Instructor",
      company: "DigitalCrafts",
      companylogo: require("./assets/images/digitalcrafts.png"),
      date: "September 2020 – Present",
      desc:
        "We build the web. So can you.",
      descBullets: [
        "Lead a classroom of up to 24 aspiring developers, Tuesday & Thursday evenings 6:30pm-9:30pm & Saturdays 10am-2pm.",
        "Develop and enhance curriculum assets for classroom lectures, lab work, homework assignments, & student projects.",
        "Create tutorials."
      ]
    },
    {
      role: "Business Intelligence Master of Science Course Director",
      company: "Full Sail University",
      companylogo: require("./assets/images/fslogo.png"),
      date: "July 2018 – Present",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.",
      descBullets: [
          "Update curriculum to keep current & relevant industry standards.",
          "Create learning activities, including assignments, projects, quizzes & labs, and assess student outcomes in a timely manner through effective assessment & constructive feedback to students to support the learning process.",
          "Hold scheduled virtual course meetings for online courses."
        ]
    },
    {
      role: "Webmaster & Web Developer",
      company: "Website-Rx.com",
      companylogo: require("./assets/images/websiterx.png"),
      date: "February 2011 – December 2018",
      desc:
        "The prescription for your online presence.",
        descBullets: [
          "Founding Director.",
          "Management of eCommerce, Programming, Internet Security, email Server Experience, Interactive Page Development, Web Forms, Interactive Databases, Encrypted Data Access, & Data Security.",
          "Train interns & developers."
        ]
    },
    {
      role: "Instructional Designer",
      company: "University of Florida",
      companylogo: require("./assets/images/uf.jpeg"),
      date: "August 2017 – December 2018",
      desc:
        "Center for Online Innovation & Production",
        descBullets: [
          "Perform skilled pedagogical & technical work involvingcourse design, course management, & additional online teaching tools.",
          "Support instructors indesigning courses following industry standards & best practices of instructional design.",
          "Utilize principles of adult learning, learner-centered teaching, & diverse instructional approaches to design new & redesign existing courses in Canvas."
        ]
    },
    {
      role: "Director & Lead Instructor",
      company: "TVCS Computer Science Academy",
      companylogo: require("./assets/images/tvcs.png"),
      date: "February 2015 – August 2017",
      desc:
        "Implemented Universal Design for Learning (UDL) with Assistive Technologies.",
        descBullets: [
          "Developed interactive lessons for AP Computer Science, Programming Essentials,Web Development, and Database Essentials.",
          "Achieved excellent student approval and peer reviews on evaluations.",
          "Developed curriculum for Java, HTML5, CSS3, JavaScript, SQL, and Python."
        ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(352) 571 0432",
  email_address: "contact@davidrakosi.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
