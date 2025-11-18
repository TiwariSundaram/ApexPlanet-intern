// Image Carousel Logic
const images = [
  "https://picsum.photos/id/237/600/400",
  "https://picsum.photos/id/238/600/400",
  "https://picsum.photos/id/239/600/400",
  "https://picsum.photos/id/240/600/400",
];

let currentIndex = 0;
const imageElement = document.getElementById("carousel-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateCarousel() {
  imageElement.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Joke API Logic
const jokeBtn = document.getElementById("joke-btn");
const jokeDisplay = document.getElementById("joke");

jokeBtn.addEventListener("click", async () => {
  jokeDisplay.textContent = "Loading joke...";
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeDisplay.textContent = "Failed to fetch joke. Please try again.";
    console.error("Joke API Error:", error);
  }
});
