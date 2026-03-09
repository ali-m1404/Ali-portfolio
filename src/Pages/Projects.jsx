import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Ali Portfolio";
  }, []);

  return (
    <div className="px-8 py-16 grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800 dark:bg-gray-200 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-3">Reporting System</h2>
        <p className="mb-4">
          A role-based dashboard built with React and ASP.NET Web API.
          Includes authentication, protected routes and REST API integration.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-blue-500">Live Demo</a>
          <a href="#" className="text-blue-500">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;