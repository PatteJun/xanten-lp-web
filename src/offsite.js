import { offsiteContent } from './config/offsite-content.js';
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

function OffsiteApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Navbar()}
    <main class="main-content">
      ${Hero(offsiteContent.hero)}
      ${USP(offsiteContent.usp)}
      ${Usage(offsiteContent.usage)}
      ${Details(offsiteContent.details)}
      ${Gallery()}
      ${Surroundings(offsiteContent.surroundings)}
      ${Testimonials()}
      ${FAQ(offsiteContent.faq)}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

// Initialize the offsite app
OffsiteApp();