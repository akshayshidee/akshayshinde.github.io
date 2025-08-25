// assets/js/components.js
document.addEventListener("DOMContentLoaded", async () => {
  // Function to load HTML into a container
  async function loadComponent(id, file) {
    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(`Failed to load ${file}`);
      const html = await resp.text();
      document.getElementById(id).innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  }

  // Load components
  await loadComponent("header", "components/header.html");
  await loadComponent("navbar", "components/nav.html");
  await loadComponent("footer", "components/footer.html");
});