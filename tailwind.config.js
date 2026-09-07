/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./competences/*.html", "./stages/*.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1013",
        panel: "#161A20",
        line: "#262C35",
        paper: "#EFF1EC",
        "paper-line": "#DCDFD8",
        "text-hi": "#ECEEF0",
        "text-lo": "#8D95A1",
        "ink-text": "#1B2028",
        "ink-muted": "#5B6270",
        accent: "#3ED6B5",
        "accent-deep": "#1F8E76",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
