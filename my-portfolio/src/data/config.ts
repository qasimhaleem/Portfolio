export const config = {
    name: "Muhammad Qasim",
    title: "Full Stack Developer",
    tagline: "Crafting Seamless Digital Solutions from Frontend to Backend",
    email: "mrqasimhaleem@gmail.com",
    whatsapp: "+923038843954", // Add your WhatsApp number with country code
    github: "https://github.com/qasimhaleem",
    linkedin: "https://www.linkedin.com/in/qasim-haleem-200557286/",
    profileImage: "/pic.jpg",

    about: {
        description: "As a dedicated Full Stack Developer, I thrive on transforming innovative ideas into powerful, scalable applications. With expertise spanning both frontend and backend technologies, I create comprehensive solutions that deliver exceptional user experiences while maintaining robust server-side functionality. My journey in web development has equipped me with a versatile skill set that bridges the gap between design and functionality, ensuring every project I undertake is not just visually appealing, but also technically sound and performant.",
        mission: "My mission is to leverage cutting-edge technologies to build applications that solve real-world problems, enhance user experiences, and drive business growth. I believe in writing clean, maintainable code and staying ahead of industry trends to deliver solutions that stand the test of time.",
        highlights: [
            { title: "Full Stack Expertise", text: "Proficient in both Frontend & Backend development with modern frameworks" },
            { title: "Modern Technologies", text: "React, Node.js, MongoDB, PostgreSQL & cutting-edge tools" },
            { title: "Performance Focused", text: "Building fast, scalable, and optimized applications" },
            { title: "Problem Solver", text: "Turning complex challenges into elegant solutions" }
        ]
    },

    skills: [
        {
            category: "Frontend",
            color: "from-cyan-400 to-blue-500",
            items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
        },
        {
            category: "Backend",
            color: "from-green-400 to-emerald-500",
            items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication"]
        },
        {
            category: "Database",
            color: "from-orange-400 to-red-500",
            items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose"]
        },
        {
            category: "Tools & DevOps",
            color: "from-purple-400 to-pink-500",
            items: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code", "CI/CD", "Linux"]
        }
    ],

    projects: [
        /* {
          title: "GPA Calculator Pro",
          description: "An intelligent GPA calculation system that helps students track their academic performance with precision. Features include semester-wise calculation, CGPA tracking, grade visualization, and predictive analytics to help students achieve their academic goals.",
          tech: ["React", "Node.js", "MongoDB", "Chart.js"],
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
          github: "https://github.com/yourusername/gpa-calculator",
          live: "https://gpa-calculator-demo.com",
          gradient: "from-blue-500 to-cyan-500"
        }, */
        {
            title: "Full CRUD Management System",
            description: "A comprehensive CRUD application demonstrating complete database operations with an intuitive interface. Built with modern best practices, featuring real-time updates, advanced filtering, pagination, authentication, and role-based access control.",
            tech: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            github: "https://github.com/qasimhaleem/CRUD-Web-App",
            live: "https://crud-web-app-xi.vercel.app/",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Tic Tac Toe Championship",
            description: "A modern twist on the classic game featuring AI opponent with multiple difficulty levels, multiplayer mode with real-time synchronization, game history tracking, and beautiful animations. Perfect blend of nostalgia and modern technology.",
            tech: ["React", "Socket.io", "Node.js", "CSS Animations"],
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
            github: "https://github.com/yourusername/tic-tac-toe",
            live: "https://tictactoe-demo.com",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Weather Forecast Dashboard",
            description: "Real-time weather application providing accurate forecasts with stunning visualizations. Features include 7-day forecasts, hourly predictions, multiple location tracking, weather alerts, interactive maps, and beautiful weather-based UI themes.",
            tech: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            github: "https://github.com/yourusername/weather-app",
            live: "https://weather-demo.com",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "COVID-19 Analytics Tracker",
            description: "Comprehensive pandemic tracking dashboard with global statistics, country-wise data, vaccination progress, and trend analysis. Features interactive charts, historical data comparison, news integration, and safety guidelines to keep users informed.",
            tech: ["Vue.js", "Node.js", "COVID-19 API", "D3.js"],
            image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
            github: "https://github.com/qasimhaleem/Covid-Web",
            live: "https://qasimhaleem.github.io/Covid-Web/",
            gradient: "from-indigo-500 to-purple-500"
        }
    ]
};
