import { Navbar } from './components/Navbar/Navbar.js';
import { Hero } from './components/Hero/Hero.js';
import { USP } from './components/USP/USP.js';
import { Usage } from './components/Usage/Usage.js';
import { Details } from './components/Details/Details.js';
import { Gallery } from './components/Gallery/Gallery.js';
import { Surroundings } from './components/Surroundings/Surroundings.js';
import { Testimonials } from './components/Testimonials/Testimonials.js';
import { FAQ } from './components/FAQ/FAQ.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';

function App() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Navbar()}
    <main class="main-content">
      ${Hero()}
      ${USP()}
      ${Usage()}
      ${Details()}
      ${Gallery()}
      ${Surroundings()}
      ${Testimonials()}
      ${FAQ()}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

// Initialize the app
App();