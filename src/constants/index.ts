import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web3 & Web Developer",
    icon: web,
  },
  {
    title: "Smart Contract Specialist Developer",
    icon: mobile,
  },
  {
    title: "Decentralized Backend & API Developer",
    icon: backend,
  },
  {
    title: "Blockchain Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "WEB3 Developer",
    companyName: "STEALTHDATA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "MAR 2014 - DEC 2017",
    points: [
      "Developing and maintaining Staking, Farm, Liquidity smart contracts using Solidity and web applications using React.js & Veu.js.",
      "Built Platform and DB structure for a b2b CRM Portal and Rebuilt Swap Platform UI using Node/React.",
      "Increased customer retention rate by 10% by optimizing sign-in user experience on the front end.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Smart Contract Developer",
    companyName: "Coinweb",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "FEB 2020 - SET 2021",
    points: [
      "Developed smart contracts with Cosmos SDK for gettingblock explorer information through Ethereum, Solana,Waves.",
      "Developed a powerful block explorer using GraphQL, Moralis API.",
      "Coordinated efficient large scale software deployments.",
      "Used AWS/Google Cloud services for user / reward data management.",
      "Updated old code bases to modern development standards, improving functionality.",
    ],
  },
  {
    title: "FULL STACK ENGINEER",
    companyName: "Groth DEFI",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2018 - Jan 2020",
    points: [
      "Built gas-optimized, secure smart contracts, achieved TVL of 20 million as one man startup dev team.",
      "Designed & Developed decentralized applications that are used by thousands of users on daily basis.",
      "Built Smart Contracts on layer 1 Ethereum for implementation of dapp features including staking, lending, games and more.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "A Senior Full Stack Developer",
    companyName: "Sony's BRL",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "DEC 2021 - JAN 2023",
    points: [
      "Designed & Developed Game Engine Backend and Restful APIs for Layer 2 implementation.",
      "Led development department & team for developing customer facing web applications, smart contracts, administrative dashboards and more.",
      "Developed the smart contracts for nfts and utility tokens, marketplace on Ethereum and Solana network.",
      "Optimized database queries to improve application performance and reduce response times by 25%.",
      "Built Agile and DevOps team culture, releasing testable versions everyday and keep everyone in feedback loop.",
      "Successful projects: b2b admin-panel, OX POS desktop and web app.",
      "Achieved 9.5 out of 10 audit score over the written smart contracts(auditor: Hacken).",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
    name: "Grace Williams",
    designation: "CFO",
    company: "Coinweb",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "I've never met a web3 developer who truly cares about their clients' success like Alex does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Sony's BRL",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After Alex optimized our contracts, our traffic increased by 59.8%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Groth DEFI",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Alex is an outstanding blockchain engineer with a deep understanding of both the technical and strategic sides of Web3 development!",
    name: "Emily Thompson",
    designation: "CEO",
    company: "Groth DEFI",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "NFT",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
