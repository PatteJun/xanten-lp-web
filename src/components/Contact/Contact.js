export function Contact() {
  return `
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <div class="contact-header">
          <h2 class="contact-title">Kontaktieren Sie uns unverbindlich für Verfügbarkeiten und weitere Informationen</h2>
        </div>
        <div class="contact-content">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">E-Mail</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="eventType">Veranstaltungstyp</label>
              <select id="eventType" name="eventType" required>
                <option value="">Bitte wählen Sie</option>
                <option value="retreat">Retreat</option>
                <option value="workshop">Workshop</option>
                <option value="yoga">Yoga-Veranstaltung</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date">Wunschdatum</label>
              <input type="date" id="date" name="date" required>
            </div>
            <div class="form-group">
              <label for="message">Ihre Nachricht (optional)</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" class="submit-button">Anfrage senden</button>
          </form>
          <div class="contact-alternative">
            <h3>Alternative Kontaktmöglichkeiten</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+491626119050">+49 162 611 9050</a>
              </div>
              <div class="contact-item">
                <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@xanten-retreat.com">contact@xanten-retreat.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Add form submission handler after the component is mounted
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would typically handle the form submission
      // For now, we'll just show an alert
      alert('Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.');
      form.reset();
    });
  }
});