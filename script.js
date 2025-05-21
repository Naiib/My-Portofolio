const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote(retryCount = 3) {
  quoteText.textContent = '';
  quoteAuthor.textContent = '';
  // Show loading spinner inside quote text container
  quoteText.innerHTML = `<div class="loading-spinner" aria-label="Loading quote"></div>`;

  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      const res = await fetch('https://api.quotable.io/random');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();

      // Display quote and author
      quoteText.textContent = `“${data.content}”`;
      quoteAuthor.textContent = `— ${data.author}`;
      return;
    } catch (error) {
      console.warn(`Quote fetch attempt ${attempt} failed.`, error);
      if (attempt === retryCount) {
        quoteText.textContent = "Sorry, couldn't load quote. Please try again.";
        quoteAuthor.textContent = "";
      }
      // Small delay before retry
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

// Initial load
fetchQuote();
@asdaada
  
// New quote button click handler
newQuoteBtn.addEventListener('click', () => {
  fetchQuote();
});
