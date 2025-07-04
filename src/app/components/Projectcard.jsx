// src/components/ProjectCard.jsx
import Link from "next/link";
import { CheckCircle, Clock, Loader2 } from "lucide-react";

export default function ProjectCard({ project }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "done":
        return <CheckCircle className="text-green-500 w-5 h-5" title="Done" />;
      case "on-going":
        return <Loader2 className="text-yellow-500 w-5 h-5 animate-spin" title="On Going" />;
      case "on-project":
        return <Clock className="text-blue-500 w-5 h-5" title="On Project" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          {getStatusIcon(project.status)}
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))} 
        </div>
        <Link href={project.link}>
          <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
