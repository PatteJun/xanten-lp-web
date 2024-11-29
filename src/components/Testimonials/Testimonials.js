export function Testimonials() {
  const testimonials = [
    {
      quote: "Das Xanten Retreat war der perfekte Ort für unser Yoga-Wochenende. Die Atmosphäre, das Ambiente und die Betreuung waren einfach wundervoll!",
      author: "Sarah Weber",
      role: "Yoga-Lehrerin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      quote: "Ein inspirierender Ort für unseren Team-Workshop. Die ruhige Umgebung hat maßgeblich zum Erfolg unseres Strategiemeetings beigetragen.",
      author: "Michael Schmidt",
      role: "Geschäftsführer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      quote: "Die perfekte Balance zwischen Professionalität und Entspannung. Wir kommen definitiv wieder!",
      author: "Lisa Müller",
      role: "Event-Managerin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  ];

  return `
    <section class="testimonials-section">
      <div class="testimonials-container">
        <div class="testimonials-header">
          <h2 class="testimonials-title">Das sagen unsere Gäste</h2>
        </div>
        <div class="testimonials-grid">
          ${testimonials.map(item => `
            <div class="testimonial-item">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <blockquote class="testimonial-quote">${item.quote}</blockquote>
                <div class="testimonial-author">
                  <img 
                    src="${item.image}" 
                    alt="${item.author}" 
                    class="author-image"
                  >
                  <div class="author-info">
                    <div class="author-name">${item.author}</div>
                    <div class="author-role">${item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}