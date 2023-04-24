import { useEffect, useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import { useInterval } from "../../hooks/useInterval";

import "./Titlebar.scss";

function Titlebar() {
  const [maximized, setMaximized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [windowTitle, setWindowTitle] = useState("Summary");

  const tauriInterval = useInterval(() => {
    appWindow.isMaximized().then(setMaximized);
    // appWindow.setTitle(windowTitle);
    appWindow.isFullscreen().then(setFullscreen);
  }, 200);

  useEffect(() => {
    tauriInterval.start();
    return tauriInterval.stop;
  }, []);

  return (
    <div data-tauri-drag-region className="titlebar">
      <p className="window-title">{windowTitle}</p>

      <div className="titlebar-window-buttons-container">
        <div
          className="titlebar-button"
          id="titlebar-minimize"
          onClick={() => appWindow.minimize()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </div>

        <div
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={() => appWindow.maximize()}
        >
          {maximized ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
              />
            </svg>
          )}
        </div>
        <div
          className="titlebar-button-close-button"
          id="titlebar-close"
          onClick={() => appWindow.close()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Titlebar;
