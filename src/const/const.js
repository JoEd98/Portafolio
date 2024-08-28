export const studies = [
  {
    title: "Ingeniero en Computación",
    corporation: "Universidad Autónoma Metropolitana Unidad Azcapotzalco",
    date: "2017 - 2023",
  },
  {
    title: "Técnico en Programación",
    corporation: "Centro de Estudios Tecnológicos Industriales y de Servicios No. 55",
    date: "2013 - 2016",
  },
  {
    title: "Técnico en Informática",
    corporation: "Secundaria Técnica No 63",
    date: "2010 - 2013",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  sveltekit : "sveltekit",
  mariaDB : "mariaDB",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },

  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },

  {
    title: "Vite",
    icon: IconKeys.vite,
  },

  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },

  {
    title: "SvelteKit",
    icon: IconKeys.sveltekit,
  },

  {
    title: "MariaDB",
    icon: IconKeys.mariaDB,
  }
];

export const projects = [

  {
    img: "/portafolio/img/sistemas.png",
    title: "Departamento de Sistemas",
    link: "https://sistemas.azc.uam.mx/",
    description: `El Departamento de Sistemas se estableció en 1974 para atender las necesidades de nueve licenciaturas, incluida Ingeniería Industrial.`,
    technologies: [
      {
        icon: IconKeys.git,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.sveltekit,
      },
    ],
  },
  {
    img: "/portafolio/img/ia.png",
    title: "Página de Ejemplos IA",
    link: "https://jose-eduardo-hrz.github.io/Inteligencia-Artificial/",
    description: `Se pretende Explicar los conceptos básicos y métodos matemáticos de la inteligencia artificial aplicables en la solución de problemas complejos en donde la solución algorítmica exacta o no existe o es costosa su aplicación.`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
    ],
  },
];
