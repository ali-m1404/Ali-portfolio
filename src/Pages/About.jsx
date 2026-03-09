import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Ali Portfolio";
  }, []);

  return (
    <div className="px-8 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="leading-8">
        I am a passionate Front-End Developer focused on building scalable
        React applications with clean architecture. I continuously improve my
        skills in JavaScript, UI design and performance optimization.
      </p>
    </div>
  );
}

export default About;