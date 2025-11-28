import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import searchPropLogo from "../assets/Logo.webp";
import chatLogo from "../assets/chat.png";
import ImageSlider from "../Components/ImageSlider";
export function Home() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxStyle = (speed: number): CSSProperties => ({
    transform: `translateY(${scrollY * speed}px)`,
    transition: "transform 0.1s ease-out",
  });

  const getFadeInStyle = (threshold: number): CSSProperties => ({
    opacity: scrollY > threshold ? 1 : 0,
    transform: scrollY > threshold ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  });

  const styles: { [key: string]: CSSProperties } = {
    container: {
      background:
        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    },
    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      position: "relative",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 8vw, 5rem)",
      fontWeight: "bold",
      marginBottom: "5rem",
      textAlign: "center",
    },
    gradient: {
      background: "linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa)",
      backgroundSize: "200% auto",
      color: "transparent",
      backgroundClip: "text",
      animation: "gradient 3s ease infinite",
    },
    subtitle: {
      fontSize: "clamp(1.2rem, 8vw, 1.5rem)",
      color: "#d1d5db",
    },
    button: {
      padding: "1rem 2rem",
      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
      borderRadius: "9999px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s",
      fontSize: "1rem",
      marginTop: "1rem",
      color: "white",
    },
    buttonSecondary: {
      padding: "1rem 2rem",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "9999px",
      fontWeight: "600",
      border: "0.1px solid rgba(255, 255, 255, 0.1)",
      cursor: "pointer",
      transition: "all 0.3s",
      fontSize: "1rem",
      marginTop: "1rem",
      color: "white",
    },
    projectcard: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s",
      fontSize: "1.1rem",
      fontWeight: "500",
      cursor: "pointer",
      gap: "1rem",
    },
    card: {
      background: "rgba(255, 255, 255, 0.05)",
      padding: "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s",
      fontSize: "1.1rem",
      fontWeight: "500",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
      maxWidth: "1200px",
      width: "100%",
      marginTop: "2rem",
    },
    sectionTitle: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: "bold",
      marginBottom: "2rem",
      textAlign: "center",
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1.04)";
    e.currentTarget.style.boxShadow = "0 20px 60px rgba(59, 130, 246, 0.4)";
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  interface Project {
    name: string;
    desc: string;
    logo?: null | string;
    link?: string;
  }

  const projects: Project[] = [
    {
      name: "Search Property",
      desc: "A real-time interactive app that displays available properties with details like price, property type, BHK and other specifications on the map. Users can mark their own properties for sale on the map and use powerful filters to refine results based on price range, property type etc for a more personalized search experience.",
      logo: searchPropLogo,
      link: "https://searchprop1.onrender.com",
    },
    {
      name: "Ping Me",
      desc: "A real-time chat app to connect with friends and family",
      logo: chatLogo,
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux Toolkit",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Quasar",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg",
    },
    { name: "Pinia", logo: "https://pinia.vuejs.org/logo.svg" },
    { name: "Leaflet.js", logo: "https://logo.svgcdn.com/logos/leaflet.svg" },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "HTML/CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://logo.svgcdn.com/devicon/tailwindcss-original.svg",
    },
  ];

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.section}>
        <div style={getParallaxStyle(-0.3)}>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.gradient}>Gaurav Gawas</span>
          </h1>

          <p style={styles.subtitle}>Software Engineer</p>

          <p style={{ color: "#9ca3af" }}>
            3+ years of crafting beautiful interfaces and scalable solutions
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button
              style={styles.button}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              View My Work →
            </button>
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <button
              style={styles.buttonSecondary}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={styles.section}>
        <div
          style={{ maxWidth: "1200px", width: "100%", ...getFadeInStyle(600) }}
        >
          <h2 style={styles.sectionTitle}>
            Building digital experiences that{" "}
            <span style={styles.gradient}>matter</span>
          </h2>

          <div style={styles.grid}>
            <div
              style={styles.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                I'm a software developer with{" "}
                <span style={{ color: "#60a5fa", fontWeight: "bold" }}>
                  3+ years of experience
                </span>{" "}
                specializing in frontend development using React.js and Vue.js,
                and backend services with Java.
              </p>
            </div>

            <div
              style={styles.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                I love crafting seamless UI/UX and clean, efficient APIs that
                bring ideas to life and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={styles.section}>
        <div
          style={{ maxWidth: "1200px", width: "100%", ...getFadeInStyle(1500) }}
        >
          <h2 style={styles.sectionTitle}>
            My <span style={styles.gradient}>Toolkit</span>
          </h2>

          <div style={styles.grid}>
            {skills.map((skill) => (
              <div
                key={skill.name}
                style={styles.card}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>{skill.name}</span>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{ width: "3rem" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={styles.section}>
        <div
          style={{ maxWidth: "1200px", width: "100%", ...getFadeInStyle(2600) }}
        >
          <h2 style={styles.sectionTitle}>
            Recent <span style={styles.gradient}>Project</span>
          </h2>

          <div style={styles.grid}>
            {projects.map((project) => (
              <a href={project.link} target="_blank">
                <div
                  key={project.name}
                  style={styles.projectcard}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt="Logo"
                      style={{
                        width: "8rem",
                        height: "8rem",
                      }}
                    />
                  )}
                  <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
                    {project.desc}
                  </p>

                  {project.link ? (
                    <p
                      style={{
                        color: "#4ca3af",
                        lineHeight: "1.6",
                        fontSize: "1rem",
                      }}
                    >
                      Click to view the app
                    </p>
                  ) : (
                    <>
                      <ImageSlider />
                      <p
                        style={{
                          color: "#4ca3af",
                          lineHeight: "1.6",
                          fontSize: "1rem",
                        }}
                      >
                        Swipe &gt;&gt;
                      </p>
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={styles.section}>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
            ...getFadeInStyle(3500),
          }}
        >
          <h2 style={styles.sectionTitle}>
            Let's create something <span style={styles.gradient}>amazing</span>
          </h2>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            Interested in collaborating or hiring? I'm always open to discussing
            new projects and opportunities.
          </p>

          <a
            href="mailto:gauravgawas9999@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <button
              style={styles.button}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Say Hello
            </button>
          </a>

          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
              © 2025 Gaurav Gawas. Crafted with passion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
