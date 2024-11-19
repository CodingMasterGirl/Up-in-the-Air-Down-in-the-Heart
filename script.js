let quotes = [
  "Believe in yourself, and all things are possible!",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Stay positive, work hard, make it happen!",
  "Happiness is not by chance, but by choice!",
  "You are enough just as you are!"
];

let colors = [
  "#FF6347", // Tomato
  "#FFD700", // Gold
  "#ADFF2F", // GreenYellow
  "#00BFFF", // DeepSkyBlue
  "#FF1493" // DeepPink
];

function showQuote() {
  const quoteBox = document.getElementById("quoteBox");
  const quoteText = document.getElementById("quoteText");

  // Randomly select a quote and a color
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  let randomColorIndex = Math.floor(Math.random() * colors.length);

  // Set the quote text and color
  quoteText.textContent = quotes[randomQuoteIndex];
  quoteText.style.color = colors[randomColorIndex];

  // Show the quote box with animation
  quoteBox.style.display = "block";
  quoteBox.style.opacity = 1;
}
