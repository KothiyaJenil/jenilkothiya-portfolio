/* =========================================================
   PORTFOLIO MAIN JAVASCRIPT
   - Portfolio data (mirrors Mongoose schema)
   - Particle canvas animation
   - Typed.js role text
   - Section rendering (technologies, projects, education, certs)
   - Scroll effects, filters, modals, contact form, counters
   ========================================================= */

// ─── Portfolio Data ──────────────────────────────────────────
const portfolioData = {
  profile: {
    name: "Jenil Developer",
    tagline: "Building digital experiences that matter",
    phone: "+91 98765 43210",
    GitHub: "https://github.com/jenildev",
    linkedin: "https://linkedin.com/in/jenildev",
    instagram: "https://instagram.com/jenildev",
    email: "jenil@example.com",
    aboutMe: `I'm a passionate Full Stack Developer specializing in the MERN stack and Flutter, with a knack for crafting seamless digital experiences. I love turning complex problems into elegant, user-friendly solutions — whether it's a high-performance REST API, a responsive React dashboard, or a beautiful cross-platform Flutter app.\n\nWith a strong foundation in modern JavaScript, Node.js, MongoDB, and Dart, I bring ideas to life from the backend database all the way to the polished UI on any platform.`,
    profileImage: "assets/profile.jpg",
    resumeLink: "#",
    location: "India",
    availability: "Open to Work",
    experience: "2+ Years",
    projects: "15+",

    technologies: [
      { language: "MongoDB",    icon: "devicon-mongodb-plain colored" },
      { language: "Express.js", icon: "devicon-express-original" },
      { language: "React.js",   icon: "devicon-react-original colored" },
      { language: "Node.js",    icon: "devicon-nodejs-plain colored" },
      { language: "Flutter",    icon: "devicon-flutter-plain colored" },
      { language: "Dart",       icon: "devicon-dart-plain colored" },
      { language: "JavaScript", icon: "devicon-javascript-plain colored" },
      { language: "TypeScript", icon: "devicon-typescript-plain colored" },
      { language: "HTML5",      icon: "devicon-html5-plain colored" },
      { language: "CSS3",       icon: "devicon-css3-plain colored" },
      { language: "Git",        icon: "devicon-git-plain colored" },
      { language: "Docker",     icon: "devicon-docker-plain colored" },
      { language: "Firebase",   icon: "devicon-firebase-plain colored" },
      { language: "Postman",    icon: "devicon-postman-plain colored" },
      { language: "VS Code",    icon: "devicon-vscode-plain colored" },
      { language: "MySQL",      icon: "devicon-mysql-plain colored" },
    ],

    educations: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Gujarat Technological University",
        duration: "2022 – 2025",
        grade: "8.7 CGPA"
      },
      {
        degree: "Higher Secondary Certificate (HSC) — Science",
        institution: "Gujarat Secondary & Higher Secondary Education Board",
        duration: "2020 – 2022",
        grade: "82%"
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Gujarat Secondary & Higher Secondary Education Board",
        duration: "2019 – 2020",
        grade: "90%"
      }
    ],

    certificates: [
      {
        title: "The Complete Node.js Developer Course",
        description: "Mastered Node.js, Express, MongoDB, REST APIs, authentication, and deployment. Built 3 real-world projects from scratch.",
        issuedAt: "December 2024"
      },
      {
        title: "React — The Complete Guide (Hooks, Router, Redux)",
        description: "Advanced React patterns including hooks, context API, Redux Toolkit, React Router v6, and performance optimization techniques.",
        issuedAt: "October 2024"
      },
      {
        title: "Flutter & Dart — The Complete Guide",
        description: "Built production-ready cross-platform mobile apps with Flutter, state management (Provider, Riverpod), and Firebase integration.",
        issuedAt: "August 2024"
      },
      {
        title: "MongoDB — The Developer Data Platform",
        description: "Covered schema design, aggregation pipelines, indexing strategies, Atlas cloud deployment, and performance tuning.",
        issuedAt: "June 2024"
      },
      {
        title: "JavaScript — Zero to Expert",
        description: "Deep dive into modern JavaScript: ES6+, async/await, closures, prototypes, data structures, and algorithms.",
        issuedAt: "March 2024"
      },
      {
        title: "Git & GitHub Bootcamp",
        description: "Professional version control workflows: branching strategies, rebasing, cherry-picking, CI/CD integration, and collaborative development.",
        issuedAt: "January 2024"
      }
    ]
  },

  projects: [
    {
      title: "ShopMERN — E-Commerce Platform",
      slug: "shop-mern",
      descriptions: "A full-featured e-commerce platform built with the MERN stack. Features include product listings, shopping cart, Razorpay payment integration, JWT authentication, admin order management, and real-time inventory tracking. Deployed on AWS EC2 with Nginx reverse proxy.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Razorpay"],
      githubUrl: "https://github.com/jenildev/shop-mern",
      liveUrl: "#",
      images: "assets/project-ecommerce.jpg",
      status: "Published",
      category: "web"
    },
    {
      title: "TaskFlow — Flutter Task Manager",
      slug: "task-flow",
      descriptions: "A beautiful cross-platform task management app built in Flutter with a Node.js + MongoDB backend. Features Kanban boards, priority tagging, push notifications via Firebase, team collaboration, and offline-first data sync.",
      technologies: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/jenildev/task-flow",
      liveUrl: "#",
      images: "assets/project-taskmanager.jpg",
      status: "Published",
      category: "flutter"
    },
    {
      title: "ChatSphere — Real-Time Chat App",
      slug: "chat-sphere",
      descriptions: "Real-time messaging application powered by Socket.io and React. Supports private & group chats, file sharing, read receipts, online presence, and end-to-end encrypted messages. Flutter mobile client available.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Flutter"],
      githubUrl: "https://github.com/jenildev/chat-sphere",
      liveUrl: "#",
      images: "assets/project-chat.jpg",
      status: "Published",
      category: "web"
    },
    {
      title: "DevBlog — Markdown CMS",
      slug: "dev-blog",
      descriptions: "A developer-focused blogging platform with Markdown support, syntax-highlighted code blocks, tagging system, SEO optimization, and an admin CMS. Built with Express and React with server-side rendering.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Markdown"],
      githubUrl: "https://github.com/jenildev/dev-blog",
      liveUrl: "#",
      images: "assets/project-ecommerce.jpg",
      status: "Published",
      category: "web"
    },
    {
      title: "FitTrack — Fitness Flutter App",
      slug: "fit-track",
      descriptions: "A comprehensive fitness tracking mobile app with workout logging, progress charts, nutrition tracker, BMI calculator, and AI-powered workout recommendations. Integrated with wearable device APIs.",
      technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Charts"],
      githubUrl: "https://github.com/jenildev/fit-track",
      liveUrl: "#",
      images: "assets/project-taskmanager.jpg",
      status: "Published",
      category: "flutter"
    },
    {
      title: "AuthGuard — Auth Microservice",
      slug: "auth-guard",
      descriptions: "A production-ready authentication microservice supporting JWT, OAuth2 (Google, GitHub), role-based access control, rate limiting, email verification, and 2FA. Fully documented API with Swagger UI.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2"],
      githubUrl: "https://github.com/jenildev/auth-guard",
      liveUrl: "#",
      images: "assets/project-chat.jpg",
      status: "Draft",
      category: "backend"
    }
  ]
};

// ─── Particles Canvas ────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 90;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.5 + 0.15,
    pulse: Math.random() * Math.PI * 2
  }));

  let mouse = { x: -9999, y: -9999 };
  canvas.closest('section')?.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.pulse += 0.02;
      const opacityAnim = p.opacity + Math.sin(p.pulse) * 0.1;

      // Glow dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96,165,250,${opacityAnim})`;
      ctx.fill();

      // Connection lines to nearby particles
      particles.forEach(q => {
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 120 && dist > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(37,99,235,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // Attract to mouse
      const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
      const md  = Math.hypot(mdx, mdy);
      if (md < 140) {
        p.x += mdx * 0.008;
        p.y += mdy * 0.008;
      }

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ─── Typed.js Role Animator ──────────────────────────────────
function initTyped() {
  const el = document.getElementById('typed-role');
  if (!el) return;
  const roles = [
    'MERN Stack Developer',
    'Flutter Developer',
    'Full Stack Engineer',
    'React.js Developer',
    'Node.js Developer',
    'Mobile App Developer'
  ];
  let i = 0, j = 0, deleting = false;
  const cursor = document.getElementById('typed-cursor');

  function type() {
    const current = roles[i];
    if (!deleting) {
      el.textContent = current.slice(0, ++j);
      if (j === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --j);
      if (j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 55 : 95);
  }
  type();
}

// ─── Counter Animation ───────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(el, parseInt(el.dataset.counter));
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
  });
}

// ─── Render Technologies ─────────────────────────────────────
function renderTechnologies() {
  const grid = document.getElementById('tech-grid');
  if (!grid) return;
  grid.innerHTML = portfolioData.profile.technologies.map((t, idx) => `
    <div class="tech-card" data-aos="zoom-in" data-aos-delay="${(idx % 8) * 60}">
      <i class="${t.icon} tech-icon"></i>
      <div class="tech-name">${t.language}</div>
    </div>
  `).join('');
}

// ─── Render Projects ─────────────────────────────────────────
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const projects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  grid.innerHTML = '';
  projects.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((idx % 3) * 100));
    card.innerHTML = `
      <div class="project-img-wrap">
        <img src="${p.images}" alt="${p.title}" class="project-img" loading="lazy" onerror="this.src='assets/project-ecommerce.jpg'">
        <div class="project-img-overlay"></div>
        <span class="project-status status-${p.status.toLowerCase()}">${p.status}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.descriptions}</p>
        <div class="project-tags">
          ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.githubUrl ? `<a href="${p.githubUrl}" class="btn-sm-glow" target="_blank" rel="noopener"><i class="bi bi-github"></i> Code</a>` : ''}
          ${p.liveUrl && p.liveUrl !== '#' ? `<a href="${p.liveUrl}" class="btn-sm-glow" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Live</a>` : ''}
          <button class="btn-sm-glow ms-auto" onclick="openProjectModal(${portfolioData.projects.indexOf(p)})"><i class="bi bi-eye"></i> Details</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  if (window.AOS) AOS.refresh();
}

// ─── Project Modal ───────────────────────────────────────────
window.openProjectModal = function(idx) {
  const p = portfolioData.projects[idx];
  if (!p) return;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-img').src = p.images;
  document.getElementById('modal-img').alt = p.title;
  document.getElementById('modal-desc').textContent = p.descriptions;
  document.getElementById('modal-tags').innerHTML = p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const links = document.getElementById('modal-links');
  links.innerHTML = '';
  if (p.githubUrl) links.innerHTML += `<a href="${p.githubUrl}" class="btn-sm-glow" target="_blank"><i class="bi bi-github"></i> View Code</a>`;
  if (p.liveUrl && p.liveUrl !== '#') links.innerHTML += `<a href="${p.liveUrl}" class="btn-sm-glow" target="_blank"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>`;
  links.innerHTML += `<span class="project-status status-${p.status.toLowerCase()} ms-2">${p.status}</span>`;
  const bsModal = new bootstrap.Modal(document.getElementById('projectModal'));
  bsModal.show();
};

// ─── Render Education ────────────────────────────────────────
function renderEducation() {
  const timeline = document.getElementById('education-timeline');
  if (!timeline) return;
  timeline.innerHTML = portfolioData.profile.educations.map((e, idx) => `
    <div class="timeline-item" data-aos="fade-right" data-aos-delay="${idx * 120}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-institution"><i class="bi bi-building me-1"></i>${e.institution}</div>
        <div class="edu-meta">
          <span class="edu-badge"><i class="bi bi-calendar3"></i>${e.duration}</span>
          <span class="edu-badge"><i class="bi bi-award"></i>${e.grade}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ─── Render Certificates ─────────────────────────────────────
function renderCertificates() {
  const grid = document.getElementById('cert-grid');
  if (!grid) return;
  const icons = ['🏆', '⚛️', '📱', '🍃', '✨', '🔀'];
  grid.innerHTML = portfolioData.profile.certificates.map((c, idx) => `
    <div class="cert-card" data-aos="fade-up" data-aos-delay="${(idx % 3) * 100}">
      <div class="cert-icon">${icons[idx % icons.length]}</div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-desc">${c.description}</div>
      <div class="cert-date"><i class="bi bi-calendar-check"></i> ${c.issuedAt}</div>
    </div>
  `).join('');
}

// ─── Populate Contact & About ────────────────────────────────
function populateContact() {
  const { profile } = portfolioData;
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHref = (id, val) => { const el = document.getElementById(id); if (el) el.href = val; };

  setTxt('contact-phone', profile.phone);
  setTxt('contact-email', profile.email);
  setHref('link-github', profile.GitHub);
  setHref('link-linkedin', profile.linkedin);
  setHref('link-instagram', profile.instagram);
  setHref('about-github', profile.GitHub);
  setHref('about-linkedin', profile.linkedin);
  setHref('about-instagram', profile.instagram);
  setTxt('about-me-text', profile.aboutMe.split('\n\n')[0]);
  setTxt('about-me-text2', profile.aboutMe.split('\n\n')[1] || '');

  const resumeLinks = document.querySelectorAll('.resume-link');
  resumeLinks.forEach(l => { l.href = profile.resumeLink; });

  setHref('footer-github', profile.GitHub);
  setHref('footer-linkedin', profile.linkedin);
  setHref('footer-instagram', profile.instagram);
}

// ─── Navbar Scroll Effect ─────────────────────────────────────
function initNavbar() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}

// ─── Back to Top ─────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── Project Filter ───────────────────────────────────────────
function initProjectFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ─── Contact Form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = origText;
      btn.disabled = false;
      form.reset();
      showToast('✅ Message sent! I\'ll get back to you soon.', 'success');
    }, 1600);
  });
}

// ─── Toast ────────────────────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const id = 'toast-' + Date.now();
  const colors = { success: '#34d399', error: '#f87171', info: '#60a5fa' };

  container.insertAdjacentHTML('beforeend', `
    <div id="${id}" class="custom-toast toast align-items-center show mb-2" role="alert">
      <div class="d-flex align-items-center p-3 gap-2">
        <span style="color:${colors[type]};font-size:1rem;">●</span>
        <span style="font-size:0.92rem;">${message}</span>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close" style="filter:invert(1);opacity:0.6;"></button>
      </div>
    </div>
  `);
  setTimeout(() => { document.getElementById(id)?.remove(); }, 4000);
}

// ─── Smooth scroll for mobile nav close ──────────────────────
function initMobileNav() {
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const toggler = document.querySelector('.navbar-toggler');
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse?.classList.contains('show')) toggler?.click();
    });
  });
}

// ─── Init AOS ─────────────────────────────────────────────────
function initAOS() {
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }
}

// ─── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initParticles();
  initTyped();
  initCounters();
  renderTechnologies();
  renderProjects();
  renderEducation();
  renderCertificates();
  populateContact();
  initNavbar();
  initBackToTop();
  initProjectFilter();
  initContactForm();
  initMobileNav();
});
