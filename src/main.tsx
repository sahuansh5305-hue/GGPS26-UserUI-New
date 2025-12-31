// ✅ ADD THIS AT THE VERY TOP
// Redirect www to non-www
// if (window.location.hostname === 'www.dewasps26.gautamsetu.com') {
//   window.location.replace('https://dewasps26.gautamsetu.com');
// }

if (window.location.hostname === 'www.dewasps26.gautamsetu.com') {
  window.location.replace(
    'https://dewasps26.gautamsetu.com' +
    window.location.pathname +
    window.location.search
  );
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

