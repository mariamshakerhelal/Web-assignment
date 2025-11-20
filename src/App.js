import React, { useState } from "react";
import "./App.css";

const LOCAL_IMAGE_PATHS = {
    HERO: './udemyimage1.jpg',
    CATEGORY_AI: './generative.jpg',
    CATEGORY_IT: './certif.jpg',
    CATEGORY_DATA: './datascience.jpg',
    COURSE_PYTHON_BOOTCAMP: 'python.jpg',
    COURSE_ADVANCED_EXCEL: 'excel.jpg',
    COURSE_AI_ENGINEER: 'aieng.jpg',
    COURSE_AI_AGENTS: 'agentic.jpg',
    COURSE_PROMPT_ENGINEERING: 'dataai.jpg',
    COURSE_MACHINE_LEARNING: 'machine.jpg',
    COURSE_100_DAYS_PYTHON: 'python100.jpg',
    COURSE_AUTONOMOUS_AGENTS: 'auto.jpg',
    COURSE_DIGITAL_MARKETING: 'businessai.png',
    COURSE_AWS_ARCHITECT: 'aws.png',
    LOGO_ERICSSON: './ericsson.png',
    LOGO_CISCO: './cisco.jpg',
    LOGO_VW: './VW.png',
    LOGO_VIMEO: './vimeo.png',
    LOGO_CITI: './Citi.png',
    REIMAGINE_IMAGE: './aiera.png',
};
const COMPANY_LOGOS = [
    { key: 'LOGO_ERICSSON', alt: 'Ericsson' },
    { key: 'LOGO_CISCO', alt: 'Cisco' },
    { key: 'LOGO_VW', alt: 'VW' },
    { key: 'LOGO_VIMEO', alt: 'Vimeo' },
    { key: 'LOGO_CITI', alt: 'Citi' },
];
const CATEGORIES_DATA = [
    { title: 'Generative AI', students: '1M+', imageKey: 'CATEGORY_AI' },
    { title: 'IT Certifications', students: '14.4M+', imageKey: 'CATEGORY_IT' },
    { title: 'Data Science', students: '3M+', imageKey: 'CATEGORY_DATA' },
    { title: 'Web Development', students: '10M+', imageKey: 'COURSE_PYTHON_BOOTCAMP' },
    { title: 'Finance & Accounting', students: '5M+', imageKey: 'COURSE_ADVANCED_EXCEL' },
    { title: 'Design', students: '8M+', imageKey: 'CATEGORY_AI' }, 
    { title: 'Business', students: '12M+', imageKey: 'CATEGORY_IT' }, 
    { title: 'Music', students: '2M+', imageKey: 'CATEGORY_DATA' }, 
];
const skillTabs = [
    "Artificial Intelligence (AI)",
    "Python",
    "Microsoft Excel",
    "AI Agents & Agentic AI",
    "Digital Marketing",
    "Amazon AWS"
];
const allSkillsCourses = {
    "Artificial Intelligence (AI)": [
        { id: 1, title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp", instructor: "365 Careers", rating: 4.6, students: "10,801 ratings", price: "£349.99", imageKey: 'COURSE_AI_ENGINEER', badge: "Bestseller" },
        { id: 2, title: "Intro to AI Agents and Agentic AI", instructor: "365 Careers", rating: 4.4, students: "896 ratings", price: "£349.99", imageKey: 'COURSE_AI_AGENTS', badge: "Hot" },
        { id: 3, title: "Prompt Engineering for AI Tools & ChatGPT", instructor: "Kirill Eremenko", rating: 4.7, students: "5,120 ratings", price: "£19.99", imageKey: 'COURSE_PROMPT_ENGINEERING' },
        { id: 4, title: "Machine Learning A-Z™: Python & R", instructor: "Data Scientist Team", rating: 4.5, students: "220,000 ratings", price: "£14.99", imageKey: 'COURSE_MACHINE_LEARNING' },
    ],
    "Python": [
        { id: 5, title: "Python 2025: The Complete Bootcamp", instructor: "Max Schwarzmüller", rating: 4.8, students: "250,000 students", price: "$19.99", imageKey: 'COURSE_PYTHON_BOOTCAMP' },
        { id: 6, title: "100 Days of Code: The Complete Python Pro Bootcamp", instructor: "Angela Yu", rating: 4.7, students: "580,000 students", price: "$12.99", imageKey: 'COURSE_100_DAYS_PYTHON' },
    ],
    "Microsoft Excel": [
        { id: 7, title: "Advanced Excel Formulas and Functions", instructor: "Chris Dutton", rating: 4.7, students: "150,000 students", price: "$14.99", imageKey: 'COURSE_ADVANCED_EXCEL' },
    ],
    "AI Agents & Agentic AI": [
        { id: 8, title: "Mastering Autonomous AI Agents", instructor: "AI Pro Institute", rating: 4.9, students: "1,200 students", price: "£39.99", imageKey: 'COURSE_AUTONOMOUS_AGENTS', badge: "New" },
    ],
    "Digital Marketing": [
        { id: 9, title: "The Complete Digital Marketing Course - 12 Courses in 1", instructor: "Rob Percival & Daragh Walsh", rating: 4.5, students: "650,000 students", price: "$16.99", imageKey: 'COURSE_DIGITAL_MARKETING' },
    ],
    "Amazon AWS": [
        { id: 10, title: "Ultimate AWS Certified Solutions Architect - Associate", instructor: "Stephane Maarek", rating: 4.6, students: "180,000 students", price: "$18.99", imageKey: 'COURSE_AWS_ARCHITECT' },
    ]
};

const App = () => {
    const [activeSkill, setActiveSkill] = useState(skillTabs[0]);
    const [categorySlide, setCategorySlide] = useState(0); 
    const activeCourses = allSkillsCourses[activeSkill] || [];

    const handleNextSlide = () => {
        setCategorySlide((prevSlide) => (prevSlide + 1) % CATEGORIES_DATA.length);
    };
    
    const handlePrevSlide = () => {
        setCategorySlide((prevSlide) => (prevSlide - 1 + CATEGORIES_DATA.length) % CATEGORIES_DATA.length);
    };

    const itemsPerSlide = 4; 
    const totalSlides = Math.ceil(CATEGORIES_DATA.length / itemsPerSlide);
    const startIndex = categorySlide; 

    return (
        <div className="udemy-home font-sans">
            <nav className="navbar">
                <div className="navbar-left">
                    <h1 className="logo text-2xl font-bold">udemy</h1>
                    <button className="nav-btn ml-4">Explore</button>
                </div>
                
                <div className="navbar-center flex-grow mx-8">
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span> 
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="search-input w-full"
                        />
                    </div>
                </div>
                
                <div className="navbar-right">
                    <button className="nav-btn">Plans & Pricing</button>
                    <button className="nav-btn">Udemy Business</button>
                    <button className="nav-btn">Teach on Udemy</button>
                    <button className="nav-btn login ml-4">Log in</button>
                    <button className="nav-btn signup ml-2">Sign up</button>
                    <button className="nav-btn ml-2 p-1 border border-gray-300 rounded-full hover:bg-gray-100">
                        🌐
                    </button>
                </div>
            </nav>
            <section className="hero">
                <div className="hero-illustration">
                    <img
                        src={LOCAL_IMAGE_PATHS.HERO}
                        alt="Hero image showing people learning"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hero-content">
                    <h2 className="font-bold mb-4">Jump into learning — for less</h2>
                    <p className="mb-6">
                        If you’re new to Udemy, we’ve got good news for new learners!
                        For a limited time, courses start at just £12.99 for new learners!
                    </p>
                    <button className="cta-btn">Sign up now</button>
                </div>
            </section>
            <section className="categories-section">
                <div className="categories-intro-content">
                    <h2 className="text-4xl font-bold mb-4">Learn essential career and life skills</h2>
                    <p className="text-lg text-gray-700">
                        Udemy helps you build in-demand skills fast and advance your career in a changing job market.
                    </p>
                </div>
                <div className="categories-carousel">
                    <div 
                        className="carousel-track"
                        style={{ transform: `translateX(-${categorySlide * (100 / itemsPerSlide)}%)` }} 
                    >
                        {CATEGORIES_DATA.map((item, i) => (
                            <div key={i} className="category-card-v2">
                                <div className="card-image-wrapper">
                                    <img
                                        src={LOCAL_IMAGE_PATHS[item.imageKey]}
                                        alt={item.title}
                                        className="card-image-v2"
                                    />
                                </div>
                                <div className="card-content-v2">
                                    <div className="student-badge">
                                        <span>🧑‍🎓</span>
                                        <span>{item.students}</span>
                                    </div>
                                    <h3 className="card-title-v2">{item.title}</h3>
                                    <a href="#" className="card-arrow-v2">→</a> 
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-nav-v2">
                        <button 
                            className={`nav-arrow-v2 left ${categorySlide === 0 ? 'disabled' : ''}`}
                            onClick={handlePrevSlide}
                            disabled={categorySlide === 0}
                        >
                            ‹
                        </button>
                        <div className="dots-v2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <span 
                                    key={index}
                                    className={`dot-v2 ${categorySlide >= index * itemsPerSlide && categorySlide < (index + 1) * itemsPerSlide ? 'active' : ''}`} 
                                    onClick={() => setCategorySlide(index * itemsPerSlide)}
                                ></span>
                            ))}
                        </div>
                        <button 
                            className={`nav-arrow-v2 right ${categorySlide >= CATEGORIES_DATA.length - itemsPerSlide ? 'disabled' : ''}`}
                            onClick={handleNextSlide}
                            disabled={categorySlide >= CATEGORIES_DATA.length - itemsPerSlide} 
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>
            <section className="reimagine-career">
                <div className="reimagine-content">
                    <h2 className="text-4xl font-bold mb-4">Reimagine your career in the AI era</h2>
                    <p className="text-lg mb-6 max-w-lg">
                        Dive into our essential courses for the next generation of work.
                        Learn how AI is reshaping industries and master the skills needed to thrive.
                    </p>
                    <button className="cta-btn-secondary">Explore AI Courses</button>
                </div>
                <div className="reimagine-illustration">
                    <img
                        src={LOCAL_IMAGE_PATHS.REIMAGINE_IMAGE}
                        alt="AI career illustration"
                        className="reimagine-image"
                    />
                </div>
            </section>
            <section className="featured-courses">
                <h2 className="text-4xl font-bold mb-8">Skills to transform your career and life</h2>

                <div className="course-tabs">
                    {skillTabs.map((skill) => (
                        <button
                            key={skill}
                            className={`tab-btn ${skill === activeSkill ? "active-tab" : ""}`}
                            onClick={() => setActiveSkill(skill)}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
                <div className="courses-grid mt-8">
                    {activeCourses.map(course => (
                        <div key={course.id} className="course-card">
                            <img
                                src={LOCAL_IMAGE_PATHS[course.imageKey]}
                                alt={course.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="course-info">
                                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">{course.instructor}</p>
                                
                                <div className="flex items-center text-sm font-semibold mb-2">
                                    <span className="text-yellow-600 mr-1">{course.rating}</span>
                                    <span className="text-xs text-yellow-600"> ★★★★★ </span>
                                    <span className="ml-2 text-xs text-gray-500">({course.students})</span>
                                </div>
                                <p className="base font-bold text-gray-800">{course.price}</p>
                                {course.badge && (
                                    <span className="badge mt-2">{course.badge}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="trusted-companies">
                <h2 className="text-2xl font-light text-gray-700 mb-8">
                    Trusted by over 17,000 companies and millions of learners around the world
                </h2>
                <div className="logos">
                    {COMPANY_LOGOS.map((logo, i) => (
                        <img 
                            key={i} 
                            src={LOCAL_IMAGE_PATHS[logo.key]} 
                            alt={`${logo.alt} logo`}
                            className="logo-image" 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
export default App;