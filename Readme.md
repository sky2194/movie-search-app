# 🎬 Movie Search App

A simple and responsive web app to search and display movies using the OMDb API. Built with HTML, CSS, and JavaScript. Dockerized and deployed to Netlify and Render.

---

## 🌐 Live Demo

- 🚀 **Netlify (Static Version)**: [https://your-netlify-url.netlify.app](https://your-netlify-url.netlify.app)
- 🐳 **Render (Docker Hosted)**: [https://your-render-url.onrender.com](https://your-render-url.onrender.com)

> ⚠️ Replace the above links with your actual Netlify and Render URLs.

---

## 🧩 Features

- 🎥 Search for movies by title using the OMDb API
- 📸 Displays poster, genre, plot, IMDb rating, and more
- 🚨 Error handling for invalid or missing movies
- 🔄 Loading spinner while fetching data
- 💡 Mobile-responsive UI

---

## 🛠 Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [OMDb API](https://www.omdbapi.com/)
- Docker + Nginx (for container deployment)
- Netlify (for static deployment)
- Render (for Docker-based deployment)

---

## 🚀 Run the Project Locally

### Option 1: Without Docker

```bash
# Clone the repository
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app

# Start a simple HTTP server (Python 3)
python3 -m http.server 8000