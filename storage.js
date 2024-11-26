class Storage {
  static getReviews(bookId) {
    const reviews = localStorage.getItem(`reviews_${bookId}`);
    return reviews ? JSON.parse(reviews) : [];
  }

  static addReview(bookId, review) {
    const reviews = this.getReviews(bookId);
    reviews.push({
      ...review,
      date: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    });
    localStorage.setItem(`reviews_${bookId}`, JSON.stringify(reviews));
  }

  static getSearchHistory() {
    const history = localStorage.getItem('searchHistory');
    return history ? JSON.parse(history) : [];
  }

  static addSearchTerm(term) {
    const history = this.getSearchHistory();
    history.unshift({
      term,
      date: new Date().toISOString()
    });
    if (history.length > 10) history.pop();
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
}