import { useState } from "react";
import DebouncePage from "./pages/DebouncePage";
import FetchPage from "./pages/FetchPage";
import PreviousPage from "./pages/PreviousPage";
import LocalStoragePage from "./pages/LocalStoragePage";
import TogglePage from "./pages/TogglePage";
import ThrottlePage from "./pages/ThrottlePage";
import ClickOutsidePage from "./pages/ClickOutsidePage";
import WindowSizePage from "./pages/WindowSizePage";
import IntervalTimeoutPage from "./pages/IntervalTimeoutPage";
import AsyncPage from "./pages/AsyncPage";

const pages = [
  { label: "useDebounce", component: <DebouncePage /> },
  { label: "useFetch", component: <FetchPage /> },
  { label: "usePrevious", component: <PreviousPage /> },
  { label: "useLocalStorage", component: <LocalStoragePage /> },
  { label: "useToggle", component: <TogglePage /> },
  { label: "useThrottle", component: <ThrottlePage /> },
  { label: "useClickOutside", component: <ClickOutsidePage /> },
  { label: "useWindowSize", component: <WindowSizePage /> },
  { label: "useInterval/Timeout", component: <IntervalTimeoutPage /> },
  { label: "useAsync", component: <AsyncPage /> },
];

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <aside className="w-52 bg-gray-900 border-r border-gray-800 flex flex-col py-6 gap-1 shrink-0">
        <p className="text-gray-500 text-xs font-semibold uppercase px-4 mb-3 tracking-widest">
          Hooks
        </p>
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left px-4 py-2 text-sm rounded-lg mx-2 transition-colors ${
              active === i
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            {page.label}
          </button>
        ))}
      </aside>

      {/* Page content */}
      <main className="flex-1 overflow-auto">{pages[active].component}</main>
    </div>
  );
}

export default App;
