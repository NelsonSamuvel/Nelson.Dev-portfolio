import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"

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
        label: "Experience",
        link: "experience",
        id: 3

    },
    {
        label: "Projects",
        link: "projects",
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
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my skills and projects. Built with React and Tailwind CSS.",
        tags: [
            { name: "React", icon: "/react.svg" },
            { name: "Vite", icon: "/vite.svg" },
            { name: "Tailwind CSS", icon: "/tailwind.svg" },
        ],
        demoLink: "#",
        githubLink: "https://github.com/NelsonSamuvel/Nelson.Dev-portfolio",
        image: ""
    },

]



