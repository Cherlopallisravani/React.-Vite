// src/App.jsx
import { useTheme } from "./ThemeContext";

export default function Bpp() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <img src="https://www.achieversit.com/assets/images/AIT-white.jpg"    alt="Logo" className="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </nav>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>
      </header>
      <main>
        <h1>Welcome to the Theme Switcher App!</h1>
        <p>This is the content area. The theme is currently <strong>{theme}</strong>.</p>
      </main>
      <footer>
        <p>Copyright © 2025 AchieversIT. All Rights Reserved</p>
      </footer>
    </div>
  );
}
