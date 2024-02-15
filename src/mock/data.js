import { nanoid } from 'nanoid';

export const headData = {
  title: 'Rabiel.dev',
  lang: 'en',
  description: 'Rabie LAKHDAR, React, react native casablanca developer',
};

export const heroData = {
  title: "Hi, I'm",
  name: ' Rabie LAKHDAR',
  subtitle: 'Full stack JS Engineer 🧞',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I've been working on both frontend and backend projects since the beginning of my career with popular clients in Morocco, so I know how to convert your needs into released solution.",
  paragraphTwo:
  'I have experience building applications with React, React Native & NodeJS. The last few years have been spent learning how to build decentralized applications based on Ethereum, also using web3 libraries.',
  paragraphThree: '#reactjs #reactnative #nodejs',
  resume: true,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'saham.png',
    height: '250px',
    width: '250px',
    title: 'SAHAM Insurance Morocco',
    info: 'new version of the SAHAM Insurance mobile application, including many practical services and innovative features',
    info2: 'you can find more details of store',
    url: 'https://play.google.com/store/apps/details?id=ma.tnc.sahamassurance&gl=MA',
  },
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
    img: 'bp.jpeg',
    height: '250px',
    width: '250px',
    title: 'Banque Centrale Populaire - BCP',
    info: 'Work of products Insurance features with BCP environnement, more details its confidence ',
    info2: null,
    url: 'https://bpnet.gbp.ma',
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
