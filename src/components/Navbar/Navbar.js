export function Navbar() {
  return `
    <nav class="navbar">
      <div class="navbar-container container">
        <a href="/" class="logo">Xanten Retreat</a>
        <div class="nav-items">
          <a href="/galerie" class="nav-link">Galerie</a>
          <a href="/details" class="nav-link">Details</a>
          <a href="/umgebung" class="nav-link">Umgebung</a>
          <a href="/faq" class="nav-link">FAQ</a>
          <button class="primary-button">Jetzt anfragen</button>
        </div>
      </div>
    </nav>
  `;
}