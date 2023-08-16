export function setupCards<T extends HTMLElement = HTMLElement>(element: T) {
  element.innerHTML = `<div class="cards-container">
    
  </div>`;
  const cardsCtr = document.querySelector(".cards-container");
  const CARDS = [
    { id: 0, word: "مرحباً", translation: "Hello", guess: "" },
    { id: 1, word: "شكراً", translation: "Thank you", guess: "" },
    { id: 2, word: "ماء", translation: "Water", guess: "" },
    { id: 3, word: "منزل", translation: "House", guess: "" },
    { id: 4, word: "وجه", translation: "Face", guess: "" },
    { id: 5, word: "سماء", translation: "Sky", guess: "" },
    { id: 6, word: "كتاب", translation: "Book", guess: "" },
    { id: 7, word: "وردة", translation: "Flower", guess: "" },
    { id: 8, word: "شمس", translation: "Sun", guess: "" },
  ];
  for (const [index, card] of CARDS.entries()) {
    const el = document.createElement("div");
    el.innerHTML = `<div>${card.word}</div>`;
    cardsCtr?.appendChild(el);
  }
}
