export function FAQ() {
  const faqItems = [
    {
      question: 'Welche Gruppengrößen können untergebracht werden?',
      answer: 'Unser Haus bietet Platz für Gruppen von 10 bis 50 Personen.'
    },
    {
      question: 'Welche zusätzlichen Services bieten Sie an?',
      answer: 'Wir unterstützen Sie mit Catering, Veranstaltungsplanung und Technik.'
    },
    {
      question: 'Gibt es spezielle Angebote für Yoga-Veranstaltungen?',
      answer: 'Ja, wir stellen Yogamatten und Blöcke bereit und können einen Yoga-Lehrer vermitteln.'
    },
    {
      question: 'Wie ist die Anreise möglich?',
      answer: 'Das Retreat ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut erreichbar. Kostenfreie Parkplätze stehen zur Verfügung.'
    },
    {
      question: 'Gibt es WLAN im Haus?',
      answer: 'Ja, im gesamten Haus steht kostenfreies Highspeed-WLAN zur Verfügung.'
    },
    {
      question: 'Können Mahlzeiten gebucht werden?',
      answer: 'Ja, wir bieten verschiedene Catering-Optionen an, darunter auch vegane und vegetarische Küche durch unseren Privatkoch.'
    }
  ];

  return `
    <section class="faq-section">
      <div class="faq-container">
        <div class="faq-header">
          <h2 class="faq-title">Häufig gestellte Fragen</h2>
        </div>
        <div class="faq-grid">
          ${faqItems.map((item, index) => `
            <div class="faq-item" data-index="${index}">
              <div class="faq-question">
                <span>${item.question}</span>
                <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div class="faq-answer">
                <p>${item.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Add event listener after the component is mounted
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });
});