import { tagunghausContent } from './config/tagungshaus-content.js';
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

function TagungshausApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Navbar()}
    <main class="main-content">
      ${Hero(tagunghausContent.hero)}
      ${USP(tagunghausContent.usp)}
      ${Usage(tagunghausContent.usage)}
      ${Details(tagunghausContent.details)}
      ${Gallery()}
      ${Surroundings(tagunghausContent.surroundings)}
      ${Testimonials()}
      ${FAQ(tagunghausContent.faq)}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

// Initialize the tagungshaus app
TagungshausApp();