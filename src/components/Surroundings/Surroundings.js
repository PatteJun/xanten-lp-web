export function Surroundings({ title, locations }) {
  return `
    <section class="surroundings-section">
      <div class="surroundings-container">
        <div class="surroundings-header">
          <h2 class="surroundings-title">${title}</h2>
        </div>
        <div class="surroundings-grid">
          ${locations.map(location => `
            <div class="surroundings-card">
              <div class="surroundings-image-container">
                <img 
                  src="${location.image}" 
                  alt="${location.title}" 
                  class="surroundings-image"
                >
              </div>
              <div class="surroundings-content">
                <h3 class="surroundings-card-title">${location.title}</h3>
                <p class="surroundings-description">${location.description}</p>
                <div class="surroundings-distance">
                  <svg xmlns="http://www.w3.org/2000/svg" class="distance-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>${location.distance}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}