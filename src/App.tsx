import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/Home";
import TermsPage from "./terms/Terms";
import PrivacyPage from "./privacy/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
