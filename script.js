const projects = [
  {
    title: "Royal Lens Studio",
    category: "WEB_APP",
    description: "Conversion-focused landing pages. Clean UI. Lightning fast. Responsive everywhere.",
    image: "./images/royal lens thumbnail.jpg",
    link: "https://royal-lens-studio.vercel.app/",
    tech: ["REACT JS", "JAVASCRIPT", "HTML", "CSS"]
  },
  {
    title: "Match Frame Editing School",
    category: "WEB_APP",
    description: "Flash typing speed application with real-time WPM tracking and accuracy metrics.",
    image: "./images/match-frame thumbnail.jpg",
    link: "https://matchframe-school.vercel.app/",
    tech: ["REACT JS", "JAVASCRIPT", "HTML", "CSS"]
  },
  {
    title: "Prashanth Fertility",
    category: "WEB_APP",
    description: "Clean product marketing page with modern animations and smooth interactions.",
    image: "./images/prasanth-fertility thumbnail.jpg",
    link: "https://prashanth-fertility.vercel.app/",
    tech: ["HTML", "CSS", "JAVASCRIPT"]
  },
  {
    title: "Siva Sakthi Chemicals",
    category: "WEB_APP",
    description: "Minimal and elegant portfolio design with smooth scroll animations.",
    image: "./images/siva-sakthi thumbnail.jpg",
    link: "https://siva-sakthi-chemical.vercel.app/",
    tech: ["REACT JS", "CSS", "FRAMER MOTION"]
  },
  {
    title: "PortFolio",
    category: "WEB_APP",
    description: "Modern admin dashboard with data visualization and responsive design.",
    image: "./images/portfolio thumbnail.jpg",
    link: "https://chandru231.github.io/Portfolio/",
    tech: ["REACT JS", "JavaScript", "CSS","HTML"]
  }
];

const grid = document.getElementById("projectGrid");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.transitionDelay = `${index * 120}ms`;

  // Format project number with leading zero
  const projectNumber = String(index + 1).padStart(2, '0');
  
  // Generate tech stack HTML
  const techHTML = project.tech.map(t => `<span class="tech-item">${t}</span>`).join('');

  card.innerHTML = `
    <span class="project-number">${projectNumber}</span>
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="content">
      <span class="category-tag">${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">${techHTML}</div>
      <a href="${project.link}" class="demo-link" target="_blank">LIVE DEMO</a>
    </div>
  `;

  card.onclick = (e) => {
    // Prevent double navigation if clicking demo link
    if (!e.target.classList.contains('demo-link')) {
      window.open(project.link, "_blank");
    }
  };
  grid.appendChild(card);

  // trigger animation
  setTimeout(() => {
    card.classList.add("show");
  }, 100);
});
