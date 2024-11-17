type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Alex Gustav — 3D Portfolio",
    fullName: "Alex Gustav",
    email: "akira.tech.85@gmail.com",
  },
  hero: {
    name: "Alex Gustav",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m an experienced Blockchain Engineer with six years of expertise in Web3, specializing in building and scaling blockchain solutions. My strong background in software engineering has been instrumental in driving growth for crypto startups through innovative product development.
                Proficient in Solidity, Rust, Ethereum, and Layer 2 solutions, I create secure, gas-efficient smart contracts deployed across multiple blockchain networks. I also have extensive experience in DeFi platforms, tokenomics, and liquidity management. I manage complex projects from inception to completion, ensuring high-quality, on-time delivery within budget.
                My expertise also includes advanced blockchain algorithms, such as Zero-Knowledge Proofs (ZKP), allowing me to build fast, secure, and scalable systems. I am passionate about collaboration, working seamlessly with both technical and non-technical teams, from developers to clients and executives.
                Let's work together to bring your ideas to life!`
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
