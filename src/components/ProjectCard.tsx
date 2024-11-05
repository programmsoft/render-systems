import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  link: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imagePath,
  link,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="bg-gray-200 rounded-md mb-4">
      <img
        src={imagePath}
        alt="Project preview"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      className="flex items-center text-blue-600 hover:text-blue-800"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      Learn more <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);
