import { nanoid } from 'nanoid';

export const headData = {
  title: 'Rabiel.dev',
  lang: 'en',
  description: 'Rabie LAKHDAR, React, react native casablanca developer',
};

export const heroData = {
  title: "Hi, I'm",
  name: 'Rabie LAKHDAR',
  subtitle: 'Full stack JS Engineer',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Rabie LAKHDAR 27 yo, Living in Casablanca, Have Software Engineer Diploma on university Suptechnology, Bachelor degree of Development Internet and Mobile from University Littoral Côte d'Opale (ULCO) and Master Degree of software engineering from University Pays de l'adour PAU (UPPA).",
  paragraphTwo:
    'About pro rating, I have 5 years of experience in Full stack JS Engineer (ReactJs, React native, NodeJs, GraphQL) with different clients in France, Morocco, Saudi Arabia, Italia and Czech. And I’m Curious, passionate about new technologies and always eager to learn and share knowledge in the field of programming.',
  paragraphThree: '#reactjs #reactnative #nodejs',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'enzym.png',
    height: '250px',
    width: '250px',
    title: 'Enzym - play & meet new people',
    info: 'ENZYM is a Social Interactions Booster embedded in the real world. It allows you to meet players spontaneously, chat with them and quickly earn gift coupons.',
    info2:
      '"Enzymes have the mission of accelerating chemical reactions millions of times in living organisms"',
    url: 'https://play.google.com/store/apps/details?id=io.enzym.app&hl=en',
  },
  {
    id: nanoid(),
    img: 'tlmam.png',
    height: '250px',
    width: '250px',
    title: 'TLMAM Social Service',
    info: 'TLMAM its first Mobile App on North Africa for social and finance services, let maghreb citizen to make active income with many investments',
    info2: 'this app allowed for all citizen North Africa',
    url: 'https://tlmam.com',
  },
  {
    id: nanoid(),
    img: 'teeela.png',
    height: '250px',
    width: '250px',
    title: 'Teeela',
    info: 'Teeela is a leading app for online toys shopping in GCC where you shop through a wide range of toys from different brands and categories. Discover new and exclusive toys for kids on Teeela.',
    info2:
      'Teeela Toys makes it easier than ever to offer the gift your children most wants. Enjoy the exclusive offers and get to know the toys that perfectly fit your kids’s interest.',
    url: 'https://play.google.com/store/apps/details?id=com.teeelamob&hl=en',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'We can create your next experience together.',
  btn: "Let's Talk",
  email: 'hello@rabiel.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RabieLakhdar',
    },
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/rabieLakhdar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rabie-lakhdar/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/rabiel.dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
