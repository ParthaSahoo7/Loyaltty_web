import { LoyalttyPage } from "./pages/LoyalttyPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermAndConditions from "./pages/TermAndConditions";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TermCondition from "./sections/TermSection/TermCondition";

import ComingSoonPage from "./pages/ComingSoonPage";


function App() {
  return (
    <Router>
    <div >
      <Routes>
      <Route path="/" element={<LoyalttyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-and-conditions" element={<TermAndConditions />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
