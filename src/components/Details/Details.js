import { icons } from '../../icons/icons.js';

export function Details() {
  const details = [
    {
      category: 'Räumlichkeiten',
      items: [
        { icon: icons.home, text: '9 komfortable Schlafzimmer' },
        { icon: icons.kitchen, text: 'Voll ausgestattete Küche' },
        { icon: icons.spa, text: 'Entspannender Spa-Bereich' },
        { icon: icons.yoga, text: 'Großzügige Yoga Shala' }
      ]
    },
    {
      category: 'Außenbereich',
      items: [
        { icon: icons.garden, text: 'Weitläufiger Park' },
        { icon: icons.fireplace, text: 'Mehrere Feuerstellen' },
        { icon: icons.seating, text: 'Verschiedene Sitzplätze' },
        { icon: icons.nature, text: 'Naturnahe Umgebung' }
      ]
    },
    {
      category: 'Services',
      items: [
        { icon: icons.chef, text: 'Privatkoch auf Anfrage' },
        { icon: icons.food, text: 'Vegane & vegetarische Optionen' },
        { icon: icons.workshop, text: 'Ideal für Workshops' },
        { icon: icons.meditation, text: 'Perfekt für Meditation' }
      ]
    }
  ];

  return `
    <section class="details-section">
      <div class="details-container">
        <div class="details-header">
          <h2 class="details-title">Unser Haus im Überblick</h2>
        </div>
        <div class="details-grid">
          ${details.map(category => `
            <div class="details-category">
              <h3 class="category-title">${category.category}</h3>
              <div class="category-items">
                ${category.items.map(item => `
                  <div class="detail-item">
                    <div class="detail-icon">${item.icon}</div>
                    <span class="detail-text">${item.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}