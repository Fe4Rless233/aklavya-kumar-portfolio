/**
 * Aklavya Kumar Portfolio - Dynamic Interactive Engine (main.js)
 * Class of 2027 | Cumberland Valley High School
 * Advanced Scroll-Based Interaction System
 */

// --- 1. Comprehensive Project Database ---
const PROJECTS_DATA = [
    {
        id: "ftc-autonomous-pedro",
        title: "Autonomous FIRST Robotics Modules (RoadRunner & PedroPathing)",
        category: "robotics",
        categoryName: "Robotics & AI",
        status: "State Finalist & Award Winning",
        image: "img/ftc-team.jpg",
        summary: "Millimeter-precision autonomous driving modules using Java, Road Runner, PedroPathing, OpenCV vision tracking, and REV hardware.",
        details: "As Build & Programming Lead and Dean's List Finalist for FTC Team 14464 BotBusters, Aklavya developed autonomous driving modules with millimeter-level precision using Java, RoadRunner trajectory generation, PedroPathing, and OpenCV computer vision. Led team to 3 consecutive PA State Championship finals, winning Motivate, Connect, Inspire, Control, and Think team awards, as well as Winning Alliance Captain.",
        tags: ["Java", "RoadRunner", "PedroPathing", "OpenCV", "PID Control", "FTC Robotics", "REV Hardware"],
        metrics: "3x State Finalist | Motivate, Connect, Inspire, Control, Think Awards",
        link: "http://AI-Robotics.us",
        linkText: "Robotics Team Site"
    },
    {
        id: "bci-burnout-prevention",
        title: "Brain-Computer Interface (BCI) Burnout Prevention",
        category: "biotech",
        categoryName: "Biotechnology & AI",
        status: "Active Research Project",
        image: "img/biotech.jpg",
        summary: "Developing a BCI system utilizing neural signal data analysis to detect cognitive fatigue and prevent student/adult burnout.",
        details: "Integrating neuro-engineering principles, signal processing, and machine learning (PyTorch/TensorFlow), Aklavya architected a Brain-Computer Interface (BCI) research project aimed at real-time cognitive workload monitoring to prevent academic and workplace burnout.",
        tags: ["Brain-Computer Interface", "Machine Learning", "PyTorch", "Python", "Bio-Signals", "Neural Engineering"],
        metrics: "BCI & Machine Learning Research",
        link: "https://github.com/Fe4Rless233",
        linkText: "GitHub Research"
    },
    {
        id: "fbla-national-awards",
        title: "FBLA National Dual Top-10 & State Championship",
        category: "leadership",
        categoryName: "Leadership & Business",
        status: "National 8th & 10th Place",
        image: "img/fbla.png",
        summary: "8th Place Nationally in Intro to Programming (2025) and 10th Place Nationally in Management Information Systems (2026). 1st Place PA State Champion.",
        details: "Representing Cumberland Valley High School and Region 26 (where Aklavya serves as Regional Treasurer), he placed 8th Nationally in Intro to Programming (2025) and 10th Nationally in Management Information Systems (2026) at FBLA NLC. Placed 1st in PA State in MIS (2026), 3rd in State in Intro to Programming, 3rd in Fundamentals of AI, and DECA State Qualifier.",
        tags: ["FBLA National 8th & 10th", "PA 1st Place MIS", "Python", "SQL", "DECA State Qualifier", "Region 26 Treasurer"],
        metrics: "2x National Top 10 | 1st Place PA State Champion",
        link: "https://www.linkedin.com/in/aklavyakumar",
        linkText: "LinkedIn Honors"
    },
    {
        id: "penn-state-pulse",
        title: "Penn State College of Medicine PULSE Internship",
        category: "biotech",
        categoryName: "Biotechnology & Medicine",
        status: "Selective 12-Week Pathway",
        image: "img/nasa.webp",
        summary: "Selected for 12-week longitudinal pathway curriculum in Penn State College of Medicine with clinical shadowing & problem-based research.",
        details: "Competitively selected for Penn State College of Medicine's 12-week PULSE curriculum. Participated in clinical shadowing, problem-based medical learning, and interdisciplinary bio-medical lectures exploring clinical application of technology.",
        tags: ["Penn State Medicine", "PULSE Program", "Clinical Shadowing", "Biomedical Research"],
        metrics: "12-Week Medical Pathway Scholar",
        link: "https://www.linkedin.com/in/aklavyakumar",
        linkText: "View Internship Credentials"
    },
    {
        id: "cv-coding-club-founder",
        title: "CV Coding Club Founder & ACSL/USACO Mentorship",
        category: "coding",
        categoryName: "Competitive Coding",
        status: "President & Founder",
        image: "img/cvcoding.png",
        summary: "Founded competitive coding club at CVHS; coached 10+ members to Silver or higher in USACO, including 4 Gold-ranked programmers.",
        details: "Founded and serves as President of Cumberland Valley High School's Coding Club. Built a structured curriculum for USACO and ACSL competitions. Successfully mentored over 10 students who achieved USACO Silver rank or higher, including 4 USACO Gold-ranked members.",
        tags: ["President & Founder", "USACO 4 Gold Students", "C++", "Python", "Algorithms", "Data Structures"],
        metrics: "10+ USACO Silver+ Members | 4 Gold Members",
        link: "https://github.com/Fe4Rless233",
        linkText: "Club Repositories"
    },
    {
        id: "scioly-national-medalist",
        title: "Science Olympiad National Competitor & Developer",
        category: "robotics",
        categoryName: "Robotics & AI",
        status: "National 19th & 20th Place Team",
        image: "img/cv.jpeg",
        summary: "Varsity competitor leading robotics, engineering, physics & lab events; led 50+ member team to 19th (2024) and 20th (2025) at Nationals.",
        details: "Competitor and developer for CV Science Olympiad across build, lab, physics, and data-driven events. Earned 20+ individual awards & 15+ team awards across UPenn, MIT, Penn State, and National tournaments, helping team rank 19th (2024) and 20th (2025) in the United States.",
        tags: ["Science Olympiad", "MIT Invitational", "UPenn", "Penn State", "Engineering", "Physics"],
        metrics: "20+ Individual Medals | 19th & 20th Nationally",
        link: "https://www.cvschools.org",
        linkText: "CV Schools News"
    },
    {
        id: "bengali-community-react-next",
        title: "Bengali Community Official Web Platform (React & Next.js)",
        category: "coding",
        categoryName: "Web & Full-Stack",
        status: "Live Production Site",
        image: "img/abha.jpg",
        summary: "Created and maintained the official production web application for local Bengali community using React, Next.js, and TypeScript.",
        details: "Designed, developed, and deployed the official web portal for the Association of Bengalis in Harrisburg Area (ABHA) utilizing React, Next.js, TypeScript, and modern styling. Serves hundreds of community members and facilitates annual fundraising ($300+ raised annually).",
        tags: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Full-Stack Web"],
        metrics: "Live Production Site | Hundreds of Users Served",
        link: "https://www.linkedin.com/in/aklavyakumar",
        linkText: "View Web Project"
    },
    {
        id: "cv-iro-research-club",
        title: "CV International Research Olympiad (IRO) Club",
        category: "biotech",
        categoryName: "Research & Science",
        status: "President & Founder",
        image: "img/biotech.jpg",
        summary: "Founded CVHS IRO team, leading student research papers, experimental design, data analysis, and competition presentations.",
        details: "Founded and leads the International Research Olympiad club at CVHS. Guides high school researchers through experimental design, quantitative data processing, academic writing, and publishing research papers for global science competitions.",
        tags: ["Research Club Founder", "Data Analysis", "Scientific Writing", "Experimental Design"],
        metrics: "Research Team Leader & Paper Mentor",
        link: "https://www.cvschools.org",
        linkText: "Research Olympiad Info"
    },
    {
        id: "stemsters-treasurer",
        title: "STEMsters K-8 Outreach & Regional Treasurer",
        category: "community",
        categoryName: "Community & Outreach",
        status: "Treasurer & Mentor",
        image: "img/food.webp",
        summary: "Treasurer for STEMsters K-8 outreach club & FBLA Region 26. Coached 40+ CV students in robotics summer camps & food bank fundraising.",
        details: "Manages budgets and hands-on STEM learning workshops for K-8 students as STEMsters Treasurer. Coached 40+ Cumberland Valley students in summer robotics camps. Combined with 10+ years of dedicated service to the Pennsylvania Food Bank.",
        tags: ["STEMsters Treasurer", "K-8 Mentorship", "40+ Campers Coached", "PA Food Bank 10+ Yrs"],
        metrics: "40+ Campers Coached | 10+ Yrs Food Bank",
        link: "https://www.centralpafoodbank.org",
        linkText: "PA Food Bank Partner"
    }
];

// --- 2. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initTypewriter();
    renderProjects(PROJECTS_DATA);
    initFiltersAndSearch();
    initModal();
    initStatsCounter();
    initSkillBars();
    
    // Scroll-Based System
    initScrollProgressBar();
    initScrollRevealObserver();
    initActiveNavOnScroll();
    initBackToTop();
});

// --- 3. Scroll Progress Indicator Bar ---
function initScrollProgressBar() {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + "%";
    });
}

// --- 4. Scroll Reveal Intersection Observer ---
function initScrollRevealObserver() {
    const reveals = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale");
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}

// --- 5. Scroll Active Navigation Tracking ---
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link-custom");

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}` || link.getAttribute("href") === `index.html#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// --- 6. Back To Top Button Logic ---
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// --- 7. Particle Canvas Background ---
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 43, 85, ${p.alpha})`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(255, 43, 85, ${0.15 * (1 - dist / 120)})`;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// --- 8. Hero Typewriter ---
function initTypewriter() {
    const el = document.getElementById("typewriter-text");
    if (!el) return;

    const phrases = [
        "High School Senior @ Cumberland Valley HS ('27)",
        "FTC Robotics Build & Programming Lead (RoadRunner/PedroPathing)",
        "FBLA 8th & 10th Place National Competitor",
        "Penn State College of Medicine PULSE Scholar",
        "CV Coding Club Founder (4 USACO Gold Students Mentored)",
        "Brain-Computer Interface (BCI) Researcher",
        "Science Olympiad National Medalist (19th & 20th Team)"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 30 : 65;

        if (!isDeleting && charIdx === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 350;
        }

        setTimeout(type, speed);
    }
    type();
}

// --- 9. Project Renderer ---
function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    if (projects.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-secondary">No matching projects found</h4>
                <p class="text-muted">Try adjusting your search terms or filter selection.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = projects.map((p, idx) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="glass-card project-card scroll-reveal delay-${(idx % 4) + 1}">
                <div class="project-img-wrapper">
                    <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
                    <span class="project-status-badge">${p.status}</span>
                </div>
                <div class="project-body">
                    <span class="project-category-tag">${p.categoryName}</span>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.summary}</p>
                    <div class="tech-tags">
                        ${p.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                    </div>
                    <button class="btn-project-details" onclick="openProjectModal('${p.id}')">
                        <i class="fas fa-expand-alt me-1"></i> View Credentials & Impact
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Re-trigger scroll reveal for newly rendered items
    initScrollRevealObserver();
}

function initFiltersAndSearch() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("project-search");

    let currentCategory = "all";
    let currentQuery = "";

    function filterData() {
        const filtered = PROJECTS_DATA.filter(p => {
            const matchesCat = currentCategory === "all" || p.category === currentCategory;
            const q = currentQuery.toLowerCase();
            const matchesQuery = p.title.toLowerCase().includes(q) ||
                                 p.summary.toLowerCase().includes(q) ||
                                 p.tags.some(t => t.toLowerCase().includes(q));
            return matchesCat && matchesQuery;
        });
        renderProjects(filtered);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.filter;
            filterData();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentQuery = e.target.value;
            filterData();
        });
    }
}

// --- 10. Project Modal ---
function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const body = document.getElementById("modal-body-content");
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="mb-3">
            <span class="project-category-tag">${project.categoryName}</span>
            <h2 class="section-title text-start mb-2" style="font-size: 1.8rem;">${project.title}</h2>
            <p class="text-accent fw-bold small mb-3"><i class="fas fa-medal me-2"></i>Honors/Metrics: ${project.metrics}</p>
        </div>
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded-3 mb-4 w-100" style="max-height: 280px; object-fit: cover;">
        <h4 class="h6 text-white mb-2"><i class="fas fa-align-left me-2 text-accent"></i>Overview & Contributions:</h4>
        <p class="text-secondary mb-4" style="line-height: 1.7; font-size: 0.95rem;">${project.details}</p>
        
        <h4 class="h6 text-white mb-2"><i class="fas fa-tools me-2 text-accent"></i>Tools, Languages & Frameworks:</h4>
        <div class="tech-tags mb-4">
            ${project.tags.map(t => `<span class="tech-pill" style="font-size: 0.85rem; padding: 6px 12px;">${t}</span>`).join('')}
        </div>

        <div class="d-flex justify-content-end gap-2">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-hero-primary btn-sm">
                <i class="fas fa-external-link-alt me-1"></i> ${project.linkText}
            </a>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function initModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }
}

// --- 11. Stats Counter ---
function initStatsCounter() {
    const statNumbers = document.querySelectorAll(".stat-number");
    let hasAnimated = false;

    function checkScroll() {
        const statsBar = document.querySelector(".stats-bar");
        if (!statsBar || hasAnimated) return;

        const rect = statsBar.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
            hasAnimated = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.target, 10);
                let current = 0;
                const increment = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = (el.dataset.prefix || "") + target + (el.dataset.suffix || "");
                        clearInterval(timer);
                    } else {
                        el.textContent = (el.dataset.prefix || "") + current + (el.dataset.suffix || "");
                    }
                }, 30);
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
}

// --- 12. Skill Bars ---
function initSkillBars() {
    const fills = document.querySelectorAll(".skill-progress-fill");
    let animated = false;

    function checkSkillScroll() {
        const section = document.getElementById("skills-section");
        if (!section || animated) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            animated = true;
            fills.forEach(fill => {
                const pct = fill.dataset.progress;
                fill.style.width = pct + "%";
            });
        }
    }

    window.addEventListener("scroll", checkSkillScroll);
    checkSkillScroll();
}
