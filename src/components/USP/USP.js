import { icons } from '../../icons/icons.js';

export function USP({ title, items }) {
  return `
    <section class="usp-section">
      <div class="usp-container">
        <div class="usp-header">
          <h2 class="usp-title">${title}</h2>
        </div>
        <div class="usp-grid">
          ${items.map(item => `
            <div class="usp-item">
              <div class="usp-icon">${icons[item.icon]}</div>
              <h3 class="usp-item-title">${item.title}</h3>
              <p class="usp-item-description">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}