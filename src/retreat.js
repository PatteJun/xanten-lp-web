import { retreatContent } from './config/retreat-content.js';
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

function RetreatApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Navbar()}
    <main class="main-content">
      ${Hero(retreatContent.hero)}
      ${USP(retreatContent.usp)}
      ${Usage(retreatContent.usage)}
      ${Details(retreatContent.details)}
      ${Gallery()}
      ${Surroundings(retreatContent.surroundings)}
      ${Testimonials()}
      ${FAQ(retreatContent.faq)}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

// Initialize the retreat app
RetreatApp();