export function Usage() {
  const usageItems = [
    {
      image: 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&q=80',
      alt: 'Retreat Atmosphäre',
      title: 'Retreats',
      description: 'Ein Ort für innere Ruhe und Inspiration – gestalten Sie Retreats, die nachhaltig wirken.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
      alt: 'Offsite Meeting',
      title: 'Offsite-Meetings',
      description: 'Fördern Sie Kreativität und Zusammenarbeit in einer Umgebung, die inspiriert.'
    },
    {
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80',
      alt: 'Yoga Veranstaltung',
      title: 'Yoga-Veranstaltungen',
      description: 'Erleben Sie eine perfekte Balance zwischen Körper und Geist in einer einzigartigen Umgebung.'
    }
  ];

  return `
    <section class="usage-section">
      <div class="usage-container">
        <div class="usage-grid">
          ${usageItems.map(item => `
            <div class="usage-item">
              <div class="usage-image-container">
                <img 
                  src="${item.image}" 
                  alt="${item.alt}" 
                  class="usage-image"
                >
              </div>
              <div class="usage-content">
                <h3 class="usage-item-title">${item.title}</h3>
                <p class="usage-item-description">${item.description}</p>
                <a href="#contact" class="usage-cta">Mehr erfahren</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}