export function FAQ({ title, items }) {
  return `
    <section class="faq-section">
      <div class="faq-container">
        <div class="faq-header">
          <h2 class="faq-title">${title}</h2>
        </div>
        <div class="faq-grid">
          ${items.map((item, index) => `
            <div class="faq-item" data-index="${index}">
              <div class="faq-question">
                <span>${item.question}</span>
                <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div class="faq-answer">
                <p>${item.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}