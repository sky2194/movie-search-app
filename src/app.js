const apiKey = "a091395b"; // Replace this with your real key

async function searchMovie() {
  const movieInput = document.getElementById("movieInput").value.trim();

  if (!movieInput) {
    alert("Please enter a movie name.");
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieInput)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const movieDetails = document.getElementById("movieDetails");

    if (data.Response === "False") {
      movieDetails.innerHTML = `<p>❌ Movie not found. Try another one.</p>`;
      movieDetails.style.display = "block";
      return;
    }

    movieDetails.innerHTML = `
      <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200"}" alt="Poster" />
      <h2>${data.Title} (${data.Year})</h2>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    `;
    movieDetails.style.display = "block";
  } catch (error) {
    console.error("Error fetching movie:", error);
    document.getElementById("movieDetails").innerHTML = `<p>⚠️ Something went wrong. Please try again later.</p>`;
    movieDetails.style.display = "block";
  }
}
async function searchMovie() {
  const movieInput = document.getElementById("movieInput").value.trim();

  if (!movieInput) {
    alert("Please enter a movie name.");
    return;
  }

  // Show loading spinner
  document.getElementById("loading").style.display = "block";

  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieInput)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const movieDetails = document.getElementById("movieDetails");

    // Hide loading spinner when response is done
    document.getElementById("loading").style.display = "none";

    if (data.Response === "False") {
      movieDetails.innerHTML = `<p>❌ Movie not found. Try another one.</p>`;
      movieDetails.style.display = "block";
      return;
    }

    movieDetails.innerHTML = `
      <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200"}" alt="Poster" />
      <h2>${data.Title} (${data.Year})</h2>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    `;
    movieDetails.style.display = "block";
  } catch (error) {
    // Hide spinner in case of error
    document.getElementById("loading").style.display = "none";
    console.error("Error fetching movie:", error);
    document.getElementById("movieDetails").innerHTML = `<p>⚠️ Something went wrong. Please try again later.</p>`;
    movieDetails.style.display = "block";
  }
}
