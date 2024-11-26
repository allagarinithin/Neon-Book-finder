let currentBookId = null;

async function searchBooks() {
  const searchTerm = document.getElementById('searchInput').value;
  if (!searchTerm) return;

  Storage.addSearchTerm(searchTerm);
  
  try {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`
    );
    const data = await response.json();
    displayResults(data.items || []);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

function displayResults(books) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  books.forEach(book => {
    const bookInfo = book.volumeInfo;
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${bookInfo.imageLinks?.thumbnail || 'placeholder.jpg'}" alt="${bookInfo.title}">
      <h3>${bookInfo.title}</h3>
      <p>${bookInfo.authors?.join(', ') || 'Unknown Author'}</p>
    `;
    card.onclick = () => showBookDetails(book);
    resultsDiv.appendChild(card);
  });
}

function showBookDetails(book) {
  currentBookId = book.id;
  const modal = document.getElementById('bookModal');
  const details = document.getElementById('bookDetails');
  const bookInfo = book.volumeInfo;

  details.innerHTML = `
    <h2>${bookInfo.title}</h2>
    <p><strong>Author(s):</strong> ${bookInfo.authors?.join(', ') || 'Unknown'}</p>
    <p><strong>Published:</strong> ${bookInfo.publishedDate || 'N/A'}</p>
    <p>${bookInfo.description || 'No description available.'}</p>
  `;

  displayReviews(book.id);
  modal.style.display = 'block';
}

function displayReviews(bookId) {
  const reviewsDiv = document.getElementById('reviews');
  const reviews = Storage.getReviews(bookId);
  
  reviewsDiv.innerHTML = '<h3>Reviews</h3>';
  if (reviews.length === 0) {
    reviewsDiv.innerHTML += '<p>No reviews yet.</p>';
    return;
  }

  reviews.forEach(review => {
    reviewsDiv.innerHTML += `
      <div class="review">
        <p>Rating: ${'⭐'.repeat(review.rating)}</p>
        <p>${review.text}</p>
        <small>${new Date(review.date).toLocaleDateString()}</small>
      </div>
    `;
  });
}

function submitReview() {
  if (!currentBookId) return;

  const rating = parseInt(document.getElementById('rating').value);
  const text = document.getElementById('reviewText').value;

  if (!text) {
    alert('Please write a review');
    return;
  }

  Storage.addReview(currentBookId, { rating, text });
  displayReviews(currentBookId);
  document.getElementById('reviewText').value = '';
}

// Close modal when clicking the X or outside the modal
document.querySelector('.close').onclick = () => {
  document.getElementById('bookModal').style.display = 'none';
};

window.onclick = (event) => {
  const modal = document.getElementById('bookModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Initialize search on Enter key
document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchBooks();
  }
});