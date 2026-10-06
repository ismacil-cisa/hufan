(() => {
  let theme = "light";

  try {
    const storedTheme = localStorage.getItem("hufan-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      theme = storedTheme;
    }
  } catch (error) {
    // Use the default theme when storage is unavailable.
  }

  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
})();
