# Neon-Book-finder
# 📚 Book Finder with User Reviews
# Overview
**The Book Finder with User Reviews application allows users to search for books, view detailed information, and submit their reviews and ratings. It integrates with the Google Books API to fetch book data and provides a community-driven insight by displaying an aggregate of user reviews for each book.
**
# Features
Search Books: Users can search for books by title or author.
Book Details: View detailed information such as title, author, description, and publication date.
User Reviews:
Submit reviews and ratings for books.
View community ratings and reviews.
Calculate and display the average rating for each book.
User Dashboard:
View and manage submitted reviews.
Access past search history.
Authentication: Secure user-specific reviews and search histories.
API Integration
The app utilizes the Google Books API to fetch:

Comprehensive book information, including titles, authors, descriptions, and more.
Setup Google Books API
Create a Google Cloud Platform (GCP) account.
Create a new project and enable the Books API.
Generate an API Key and restrict its usage as needed.
Store the API Key securely (e.g., in an environment variable).
# Technologies Used
Frontend:
HTML/CSS/JavaScript: For UI development.
Modal Design: Displays detailed book information and review submission forms.
Backend:
Node.js: Handles API requests and database communication.
Firebase: Manages user authentication and stores user reviews and search history securely.
Database:
Firebase Cloud Firestore:
Collections:
books: Stores book details and reviews.
users: Tracks user-specific data (search history and reviews).
# Installation
Prerequisites
Node.js and npm installed.
A Firebase project configured.
Steps
Clone the repository:
bash
git clone https://github.com/username/book-finder.git
cd book-finder
Install dependencies:
bash
npm install
Create a .env file to store environment variables:
plaintext
API_KEY=<Your_Google_Books_API_Key>
FIREBASE_API_KEY=<Your_Firebase_API_Key>
FIREBASE_PROJECT_ID=<Your_Firebase_Project_ID>
Start the server:
bash
npm start
Open the application in your browser at http://localhost:3000.
Usage
Search for Books:
Enter a book title or author in the search bar and click "Search."
View Book Details:
Click on a book to view its detailed information in a modal.
Submit Reviews:
Enter a rating and a review in the modal's review section and click "Submit Review."
User Dashboard:
Navigate to your dashboard to view and manage reviews or revisit search history.
Authentication
The app uses Firebase Authentication to securely manage user login and reviews. Ensure Firebase Authentication is enabled in your Firebase console.

Future Enhancements
Add filters for book categories and genres.
Implement pagination for search results.
Enhance the user dashboard with more analytics.
Add support for social logins (e.g., Google, Facebook).
Contributing
Feel free to contribute to the project! Follow these steps:


# Acknowledgments
Google Books API for providing book data.
Firebase for authentication and database services.
Open-source libraries and tools used in this project.
