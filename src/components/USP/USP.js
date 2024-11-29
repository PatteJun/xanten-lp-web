import { icons } from '../../icons/icons.js';

export function USP() {
  const uspItems = [
    {
      icon: icons.nature,
      title: 'Ruhige Lage inmitten der Natur',
      description: 'Ideal für Entspannung und Inspiration'
    },
    {
      icon: icons.flexibility,
      title: 'Flexible Nutzung',
      description: 'Für Retreats, Offsite-Workshops oder Yoga-Veranstaltungen'
    },
    {
      icon: icons.quality,
      title: 'Hochwertige Räumlichkeiten',
      description: 'Mit moderner Ausstattung'
    },
    {
      icon: icons.sustainability,
      title: 'Nachhaltiges Konzept',
      description: 'Umweltbewusste Gestaltung'
    },
    {
      icon: icons.support,
      title: 'Individuelle Betreuung',
      description: 'Für Ihre Veranstaltung'
    }
  ];

  return `
    <section class="usp-section">
      <div class="usp-container">
        <div class="usp-header">
          <h2 class="usp-title">Warum Xanten Retreat der perfekte Ort für Sie ist</h2>
        </div>
        <div class="usp-grid">
          ${uspItems.map(item => `
            <div class="usp-item">
              <div class="usp-icon">${item.icon}</div>
              <h3 class="usp-item-title">${item.title}</h3>
              <p class="usp-item-description">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}