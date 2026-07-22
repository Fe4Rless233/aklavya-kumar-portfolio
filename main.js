/**
 * Aklavya Kumar Portfolio - Dynamic Interactive Engine (main.js)
 * High School Senior (Class of 2027) | Cumberland Valley High School
 * Multi-Page Interactive Engine with Verified Credentials & Direct Links
 */

// --- 1. Comprehensive Verified Project Database ---
const PROJECTS_DATA = [
    {
        id: "ftc-8468-javengers",
        title: "FTC 8468 - The Javengers (Upcoming Season)",
        category: "robotics",
        categoryName: "Robotics & AI",
        status: "Dean's List Semi-Finalist",
        image: "img/ftc-team.jpg",
        summary: "Build & Programming Lead for FTC 8468 The Javengers (Family/Community Team, Mechanicsburg PA, Rookie Year 2014).",
        details: "Aklavya is Build & Programming Lead for FTC 8468 The Javengers, a premier family/community FIRST Tech Challenge robotics team based in Mechanicsburg, PA (Rookie Year: 2014). Previously competed with FTC 14464 BotBusters. Sponsored by leading corporations including Optum, TE Connectivity, Bank of America, and UnitedHealth Group. Dean's List Semi-Finalist, leading autonomous navigation with Java, RoadRunner, PedroPathing, and OpenCV.",
        tags: ["FTC 8468 The Javengers", "Dean's List Semi-Finalist", "Java", "PedroPathing", "RoadRunner", "Optum & TE Sponsored", "PACAR Robotics"],
        metrics: "FTC 8468 Lead | Dean's List Semi-Finalist",
        link: "http://www.pacar-robotics.org",
        linkText: "Visit PACAR Robotics (pacar-robotics.org)"
    },
    {
        id: "cognitrack-bci",
        title: "CogniTrack: BCI for Cognitive Fatigue & Burnout Monitoring",
        category: "biotech",
        categoryName: "Biotechnology & AI",
        status: "Published Research Project",
        image: "img/biotech.jpg",
        summary: "Brain-Computer Interface (BCI) system utilizing neural signal data to objectively monitor cognitive fatigue and prevent student burnout.",
        details: "Developed CogniTrack, a Brain-Computer Interface (BCI) system designed to monitor real-time cognitive fatigue and prevent academic and workplace burnout. Published complete technical paper and architecture breakdown on Medium.",
        tags: ["CogniTrack", "Brain-Computer Interface", "Medium Article", "PyTorch", "Neuro-Engineering", "Machine Learning"],
        metrics: "Published BCI System Paper",
        link: "https://medium.com/@aklavyakumr/cognitrack-a-brain-computer-interface-for-objective-monitoring-of-cognitive-fatigue-and-student-2f5b4cb5b3b6?sharedUserId=aklavyakumr",
        linkText: "Read CogniTrack Article on Medium"
    },
    {
        id: "fbla-national-top10",
        title: "FBLA Dual National Top 10 & State Championship",
        category: "leadership",
        categoryName: "Leadership & Business",
        status: "National 8th & 10th Place Placer",
        image: "img/fbla.png",
        summary: "8th Place Nationally in Intro to Programming (2025) and 10th Place Nationally in Management Info Systems (2026). 1st Place PA State Champion.",
        details: "Representing CVHS and Region 26 (where Aklavya serves as Regional Treasurer), placed 8th Nationally in Intro to Programming (2025) and 10th Nationally in Management Information Systems (2026) at FBLA NLC. Credly Verified Badge earned. 1st Place PA State Champion in MIS (2026), 3rd Place in Intro to Programming, and 3rd Place in Fundamentals of AI.",
        tags: ["FBLA 8th & 10th National", "PA 1st Place MIS", "Credly Verified", "Python", "SQL", "DECA State Qualifier"],
        metrics: "8th & 10th Place Nationally | Credly Badge Verified",
        link: "https://www.credly.com/badges/4bc863de-348f-409d-92ae-2020ad48edf7/linked_in_profile",
        linkText: "View Credly Verified Badge"
    },
    {
        id: "fbla-intro-programming-game",
        title: "FBLA Game: The Destruction of the Possible Mission Force",
        category: "coding",
        categoryName: "Game & Software Dev",
        status: "National 8th Place Game",
        image: "img/cvcoding.png",
        summary: "Published interactive computer game developed for FBLA Intro to Programming competition, securing 8th Place Nationally.",
        details: "Developed 'The Destruction of the Possible Mission Force', a full game featuring algorithmic logic, custom graphics, and user interactivity. Published live on itch.io with full open-source codebase on GitHub.",
        tags: ["Published Game", "itch.io", "GitHub Open Source", "FBLA National 8th", "Python", "Game Architecture"],
        metrics: "Published on itch.io | National 8th Place",
        link: "https://readingcookiesa.itch.io/the-destruction-of-the-possible-mission-force",
        linkText: "Play Game on itch.io"
    },
    {
        id: "iro-semi-finalist",
        title: "International Research Olympiad (IRO) World Semi-Finalist",
        category: "biotech",
        categoryName: "Research & Science",
        status: "Top 10% in the World",
        image: "img/IRO.jpg",
        summary: "Personally achieved World Semi-Finalist status in the International Research Olympiad, ranking in the Top 10% globally.",
        details: "Competed individually in the International Research Olympiad (IRO), demonstrating advanced experimental design, data analysis, and scientific literature interpretation to achieve World Semi-Finalist recognition (Top 10% in the world). Founder & President of CVHS IRO Club.",
        tags: ["IRO World Semi-Finalist", "Top 10% in World", "Scientific Research", "Data Processing", "CV IRO President"],
        metrics: "Top 10% World Rank (IRO Semi-Finalist)",
        link: "img/IRO.jpg",
        linkText: "View IRO Poster Credentials"
    },
    {
        id: "penn-state-pulse-med",
        title: "Penn State College of Medicine PULSE Scholar",
        category: "biotech",
        categoryName: "Biotechnology & Medicine",
        status: "Selective Medical Pathway",
        image: "img/PULSE.png",
        summary: "Selected for 12-week longitudinal pathway curriculum in Penn State College of Medicine with clinical shadowing & problem-based learning.",
        details: "Competitively selected for Penn State College of Medicine's 12-week PULSE program. Participated in clinical shadowing, interactive medical lectures, and problem-based biomedical research.",
        tags: ["Penn State Medicine", "PULSE Scholar", "Clinical Shadowing", "Biomedical Credential"],
        metrics: "Penn State Medicine PULSE Scholar",
        link: "img/PULSE.png",
        linkText: "View PULSE Certificate"
    },
    {
        id: "cv-coding-club-usaco",
        title: "CV Coding Club Founder & USACO Silver Mentorship",
        category: "coding",
        categoryName: "Competitive Coding",
        status: "President & Founder",
        image: "img/cvcoding.png",
        summary: "Founded CV Coding Club & created curriculum that directly trained 4 students to reach USACO Silver rank.",
        details: "Founded and serves as President of Cumberland Valley High School's Coding Club. Created official website and structured USACO/ACSL curriculum. Taught algorithmic problem solving, training 4 CVHS members to reach USACO Silver rank.",
        tags: ["CV Coding Club President", "4 USACO Silver Students Coached", "C++", "Python", "Algorithms"],
        metrics: "4 USACO Silver Students Trained",
        link: "https://fe4rless233.github.io/CVcodingclub/index.html",
        linkText: "Visit CV Coding Club Website"
    },
    {
        id: "scioly-robot-tour",
        title: "Science Olympiad Robot Tour & National Team Rank",
        category: "robotics",
        categoryName: "Robotics & Engineering",
        status: "National 19th & 20th Team Rank",
        image: "img/robotTour.jpg",
        summary: "Built autonomous Robot Tour vehicle for SciOly; helped CVHS team achieve 19th (2024) and 20th (2025) National Team Rank.",
        details: "Varsity developer and event leader for Cumberland Valley Science Olympiad. Engineered autonomous Robot Tour vehicle (open-source on GitHub). Earned 20+ individual awards & 15+ team awards across UPenn, MIT, Penn State, and Nationals, placing 19th (2024) and 20th (2025) Nationally as a team.",
        tags: ["Robot Tour", "Science Olympiad", "19th & 20th National Team Rank", "GitHub", "Autonomous Hardware"],
        metrics: "19th & 20th National Team Rank",
        link: "https://github.com/Fe4Rless233/Robot-Tour",
        linkText: "Robot Tour GitHub Repository"
    },
    {
        id: "central-pa-foodbank",
        title: "Central PA Food Bank 10+ Year Service Initiative",
        category: "community",
        categoryName: "Community & Culture",
        status: "10+ Years Dedicated",
        image: "img/food.webp",
        summary: "Decade-long sustained fundraising campaigns supporting food relief for 253,000+ monthly Central PA residents.",
        details: "For over 10 consecutive years, Aklavya has spearheaded fundraising and hunger awareness drives for the Central Pennsylvania Food Bank, helping provide nutritious meals to 253,000+ monthly regional residents in need.",
        tags: ["10+ Years Service", "Central PA Food Bank", "253k+ Impact", "Community Leadership"],
        metrics: "10+ Years Sustained Fundraising",
        link: "https://www.centralpafoodbank.org",
        linkText: "Central PA Food Bank Partner Site"
    },
    {
        id: "abha-bengali-community",
        title: "ABHA Bengali Association Junior Patron & Ambassador",
        category: "community",
        categoryName: "Community & Culture",
        status: "Junior Patron & Webmaster",
        image: "img/abha.jpg",
        summary: "Junior Patron for Association of Bengalis in Harrisburg Area (ABHA); created official web portal and raises $300+ annually for charity.",
        details: "Serves as Junior Patron and Cultural Ambassador for ABHA (abhaweb.org). Built the official community web platform, co-hosts annual cultural festivals, and leads fundraising initiatives raising $300+ annually for local charity programs.",
        tags: ["ABHA Junior Patron", "abhaweb.org", "$300+ Raised Annually", "Cultural Ambassador"],
        metrics: "ABHA Junior Patron | $300+ Raised Annually",
        link: "https://abhaweb.org/",
        linkText: "Visit Official ABHA Website (abhaweb.org)"
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
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
}

// --- 5. Scroll Active Navigation Tracking ---
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link-custom");

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 140;

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
        "FTC 8468 The Javengers Lead (Dean's List Semi-Finalist)",
        "International Research Olympiad (IRO) World Semi-Finalist (Top 10%)",
        "FBLA Dual National Top 10 Placer & 1st Place State Champion",
        "Author of CogniTrack: Brain-Computer Interface for Burnout",
        "Penn State College of Medicine PULSE Scholar",
        "CV Coding Club Founder (Coached 4 USACO Silver Students)",
        "SciOly Robot Tour Lead (19th & 20th National Team Rank)"
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

        let speed = isDeleting ? 25 : 60;

        if (!isDeleting && charIdx === current.length) {
            speed = 2200;
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
        <img src="${project.image}" alt="${project.title}" class="img-fluid rounded-3 mb-4 w-100" style="max-height: 300px; object-fit: cover;">
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
