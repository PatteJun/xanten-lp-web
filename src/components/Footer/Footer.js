export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer">
      <div class="footer-container container">
        <div class="copyright">
          © ${currentYear} Xanten Retreat
        </div>
        <div class="footer-links">
          <a href="/impressum" class="footer-link">Impressum</a>
          <a href="/datenschutz" class="footer-link">Datenschutz</a>
        </div>
      </div>
    </footer>
  `;
}