export function Hero({ image, title, subtitle, ctaText }) {
  return `
    <section class="hero">
      <img 
        src="${image}" 
        alt="Xanten Retreat Hauptansicht" 
        class="hero-image"
      >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">${title}</h1>
        <p class="hero-subtitle">${subtitle}</p>
        <a href="#contact" class="hero-cta">${ctaText}</a>
      </div>
    </section>
  `;
}