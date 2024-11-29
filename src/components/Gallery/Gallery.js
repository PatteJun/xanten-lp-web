export function Gallery() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      alt: 'Moderner Seminarraum',
      caption: 'Moderner Seminarraum'
    },
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
      alt: 'Komfortable Schlafräume',
      caption: 'Komfortable Schlafräume'
    },
    {
      image: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&q=80',
      alt: 'Gemeinschaftsraum',
      caption: 'Gemeinschaftsraum'
    },
    {
      image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80',
      alt: 'Weitläufiger Garten',
      caption: 'Weitläufiger Garten'
    },
    {
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80',
      alt: 'Sonnige Terrasse',
      caption: 'Sonnige Terrasse'
    },
    {
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80',
      alt: 'Umgebende Natur',
      caption: 'Umgebende Natur'
    },
    {
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80',
      alt: 'Yoga-Gruppe',
      caption: 'Yoga-Gruppe'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
      alt: 'Workshop',
      caption: 'Workshop'
    },
    {
      image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80',
      alt: 'Meditation',
      caption: 'Meditation'
    }
  ];

  return `
    <section class="gallery-section">
      <div class="gallery-container">
        <div class="gallery-header">
          <h2 class="gallery-title">Ein Ort, der inspiriert</h2>
        </div>
        <div class="gallery-grid">
          ${galleryItems.map(item => `
            <div class="gallery-item">
              <img 
                src="${item.image}" 
                alt="${item.alt}" 
                class="gallery-image"
              >
              <div class="gallery-overlay">
                <div class="gallery-caption">${item.caption}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}