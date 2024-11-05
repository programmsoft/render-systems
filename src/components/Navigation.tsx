import { Link } from "react-router-dom";

export const Navigation: React.FC = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Render Systems
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/policy" className="text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);
