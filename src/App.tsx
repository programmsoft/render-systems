import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/Home";
import { PolicyPage } from "./pages/Policy";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
