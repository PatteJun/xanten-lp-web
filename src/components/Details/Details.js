import { icons } from '../../icons/icons.js';

export function Details({ title, categories }) {
  return `
    <section class="details-section">
      <div class="details-container">
        <div class="details-header">
          <h2 class="details-title">${title}</h2>
        </div>
        <div class="details-grid">
          ${categories.map(category => `
            <div class="details-category">
              <h3 class="category-title">${category.category}</h3>
              <div class="category-items">
                ${category.items.map(item => `
                  <div class="detail-item">
                    <div class="detail-icon">${icons[item.icon]}</div>
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