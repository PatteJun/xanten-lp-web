export function Surroundings() {
  const locations = [
    {
      title: 'Freizeitzentrum Xanten (FZX)',
      description: 'Das FZX umfasst die Xantener Nord- und Südsee und bietet zahlreiche Wassersportaktivitäten wie Segeln, Windsurfen und Stand-Up-Paddling. Zudem laden Sandstrände und Liegewiesen zum Entspannen ein.',
      distance: 'Etwa 5 km vom Haus Fürstenberg entfernt',
      image: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80'
    },
    {
      title: 'RVR-NaturForum Bislicher Insel',
      description: 'Ein Naturschutzgebiet mit Auenlandschaften, ideal für Spaziergänge und Vogelbeobachtungen. Hier werden auch Hatha-Yoga-Kurse angeboten, die Bewegung und Entspannung in der Natur verbinden.',
      distance: 'Rund 8 km vom Retreat-Zentrum entfernt',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Adventurepark Xanten',
      description: 'Ein Hochseilgarten, der Team-Building-Aktivitäten und persönliche Herausforderungen in luftiger Höhe bietet. Ideal für Tagungsgruppen, die ein aktives Freizeitprogramm suchen.',
      distance: 'Ungefähr 6 km vom Haus Fürstenberg entfernt',
      image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?auto=format&fit=crop&q=80'
    },
    {
      title: 'Stadtzentrum Xanten',
      description: 'Historische Altstadt mit dem Xantener Dom, gemütlichen Cafés und Restaurants. Ein kultureller Ausflug für Teilnehmer, um zwischen den Workshops zu entspannen.',
      distance: 'Circa 3 km vom Retreat-Zentrum entfernt',
      image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80'
    },
    {
      title: 'Archäologischer Park Xanten (APX)',
      description: 'Deutschlands größtes archäologisches Freilichtmuseum auf dem Gelände der römischen Stadt Colonia Ulpia Traiana. Einblicke in die römische Geschichte und Kultur.',
      distance: 'Etwa 4 km vom Haus Fürstenberg entfernt',
      image: 'https://images.unsplash.com/photo-1606922731315-8a08b9b4ad21?auto=format&fit=crop&q=80'
    }
  ];

  return `
    <section class="surroundings-section">
      <div class="surroundings-container">
        <div class="surroundings-header">
          <h2 class="surroundings-title">Die direkte Nachbarschaft</h2>
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