import { createRoot } from 'react-dom/client';
import App from './Components/App.tsx';
import SavedCharacters from './Components/SavedCharacters.tsx';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const Root = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/viewSaved" element={<SavedCharacters />} />
    </Routes>
  </Router>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(Root);
}
