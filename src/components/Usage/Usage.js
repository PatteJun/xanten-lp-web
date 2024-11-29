export function Usage({ title, items }) {
  return `
    <section class="usage-section">
      <div class="usage-container">
        <div class="usage-grid">
          ${items.map(item => `
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
                <a href="#contact" class="usage-cta">${item.ctaText}</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}