import React, { useState } from "react";
import "./App.css";

function App() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        setFormMessage("Message sent successfully!");
        e.target.reset();
      } else {
        setFormMessage("Failed to send message. Try again later.");
      }
    } catch (error) {
      setFormMessage("Error sending message. Check your internet.");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Hi, I'm Stuti Singh</h1>
        <p className="subtitle">Computer Science Student | Aspiring Freelancer</p>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m Stuti Singh — a curious builder who loves blending technology, creativity, and systems thinking. I’m currently exploring the intersections of DevOps, AI, and open-source development, while continuously improving my ability to write clean, efficient code and build projects that solve real problems.

I’m passionate about automation, scalable deployments, and optimizing performance — whether it’s through Kubernetes clusters, smart AI tools, or just better ways of working. Beyond code, I also write about tech trends, innovation, and the human side of technology through my newsletter SignalBoost, where I decode what’s shaping the future of AI and startups globally.

I believe learning is a lifelong process — and I’m currently focused on mastering Kubernetes, cloud-native tools.
        </p>
        <p>Connect with me:</p>
        <div className="social-links">
          <a
            href="https://github.com/StutiSingh876"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stuti-singh-42567b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://yournewsletter.com" target="_blank" rel="noreferrer">
            Newsletter
          </a>
          <a href="https://yourblog.com" target="_blank" rel="noreferrer">
            Blog
          </a>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project One</h3>
            <p>Brief description of project one.</p>
            <a
              href="https://github.com/yourusername/project-one"
              target="_blank"
              rel="noreferrer"
            >
              View Repo
            </a>
          </div>
          <div className="project-item">
            <h3>Project Two</h3>
            <p>Brief description of project two.</p>
            <a
              href="https://github.com/yourusername/project-two"
              target="_blank"
              rel="noreferrer"
            >
              View Repo
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="90f4cffd-4ab0-43f4-b5ca-0421a29139d1" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
          ></textarea>
          <button type="submit">Send</button>
          {formMessage && <p className="form-message">{formMessage}</p>}
        </form>
      </section>

      <footer>
        <p>© 2025 [Stuti Singh]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
