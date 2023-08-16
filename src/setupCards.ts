interface Card {
  id: number;
  word: string;
  translation: string;
  guess: string;
}
export function setupCards<T extends HTMLElement = HTMLElement>(element: T) {
  let currentCard: Card | null = null;
  element.innerHTML = `<div class="cards-container">
    <dialog id="guessDialog">
      <input id="guess" placeholder="enter guess..."/>
      <button id="cancel">Cancel</button>
      <button id="confirm">Confirm</button>
    </dialog>
    <div class="cards-grid"/>
  </div>`;
  const cardsCtr = document.querySelector<HTMLDivElement>(".cards-grid");
  const guessDialog = document.querySelector<HTMLDialogElement>("#guessDialog");
  const cancelBtn = document.querySelector<HTMLButtonElement>("#cancel");
  const confirmBtn = document.querySelector<HTMLButtonElement>("#confirm");
  const guessInput = document.querySelector<HTMLInputElement>("#guess");
  const CARDS: Card[] = [
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
  for (const [, card] of CARDS.entries()) {
    const el = document.createElement("div");
    el.innerHTML = `<div id="card">${card.word}</div>`;
    cardsCtr?.appendChild(el);
  }

  cardsCtr?.addEventListener("click", (e) => {
    const target = e.target as HTMLDivElement;
    const word = target.textContent;
    currentCard = CARDS.find((card) => card.word === word) ?? null;
    guessDialog?.showModal();
  });

  guessInput?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    currentCard!.guess = target.value;
  });

  cancelBtn?.addEventListener("click", () => {
    currentCard!.guess = "";
    guessDialog?.close();
  });

  confirmBtn?.addEventListener("click", () => {
    console.log("confirm: ", CARDS);
    if (currentCard?.guess.trim() !== "") {
      cardsCtr!.innerHTML = "";
      for (const [, card] of CARDS.entries()) {
        const el = document.createElement("div");
        if (card.guess !== "") {
          const $card = CARDS.find(($card) => $card.id === card.id) ?? null;
          el.innerHTML = `<div id="card" class="flipped ${
            $card?.guess === card.translation ? "correct" : "incorrect"
          }">
            <div>Answer: ${card.translation}</div>
            <div>Guess: ${$card?.guess}</div>
          </div>`;
          cardsCtr?.appendChild(el);
        } else {
          el.innerHTML = `<div id="card">${card.word}</div>`;
          cardsCtr?.appendChild(el);
        }
      }
      const wordsGuessedCount = CARDS.filter(
        (card) => card.guess !== ""
      ).length;
      const cardCount = CARDS.length;
      if (wordsGuessedCount === cardCount) {
        const correct = CARDS.filter(
          (card) => card.guess === card.translation
        ).length;
        alert(`${correct} / ${cardCount} : SCORE ${correct / cardCount}%`);
      }
      guessDialog?.close();
    }
  });
}
