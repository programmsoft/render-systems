import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Render Systems</h3>
          <p className="text-gray-400">Building the future of technology</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            Tashkent , Uzbekistan
            <br />
            Istiqbol street, 15-uy
          </p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        © {new Date().getFullYear()} Render Systems. All rights reserved.
      </div>
    </div>
  </footer>
);
