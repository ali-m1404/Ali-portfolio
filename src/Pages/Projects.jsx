import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Ali Portfolio";
  }, []);

  return (
    <div className="px-8 py-16 grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800 dark:bg-gray-200 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-3">This page is not completed yet</h2>
      </div>
    </div>
  );
}

export default Projects;