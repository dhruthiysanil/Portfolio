"use client"
import { useState, useEffect } from "react"
import { Linkedin, Mail, Github, ExternalLink, Award, Star, Zap, Target, Rocket, Gem, Flame } from "lucide-react"

export default function AnimatedPortfolio() {
  const [animationStep, setAnimationStep] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 800) // "Hel" appears
    const timer2 = setTimeout(() => setAnimationStep(2), 2200) // "lo" appears
    const timer3 = setTimeout(() => setAnimationStep(3), 3200) // "Hello" combined
    const timer4 = setTimeout(() => setAnimationStep(4), 4500) // Loading animation
    const timer5 = setTimeout(() => setAnimationStep(5), 8000) // Homepage opens

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  // Loading progress animation
  useEffect(() => {
    if (animationStep === 4) {
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 70) // Update every 70ms to reach 100% in ~3.5 seconds

      return () => clearInterval(progressInterval)
    }
  }, [animationStep])

  // Enhanced mouse tracking with movement detection
  useEffect(() => {
    let moveTimeout: ReturnType<typeof setTimeout>
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      // Clear existing timeout
      clearTimeout(moveTimeout)
      // Set mouse as not moving after 100ms of no movement
      moveTimeout = setTimeout(() => {
        setIsMouseMoving(false)
      }, 100)
    }

    if (animationStep >= 5) {
      document.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(moveTimeout)
    }
  }, [animationStep])

  const skillsData = {
    "Programming Languages & Database": ["Java", "Python", "JavaScript", "SQL", "HTML5", "CSS3", "MySQL"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Selenium WebDriver", "PyTest"],
    "Automation & Testing Tools": [
      "Selenium",
      "Postman",
      "Requests (Python)",
      "Manual Testing",
      "Test Case Design",
      "Regression Testing",
      "API Testing",
      "UI Testing",
    ],
    "CI/CD & DevOps": ["Jenkins", "Docker"],
    "Version Control": ["Git", "GitHub"],
    "Design & Reporting Tools": ["Canva", "Adobe Photoshop", "Power BI", "MS Excel (Pivot, VLOOKUP, Charts)"],
    "Other Skills": ["Manual Testing", "Test Case Design", "Bug Reporting", "Strong Debugging & Analytical Skills"],
  }

  const experienceData = [
    {
      company: "Nethra Tech",
      position: "Quality Assurance Intern",
      type: "Internship",
      duration: "June 2025 – Present",
      description:
        "Performed manual testing on live projects; created test cases and bug reports and conducted automation testing using Selenium to validate core features.",
    },
    {
      company: "Abhimo Technologies",
      position: "Software Engineer Intern",
      type: "Internship",
      duration: "January 2025 – May 2025",
      description:
        "Developed a responsive website using HTML, CSS, JavaScript, and React.js focusing on user experience.",
    },
  ]

  const projectsData = [
    {
      name: "HelloKopper",
      subtitle: "Website Testing",
      technologies: "Manual Testing, Selenium, Postman",
      description:
        "Performed manual testing, wrote test cases, logged bugs, and ensured website quality through structured testing and automated key flows using Selenium and conducted API testing with Postman to validate backend services.",
    },
    {
      name: "FundFlow",
      subtitle: "Crowdfunding Platform",
      technologies: "React.js, Node.js, Express.js, MySQL",
      description:
        "Developed features for campaign creation, real-time donation tracking, and user feedback on a secure and user-friendly crowdfunding platform.",
    },
    {
      name: "Thriftstore",
      subtitle: "E-commerce Website",
      technologies: "HTML5, CSS3, JavaScript, PHP, MySQL",
      description:
        "Built a comprehensive e-commerce platform for buying and selling second-hand products. Features include user authentication, product listings, search functionality, shopping cart, and secure payment integration using PHP backend and MySQL database.",
    },
  ]

  const certificatesData = [
    {
      name: "Building Test Automation Framework using Selenium and TestNG",
      url: "https://www.coursera.org/account/accomplishments/verify/UA1I6Z5N17UL",
      icon: Target,
      category: "Automation Testing",
      issuer: "Coursera",
    },
    {
      name: "How to create a Jira SCRUM project",
      url: "https://www.coursera.org/account/accomplishments/verify/3QSQ2D0EZHLJ",
      icon: Zap,
      category: "Project Management",
      issuer: "Coursera",
    },
    {
      name: "Introduction to Front-End Development",
      url: "https://www.coursera.org/account/accomplishments/verify/7P4DNZYUEBA5",
      icon: Rocket,
      category: "Web Development",
      issuer: "Coursera",
    },
    {
      name: "React JS Tutorial",
      url: "https://olympus.mygreatlearning.com/courses/52045/certificate?pb_id=581",
      icon: Gem,
      category: "Frontend Framework",
      issuer: "Great Learning",
    },
    {
      name: "SQL Basic HackerRank",
      url: "https://www.hackerrank.com/certificates/iframe/b62e5d9f6a6e",
      icon: Flame,
      category: "Database",
      issuer: "HackerRank",
    },
    {
      name: "Build Your First GUI App With Java",
      url: "https://www.coursera.org/account/accomplishments/verify/GFYQ3MGANJUJ",
      icon: Star,
      category: "Programming",
      issuer: "Coursera",
    },
  ]

  const handleNavClick = (section: string) => {
    setActiveSection(section.toLowerCase())
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your resume PDF to the public folder
    link.download = "Dhruthi_Y_Sanil_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Enhanced Mouse Effects */}
      {animationStep >= 5 && (
        <>
          {/* Main Spotlight Effect */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
              background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(96, 165, 250, ${isMouseMoving ? 0.15 : 0.08}) 0%,
                rgba(96, 165, 250, ${isMouseMoving ? 0.1 : 0.05}) 20%,
                rgba(168, 139, 250, ${isMouseMoving ? 0.08 : 0.03}) 40%,
                transparent 70%)`,
              transition: "background 0.05s ease-out",
            }}
          />
          {/* Secondary Glow Effect */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 2,
              background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(96, 165, 250, ${isMouseMoving ? 0.25 : 0.1}) 0%,
                rgba(245, 158, 11, ${isMouseMoving ? 0.15 : 0.05}) 30%,
                transparent 60%)`,
              transition: "background 0.03s ease-out",
            }}
          />
          {/* Trailing Particles */}
          <div
            style={{
              position: "fixed",
              left: mousePosition.x - 2,
              top: mousePosition.y - 2,
              width: "4px",
              height: "4px",
              backgroundColor: "#60a5fa",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 3,
              opacity: isMouseMoving ? 1 : 0,
              transform: `scale(${isMouseMoving ? 1.5 : 1})`,
              transition: "all 0.1s ease-out",
              boxShadow: `0 0 20px #60a5fa, 0 0 40px #60a5fa, 0 0 60px #60a5fa`,
            }}
          />
          {/* Ripple Effect */}
          <div
            style={{
              position: "fixed",
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: "50px",
              height: "50px",
              border: `2px solid rgba(96, 165, 250, ${isMouseMoving ? 0.6 : 0.2})`,
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 3,
              transform: `scale(${isMouseMoving ? 1.2 : 0.8})`,
              transition: "all 0.15s ease-out",
              animation: isMouseMoving ? "ripple 0.6s ease-out infinite" : "none",
            }}
          />
          {/* Outer Ring */}
          <div
            style={{
              position: "fixed",
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
              width: "80px",
              height: "80px",
              border: `1px solid rgba(168, 139, 250, ${isMouseMoving ? 0.4 : 0.1})`,
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 3,
              transform: `scale(${isMouseMoving ? 1.3 : 0.9}) rotate(${mousePosition.x * 0.1}deg)`,
              transition: "all 0.2s ease-out",
            }}
          />
          {/* Floating Orbs */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "fixed",
                left: mousePosition.x + Math.sin(Date.now() * 0.001 + i * 2) * 60 - 3,
                top: mousePosition.y + Math.cos(Date.now() * 0.001 + i * 2) * 60 - 3,
                width: "6px",
                height: "6px",
                backgroundColor: ["#60a5fa", "#a78bfa", "#f59e0b"][i],
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 3,
                opacity: isMouseMoving ? 0.8 : 0.3,
                transform: `scale(${isMouseMoving ? 1.2 : 0.8})`,
                transition: "all 0.1s ease-out",
                boxShadow: `0 0 10px ${["#60a5fa", "#a78bfa", "#f59e0b"][i]}`,
              }}
            />
          ))}
        </>
      )}

      {/* Hello Animation Screen */}
      {animationStep < 4 && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", position: "relative" }}>
            {/* Hello Animation Container */}
            <div
              style={{
                position: "relative",
                height: "200px",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* "Hel" from left */}
              {animationStep >= 1 && animationStep < 3 && (
                <div
                  style={{
                    position: "absolute",
                    fontSize: "clamp(4rem, 12vw, 8rem)",
                    fontWeight: "bold",
                    color: "#666",
                    transform: animationStep >= 1 ? "translateX(-60px)" : "translateX(-1000px)",
                    opacity: animationStep >= 1 ? 1 : 0,
                    transition: "all 0.8s ease-out",
                    userSelect: "none",
                  }}
                >
                  Hel
                </div>
              )}
              {/* "lo" from right */}
              {animationStep >= 2 && animationStep < 3 && (
                <div
                  style={{
                    position: "absolute",
                    fontSize: "clamp(4rem, 12vw, 8rem)",
                    fontWeight: "bold",
                    color: "#666",
                    transform: animationStep >= 2 ? "translateX(60px)" : "translateX(1000px)",
                    opacity: animationStep >= 2 ? 1 : 0,
                    transition: "all 0.8s ease-out 0.4s",
                    userSelect: "none",
                  }}
                >
                  lo
                </div>
              )}
              {/* "Hello" combined */}
              {animationStep >= 3 && (
                <div
                  style={{
                    fontSize: "clamp(4rem, 12vw, 8rem)",
                    fontWeight: "bold",
                    color: "#ccc",
                    transform: animationStep >= 3 ? "scale(1)" : "scale(1.2)",
                    opacity: animationStep >= 3 ? 1 : 0,
                    transition: "all 0.5s ease-out",
                    userSelect: "none",
                  }}
                >
                  Hello
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Unique Loading Animation Screen */}
      {animationStep >= 4 && animationStep < 5 && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.5s ease-in",
            position: "relative",
          }}
        >
          {/* DNA Helix Loading Animation */}
          <div
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              marginBottom: "3rem",
            }}
          >
            {/* Outer rotating ring */}
            <div
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                border: "2px solid transparent",
                borderTop: "2px solid #60a5fa",
                borderRight: "2px solid #a78bfa",
                borderRadius: "50%",
                animation: "rotate 2s linear infinite",
              }}
            />
            {/* Middle rotating ring */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                width: "70px",
                height: "70px",
                border: "2px solid transparent",
                borderTop: "2px solid #f59e0b",
                borderLeft: "2px solid #ef4444",
                borderRadius: "50%",
                animation: "rotateReverse 1.5s linear infinite",
              }}
            />
            {/* Inner pulsing dot */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "40px",
                width: "20px",
                height: "20px",
                backgroundColor: "#60a5fa",
                borderRadius: "50%",
                animation: "pulse 1s ease-in-out infinite",
              }}
            />
            {/* Orbiting particles */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "6px",
                  backgroundColor: ["#60a5fa", "#a78bfa", "#f59e0b", "#ef4444"][i],
                  borderRadius: "50%",
                  top: "47px",
                  left: "47px",
                  transformOrigin: "3px 3px",
                  animation: `orbit 3s linear infinite ${i * 0.75}s`,
                }}
              />
            ))}
          </div>
          {/* Loading Text with Typewriter Effect */}
          <div
            style={{
              fontSize: "1.5rem",
              color: "#60a5fa",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            <span style={{ animation: "typewriter 2s steps(20) infinite" }}>Initializing Portfolio...</span>
          </div>
          {/* Progress Bar */}
          <div
            style={{
              width: "300px",
              height: "4px",
              backgroundColor: "#333",
              borderRadius: "2px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f59e0b)",
                borderRadius: "2px",
                width: `${loadingProgress}%`,
                transition: "width 0.1s ease-out",
              }}
            />
          </div>
          {/* Loading Percentage */}
          <div
            style={{
              fontSize: "1rem",
              color: "#ccc",
            }}
          >
            <span>{loadingProgress}%</span>
          </div>
        </div>
      )}

      {/* Homepage */}
      {animationStep >= 5 && (
        <div
          style={{
            minHeight: "100vh",
            animation: "slideUp 1s ease-out",
            position: "relative",
            zIndex: 10,
            overflow: activeSection !== "home" ? "auto" : "hidden",
          }}
        >
          {/* Navigation Header */}
          <header
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 50,
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(15px)",
              borderBottom: "1px solid #333",
              padding: "1rem 0",
              animation: "slideDown 0.8s ease-out 0.5s both",
              transform: "translateY(-100px)",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Logo/Name on Left */}
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onClick={() => handleNavClick("home")}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement
                  target.style.transform = "scale(1.05)"
                  target.style.filter = "drop-shadow(0 0 15px rgba(96, 165, 250, 0.8))"
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement
                  target.style.transform = "scale(1)"
                  target.style.filter = "none"
                }}
              >
                Dhruthi
              </div>
              {/* Navigation on Right */}
              <nav style={{ display: "flex", gap: "2.5rem" }}>
                {["About", "Skills", "Projects", "Experience", "Certificates"].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    style={{
                      background: "none",
                      border: "none",
                      color: activeSection === item.toLowerCase() ? "#60a5fa" : "#ccc",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      position: "relative",
                      transition: "all 0.3s ease",
                      animation: `fadeInNav 0.5s ease-out ${0.8 + index * 0.1}s both`,
                      opacity: 0,
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.color = "#60a5fa"
                      target.style.background = "rgba(96, 165, 250, 0.15)"
                      target.style.transform = "translateY(-3px) scale(1.05)"
                      target.style.boxShadow = "0 8px 25px rgba(96, 165, 250, 0.3)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.color = activeSection === item.toLowerCase() ? "#60a5fa" : "#ccc"
                      target.style.background = "transparent"
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                    }}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </header>

          {/* Main Content */}
          {activeSection === "home" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "800px",
                  padding: "0 2rem",
                }}
              >
                {/* Main Greeting */}
                <div
                  style={{
                    animation: "fadeInUp 1s ease-out 1s both",
                    transform: "translateY(30px)",
                    opacity: 0,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(2rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    Hey, I am Dhruthi
                  </h1>
                  <h2
                    style={{
                      fontSize: "clamp(1.2rem, 4vw, 2rem)",
                      fontWeight: "600",
                      color: "#ccc",
                      marginBottom: "2rem",
                    }}
                  >
                    Tester & Web Developer
                  </h2>
                </div>
                {/* Description */}
                <div
                  style={{
                    animation: "fadeInUp 1s ease-out 1.3s both",
                    transform: "translateY(30px)",
                    opacity: 0,
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      color: "#999",
                      lineHeight: "1.6",
                      marginBottom: "3rem",
                    }}
                  >
                    
                  </p>
                </div>
                {/* Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                    animation: "fadeInUp 1s ease-out 1.6s both",
                    transform: "translateY(30px)",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={handleResumeDownload}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    Download Resume
                  </button>
                  {/* Social Media Links */}
                  <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <a
                      href="https://www.linkedin.com/in/dhruthi-y-sanil-1ab367288/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#60a5fa",
                        fontSize: "1.8rem",
                        transition: "all 0.3s ease",
                        padding: "0.5rem",
                        borderRadius: "50%",
                        background: "rgba(96, 165, 250, 0.1)",
                        border: "1px solid rgba(96, 165, 250, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(-3px) scale(1.1)"
                        target.style.boxShadow = "0 10px 20px rgba(96, 165, 250, 0.4)"
                        target.style.background = "rgba(96, 165, 250, 0.2)"
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(0) scale(1)"
                        target.style.boxShadow = "none"
                        target.style.background = "rgba(96, 165, 250, 0.1)"
                      }}
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:dhruthiysanil123@gmail.com"
                      style={{
                        color: "#f59e0b",
                        fontSize: "1.8rem",
                        transition: "all 0.3s ease",
                        padding: "0.5rem",
                        borderRadius: "50%",
                        background: "rgba(245, 158, 11, 0.1)",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(-3px) scale(1.1)"
                        target.style.boxShadow = "0 10px 20px rgba(245, 158, 11, 0.4)"
                        target.style.background = "rgba(245, 158, 11, 0.2)"
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(0) scale(1)"
                        target.style.boxShadow = "none"
                        target.style.background = "rgba(245, 158, 11, 0.1)"
                      }}
                    >
                      <Mail size={24} />
                    </a>
                    <a
                      href="https://github.com/dhruthiysanil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#a78bfa",
                        fontSize: "1.8rem",
                        transition: "all 0.3s ease",
                        padding: "0.5rem",
                        borderRadius: "50%",
                        background: "rgba(167, 139, 250, 0.1)",
                        border: "1px solid rgba(167, 139, 250, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(-3px) scale(1.1)"
                        target.style.boxShadow = "0 10px 20px rgba(167, 139, 250, 0.4)"
                        target.style.background = "rgba(167, 139, 250, 0.2)"
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.transform = "translateY(0) scale(1)"
                        target.style.boxShadow = "none"
                        target.style.background = "rgba(167, 139, 250, 0.1)"
                      }}
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                padding: "120px 2rem 4rem",
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <div
                style={{
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                {/* About Header */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    animation: "fadeInUp 1s ease-out 0.2s both",
                    opacity: 0,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    About Me
                  </h1>
                </div>
                {/* About Content */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: "4rem",
                    alignItems: "center",
                    animation: "fadeInUp 1s ease-out 0.4s both",
                    opacity: 0,
                  }}
                >
                  {/* Profile Image */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                        padding: "4px",
                        animation: "gradientShift 3s ease infinite",
                      }}
                    >
                      <img
                        src="/pic.jpeg"
                        alt="Dhruthi Y Sanil"
                        style={{
                          width: "272px",
                          height: "272px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "4px solid #000",
                        }}
                      />
                    </div>
                  </div>
                  {/* About Text */}
                  <div>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: "#ccc",
                        lineHeight: "1.8",
                        marginBottom: "2rem",
                        textAlign: "justify",
                      }}
                    >
                      MCA graduate passionate about software quality and user experience, with hands-on experience in
                      manual testing, automation using Selenium, API testing with Postman, and web development using
                      React.js. Built real-world web and QA projects, and committed to delivering high-quality software
                      and contributing to team success.
                    </p>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "#999",
                        lineHeight: "1.7",
                        marginBottom: "2rem",
                        textAlign: "justify",
                      }}
                    >
                      I believe in continuous learning and staying updated with the latest technologies and testing
                      frameworks. My approach combines technical expertise with attention to detail to deliver
                      high-quality software solutions.
                    </p>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "#999",
                        lineHeight: "1.7",
                        textAlign: "justify",
                      }}
                    >
                     
                
                    </p>
                  </div>
                </div>
                {/* Back to Home Button */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "4rem",
                    animation: "fadeInUp 1s ease-out 0.8s both",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={() => handleNavClick("home")}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </main>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                padding: "120px 2rem 4rem",
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {/* Skills Header */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    animation: "fadeInUp 1s ease-out 0.2s both",
                    opacity: 0,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    My Skills
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#999",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "1.6",
                    }}
                  >
                    A comprehensive overview of my technical expertise and professional capabilities
                  </p>
                </div>
                {/* Skills Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    gap: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                    <div
                      key={category}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(96, 165, 250, 0.2)",
                        borderRadius: "15px",
                        padding: "2rem",
                        transition: "all 0.3s ease",
                        animation: `fadeInUp 0.8s ease-out ${0.4 + categoryIndex * 0.1}s both`,
                        opacity: 0,
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.3)"
                        e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.5)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)"
                        e.currentTarget.style.boxShadow = "none"
                        e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.2)"
                      }}
                    >
                      {/* Category Header */}
                      <h3
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          marginBottom: "1.5rem",
                          color: "#60a5fa",
                          position: "relative",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        {category}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "50px",
                            height: "2px",
                            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                            borderRadius: "1px",
                          }}
                        />
                      </h3>
                      {/* Skills List */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.8rem",
                        }}
                      >
                        {skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            style={{
                              background: "rgba(96, 165, 250, 0.1)",
                              color: "#ccc",
                              padding: "0.5rem 1rem",
                              borderRadius: "20px",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              border: "1px solid rgba(96, 165, 250, 0.3)",
                              transition: "all 0.3s ease",
                              cursor: "default",
                              animation: `skillFadeIn 0.5s ease-out ${0.6 + categoryIndex * 0.1 + skillIndex * 0.05}s both`,
                              opacity: 0,
                            }}
                            onMouseEnter={(e) => {
                              const target = e.target as HTMLElement
                              target.style.background = "rgba(96, 165, 250, 0.2)"
                              target.style.color = "#60a5fa"
                              target.style.transform = "translateY(-2px) scale(1.05)"
                              target.style.boxShadow = "0 5px 15px rgba(96, 165, 250, 0.3)"
                              target.style.borderColor = "rgba(96, 165, 250, 0.6)"
                            }}
                            onMouseLeave={(e) => {
                              const target = e.target as HTMLElement
                              target.style.background = "rgba(96, 165, 250, 0.1)"
                              target.style.color = "#ccc"
                              target.style.transform = "translateY(0) scale(1)"
                              target.style.boxShadow = "none"
                              target.style.borderColor = "rgba(96, 165, 250, 0.3)"
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Back to Home Button */}
                <div
                  style={{
                    textAlign: "center",
                    animation: "fadeInUp 1s ease-out 1.2s both",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={() => handleNavClick("home")}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </main>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                padding: "120px 2rem 4rem",
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {/* Projects Header */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    animation: "fadeInUp 1s ease-out 0.2s both",
                    opacity: 0,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    My Projects
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#999",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "1.6",
                    }}
                  >
                    A showcase of my development and testing projects
                  </p>
                </div>
                {/* Projects Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "3rem",
                    marginBottom: "4rem",
                  }}
                >
                  {projectsData.map((project, index) => (
                    <div
                      key={project.name}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(96, 165, 250, 0.2)",
                        borderRadius: "20px",
                        padding: "2.5rem",
                        transition: "all 0.3s ease",
                        animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.2}s both`,
                        opacity: 0,
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-10px) scale(1.02)"
                        e.currentTarget.style.boxShadow = "0 25px 50px rgba(96, 165, 250, 0.3)"
                        e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.5)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)"
                        e.currentTarget.style.boxShadow = "none"
                        e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.2)"
                      }}
                    >
                      {/* Project Header */}
                      <div style={{ marginBottom: "1.5rem" }}>
                        <h3
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#60a5fa",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {project.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "1.1rem",
                            color: "#a78bfa",
                            fontWeight: "500",
                            marginBottom: "1rem",
                          }}
                        >
                          {project.subtitle}
                        </p>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "#f59e0b",
                            background: "rgba(245, 158, 11, 0.1)",
                            padding: "0.5rem 1rem",
                            borderRadius: "15px",
                            border: "1px solid rgba(245, 158, 11, 0.3)",
                            display: "inline-block",
                          }}
                        >
                          {project.technologies}
                        </div>
                      </div>
                      {/* Project Description */}
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#ccc",
                          lineHeight: "1.7",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Back to Home Button */}
                <div
                  style={{
                    textAlign: "center",
                    animation: "fadeInUp 1s ease-out 1s both",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={() => handleNavClick("home")}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </main>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                padding: "120px 2rem 4rem",
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <div
                style={{
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                {/* Experience Header */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    animation: "fadeInUp 1s ease-out 0.2s both",
                    opacity: 0,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    Experience
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#999",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "1.6",
                    }}
                  >
                    My professional journey and internship experiences
                  </p>
                </div>
                {/* Experience Timeline */}
                <div
                  style={{
                    position: "relative",
                    paddingLeft: "2rem",
                  }}
                >
                  {/* Timeline Line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "0",
                      bottom: "0",
                      width: "2px",
                      background: "linear-gradient(180deg, #60a5fa, #a78bfa, #f59e0b)",
                    }}
                  />
                  {experienceData.map((experience, index) => (
                    <div
                      key={experience.company}
                      style={{
                        position: "relative",
                        marginBottom: "3rem",
                        animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.2}s both`,
                        opacity: 0,
                      }}
                    >
                      {/* Timeline Dot */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-2rem",
                          top: "1rem",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: index === 0 ? "#60a5fa" : "#a78bfa",
                          border: "3px solid #000",
                          boxShadow: `0 0 20px ${index === 0 ? "#60a5fa" : "#a78bfa"}`,
                        }}
                      />
                      {/* Experience Card */}
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(96, 165, 250, 0.2)",
                          borderRadius: "15px",
                          padding: "2rem",
                          transition: "all 0.3s ease",
                          marginLeft: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px) scale(1.02)"
                          e.currentTarget.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.3)"
                          e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.5)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)"
                          e.currentTarget.style.boxShadow = "none"
                          e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.2)"
                        }}
                      >
                        {/* Company and Position */}
                        <div style={{ marginBottom: "1rem" }}>
                          <h3
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              color: "#60a5fa",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {experience.company}
                          </h3>
                          <h4
                            style={{
                              fontSize: "1.2rem",
                              color: "#a78bfa",
                              fontWeight: "600",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {experience.position}
                          </h4>
                          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <span
                              style={{
                                fontSize: "0.9rem",
                                color: "#f59e0b",
                                background: "rgba(245, 158, 11, 0.1)",
                                padding: "0.3rem 0.8rem",
                                borderRadius: "12px",
                                border: "1px solid rgba(245, 158, 11, 0.3)",
                              }}
                            >
                              {experience.type}
                            </span>
                            <span
                              style={{
                                fontSize: "0.9rem",
                                color: "#ccc",
                                fontWeight: "500",
                              }}
                            >
                              {experience.duration}
                            </span>
                          </div>
                        </div>
                        {/* Description */}
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#ccc",
                            lineHeight: "1.7",
                          }}
                        >
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Back to Home Button */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                    animation: "fadeInUp 1s ease-out 1s both",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={() => handleNavClick("home")}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </main>
          )}

          {/* Enhanced Certificates Section with More Animations */}
          {activeSection === "certificates" && (
            <main
              style={{
                paddingTop: "120px",
                minHeight: "100vh",
                padding: "120px 2rem 4rem",
                animation: "fadeInUp 0.8s ease-out",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Animated Background Particles */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      backgroundColor: ["#60a5fa", "#a78bfa", "#f59e0b", "#ef4444"][i % 4],
                      borderRadius: "50%",
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `floatingParticles ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {/* Certificates Header with Enhanced Animation */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "4rem",
                    animation: "fadeInUp 1s ease-out 0.2s both",
                    opacity: 0,
                    position: "relative",
                  }}
                >
                  {/* Animated Title Background */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "200px",
                      height: "200px",
                      background: "radial-gradient(circle, rgba(96, 165, 250, 0.1), transparent)",
                      borderRadius: "50%",
                      animation: "breathe 4s ease-in-out infinite",
                      zIndex: -1,
                    }}
                  />
                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite, titleGlow 2s ease-in-out infinite alternate",
                      position: "relative",
                    }}
                  >
                    Certificates & Achievements
                    {/* Sparkle Effects */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          width: "4px",
                          height: "4px",
                          backgroundColor: "#f59e0b",
                          borderRadius: "50%",
                          top: `${20 + Math.random() * 60}%`,
                          left: `${10 + Math.random() * 80}%`,
                          animation: `sparkle ${1 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
                          boxShadow: "0 0 6px #f59e0b",
                        }}
                      />
                    ))}
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#999",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "1.6",
                      animation: "fadeInUp 1s ease-out 0.4s both",
                      opacity: 0,
                    }}
                  >
                    Professional certifications that validate my expertise and continuous learning journey
                  </p>
                </div>

                {/* Enhanced Certificates Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                    gap: "3rem",
                    marginBottom: "4rem",
                  }}
                >
                  {certificatesData.map((certificate, index) => {
                    const IconComponent = certificate.icon
                    return (
                      <div
                        key={certificate.name}
                        style={{
                          background: "rgba(255, 255, 255, 0.02)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(96, 165, 250, 0.15)",
                          borderRadius: "25px",
                          padding: "3rem 2.5rem",
                          textAlign: "center",
                          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          animation: `certificateSlideIn 1s ease-out ${0.4 + index * 0.15}s both`,
                          opacity: 0,
                          position: "relative",
                          overflow: "hidden",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-15px) scale(1.05) rotateX(5deg)"
                          e.currentTarget.style.boxShadow =
                            "0 30px 60px rgba(96, 165, 250, 0.4), 0 0 50px rgba(96, 165, 250, 0.2)"
                          e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.8)"
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1) rotateX(0deg)"
                          e.currentTarget.style.boxShadow = "none"
                          e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.15)"
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)"
                        }}
                      >
                        {/* Animated Background Gradient */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, 
                              rgba(96, 165, 250, 0.05) 0%, 
                              rgba(167, 139, 250, 0.05) 50%, 
                              rgba(245, 158, 11, 0.05) 100%)`,
                            borderRadius: "25px",
                            animation: "gradientMove 6s ease-in-out infinite",
                            zIndex: -1,
                          }}
                        />

                        {/* Floating Orbs */}
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              position: "absolute",
                              width: `${20 + i * 10}px`,
                              height: `${20 + i * 10}px`,
                              background: `radial-gradient(circle, rgba(${
                                i === 0 ? "96, 165, 250" : i === 1 ? "167, 139, 250" : "245, 158, 11"
                              }, 0.3), transparent)`,
                              borderRadius: "50%",
                              top: `${20 + i * 20}%`,
                              right: `${10 + i * 15}%`,
                              animation: `floatOrb ${4 + i}s ease-in-out infinite ${i * 0.5}s`,
                              filter: "blur(1px)",
                            }}
                          />
                        ))}

                        {/* Enhanced Certificate Icon */}
                        <div
                          style={{
                            position: "relative",
                            marginBottom: "2rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {/* Icon Container with Multiple Rings */}
                          <div
                            style={{
                              position: "relative",
                              width: "100px",
                              height: "100px",
                              background: `linear-gradient(135deg, 
                                ${
                                  index % 3 === 0
                                    ? "#60a5fa, #3b82f6"
                                    : index % 3 === 1
                                      ? "#a78bfa, #8b5cf6"
                                      : "#f59e0b, #d97706"
                                })`,
                              borderRadius: "25px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              animation: "iconPulse 3s ease-in-out infinite, iconRotate 20s linear infinite",
                              boxShadow: `0 15px 35px rgba(${
                                index % 3 === 0 ? "96, 165, 250" : index % 3 === 1 ? "167, 139, 250" : "245, 158, 11"
                              }, 0.4)`,
                            }}
                          >
                            <IconComponent
                              size={40}
                              color="white"
                              style={{
                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                                animation: "iconBounce 2s ease-in-out infinite",
                              }}
                            />

                            {/* Multiple Rotating Rings */}
                            {[...Array(3)].map((_, ringIndex) => (
                              <div
                                key={ringIndex}
                                style={{
                                  position: "absolute",
                                  width: `${120 + ringIndex * 20}px`,
                                  height: `${120 + ringIndex * 20}px`,
                                  border: `2px solid rgba(${
                                    index % 3 === 0
                                      ? "96, 165, 250"
                                      : index % 3 === 1
                                        ? "167, 139, 250"
                                        : "245, 158, 11"
                                  }, ${0.3 - ringIndex * 0.1})`,
                                  borderRadius: "50%",
                                  borderTop: `2px solid rgba(${
                                    index % 3 === 0
                                      ? "96, 165, 250"
                                      : index % 3 === 1
                                        ? "167, 139, 250"
                                        : "245, 158, 11"
                                  }, ${0.8 - ringIndex * 0.2})`,
                                  animation: `ringRotate ${3 + ringIndex}s linear infinite ${
                                    ringIndex % 2 === 0 ? "" : "reverse"
                                  }`,
                                }}
                              />
                            ))}

                            {/* Energy Particles */}
                            {[...Array(8)].map((_, particleIndex) => (
                              <div
                                key={particleIndex}
                                style={{
                                  position: "absolute",
                                  width: "3px",
                                  height: "3px",
                                  backgroundColor: "#fff",
                                  borderRadius: "50%",
                                  animation: `particleOrbit ${2 + particleIndex * 0.2}s linear infinite ${particleIndex * 0.25}s`,
                                  transformOrigin: "0 0",
                                  boxShadow: "0 0 6px #fff",
                                  transform: `rotate(${particleIndex * 45}deg) translateX(60px)`,
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Certificate Details */}
                        <div style={{ marginBottom: "2rem" }}>
                          {/* Category Badge */}
                          <div
                            style={{
                              display: "inline-block",
                              background: `rgba(${
                                index % 3 === 0 ? "96, 165, 250" : index % 3 === 1 ? "167, 139, 250" : "245, 158, 11"
                              }, 0.15)`,
                              color: `${index % 3 === 0 ? "#60a5fa" : index % 3 === 1 ? "#a78bfa" : "#f59e0b"}`,
                              padding: "0.5rem 1rem",
                              borderRadius: "20px",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                              marginBottom: "1rem",
                              border: `1px solid rgba(${
                                index % 3 === 0 ? "96, 165, 250" : index % 3 === 1 ? "167, 139, 250" : "245, 158, 11"
                              }, 0.3)`,
                              animation: "badgeGlow 2s ease-in-out infinite alternate",
                            }}
                          >
                            {certificate.category}
                          </div>

                          {/* Certificate Name */}
                          <h3
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: "bold",
                              color: "#fff",
                              marginBottom: "0.5rem",
                              lineHeight: "1.4",
                              minHeight: "2.8rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              animation: "textGlow 3s ease-in-out infinite alternate",
                            }}
                          >
                            {certificate.name}
                          </h3>

                          {/* Issuer */}
                          <p
                            style={{
                              fontSize: "0.9rem",
                              color: "#999",
                              fontWeight: "500",
                              marginBottom: "1.5rem",
                            }}
                          >
                            Issued by {certificate.issuer}
                          </p>
                        </div>

                        {/* Status and Actions */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                          {/* Enhanced View Certificate Button */}
                          <a
                            href={certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.8rem",
                              color: "white",
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                              padding: "1rem 2rem",
                              background: `linear-gradient(135deg, ${
                                index % 3 === 0
                                  ? "#60a5fa, #3b82f6"
                                  : index % 3 === 1
                                    ? "#a78bfa, #8b5cf6"
                                    : "#f59e0b, #d97706"
                              })`,
                              borderRadius: "15px",
                              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                              position: "relative",
                              overflow: "hidden",
                              transform: "perspective(1000px) rotateX(0deg)",
                            }}
                            onMouseEnter={(e) => {
                              const target = e.currentTarget as HTMLElement
                              target.style.transform =
                                "perspective(1000px) rotateX(-10deg) translateY(-5px) scale(1.05)"
                              target.style.boxShadow = `0 20px 40px rgba(${
                                index % 3 === 0 ? "96, 165, 250" : index % 3 === 1 ? "167, 139, 250" : "245, 158, 11"
                              }, 0.5)`
                              target.style.filter = "brightness(1.1) saturate(1.2)"
                            }}
                            onMouseLeave={(e) => {
                              const target = e.currentTarget as HTMLElement
                              target.style.transform = "perspective(1000px) rotateX(0deg) translateY(0) scale(1)"
                              target.style.boxShadow = "none"
                              target.style.filter = "brightness(1) saturate(1)"
                            }}
                          >
                            {/* Button Shine Effect */}
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: "-100%",
                                width: "100%",
                                height: "100%",
                                background:
                                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                                animation: "buttonShine 3s ease-in-out infinite",
                              }}
                            />
                            <Award size={20} />
                            View Certificate
                            <ExternalLink
                              size={16}
                              style={{
                                animation: "linkBounce 2s ease-in-out infinite",
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Back to Home Button */}
                <div
                  style={{
                    textAlign: "center",
                    animation: "fadeInUp 1s ease-out 1.5s both",
                    opacity: 0,
                  }}
                >
                  <button
                    onClick={() => handleNavClick("home")}
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                      color: "white",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(-4px) scale(1.08)"
                      target.style.boxShadow = "0 20px 40px rgba(96, 165, 250, 0.5)"
                      target.style.filter = "brightness(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.transform = "translateY(0) scale(1)"
                      target.style.boxShadow = "none"
                      target.style.filter = "brightness(1)"
                    }}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </main>
          )}
        </div>
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotateReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        @keyframes pulse {
          0%, 100% {
             transform: scale(1);
            opacity: 1;
          }
          50% {
             transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        @keyframes typewriter {
          0%, 50% { content: "Initializing Portfolio..."; }
          51%, 100% { content: "Loading Assets..."; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100vh);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInNav {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes skillFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* New Certificate Page Animations */
        @keyframes floatingParticles {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes titleGlow {
          0% {
            filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.5));
          }
          100% {
            filter: drop-shadow(0 0 20px rgba(96, 165, 250, 0.8));
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes certificateSlideIn {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(-15deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatOrb {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 15px 35px rgba(96, 165, 250, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 45px rgba(96, 165, 250, 0.6);
          }
        }

        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes particleOrbit {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
            opacity: 0.5;
          }
        }

        @keyframes badgeGlow {
          0% {
            box-shadow: 0 0 5px rgba(96, 165, 250, 0.3);
          }
          100% {
            box-shadow: 0 0 15px rgba(96, 165, 250, 0.6);
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          100% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes verifiedShine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes shieldPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes buttonShine {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes linkBounce {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(3px);
          }
        }
      `}</style>
    </div>
  )
}
