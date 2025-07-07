import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/sushi.png"

export const menuData = [
    {
        label: "About Me",
        link: "about",
        id: 1
    },
    {
        label: "Skills",
        link: "skills",
        id: 2
    },

    {
        label: "Projects",
        link: "projects",
        id: 3
    },
    {
        label: "Experience",
        link: "experience",
        id: 4

    },
    {
        label: "Contact Me",
        link: "contact",
        id: 4

    }
]

export const skillsData = [
    {
        id: 1,
        name: "HTML",
        category: "Frontend",
        imgLink: "/html.svg",
    },
    {
        id: 2,
        name: "CSS",
        category: "Styling",
        imgLink: "/css.svg",

    },
    {
        id: 3,
        name: "JavaScript",
        category: "Programming",
        imgLink: "/js.svg",
    },
    {
        id: 4,
        name: "TypeScript",
        category: "Programming",
        imgLink: "/ts.svg",
    },
    {
        id: 5,
        name: "React",
        category: "Frontend",
        imgLink: "/react.svg",
    },
    {
        id: 6,
        name: "Tailwind CSS",
        category: "Styling",
        imgLink: "/tailwind.svg",
    },
    {
        id: 7,
        name: "Next.js",
        category: "Backend",
        imgLink: "/next.svg",
    },
    {
        id: 8,
        name: "Supabase",
        category: "Tools",
        imgLink: "/supabase.svg",
    },
    {
        id: 8,
        name: "Git",
        category: "Tools",
        imgLink: "/git.svg",
    },
    {
        id: 9,
        name: "Vite",
        category: "Tools",
        imgLink: "/vite.svg",
    }
]

export const projectsData = [
    {
        id: 1,
        title: "The Cities Haven",
        description: "A modern, responsive admin dashboard for managing hotel bookings, built with a focus on performance, usability, and clean UI design.",
        tags: [
            { name: "React", icon: "/react.svg" },
            { name: "Styled Components", icon: "" },
            { name: "Supabase", icon: "/supabase.svg" },
        ],
        demoLink: "https://the-city-haven.vercel.app",
        githubLink: "https://github.com/NelsonSamuvel/the-city-haven",
        image: project1
    },
    {
        id: 2,
        title: "Cineverze",
        description: "A user-friendly movie listing platform that allows users to browse, search, and discover movies with intelligent recommendations based on trending titles and search behavior.",
        tags: [
            { name: "React", icon: "/react.svg" },
            { name: "TailwindCSS", icon: "/tailwind.svg" },
            { name: "Appwrite", icon: "" },
        ],
        demoLink: "https://cineverze.vercel.app",
        githubLink: "https://github.com/NelsonSamuvel/CineVerse-React",
        image: project2
    },
    {
        id: 3,
        title: "sushilicious",
        description: "A visually appealing static website showcasing a variety of sushi dishes, built using HTML and CSS.The layout is fully responsive, featuring modern UI with vibrant images, smooth navigation, and elegant typography to create an authentic Japanese dining experience online.",
        tags: [
            { name: "Html", icon: "/html.svg" },
            { name: "Css", icon: "/css.svg" },
        ],
        demoLink: "https://sushilicious.vercel.app/",
        githubLink: "https://github.com/NelsonSamuvel/Sushi-website-html-css",
        image: project3
    },


]

export const experienceData = [
    {
        id: 1,
        role: "Frontend Developer",
        start: "Dec 2024",
        end: "May 2025",
        company: "ProcodebaseAI",
        experience: [
            "Worked on 'Xperto-AI', an AI-based tutor platform for students using Next js, Typescript and TailwindCSS.",
            "Built the Mock Interview module featuring a real-time video panel and chat interface. Enabled users to speak responses via camera, which were transcribed to text and sent to the backend.",
            "Implemented Resume Builder module where users provide a summary and headline, and the system generates a downloadable PDF resume.",
            "Collaborated with backend developers to perform api operations.",
        ]
    },
    {
        id: 2,
        role: "Web Developer Intern",
        start: "Aug 2022",
        end: "Dec 2022",
        company: "Nutz Technovation",
        experience: [
            "Assisted in building landing pages with HTML, CSS, and JavaScript.",
            "Worked with senior developers to debug and optimize code.",
            "Participated in code reviews and team meetings."
        ]
    }
];



