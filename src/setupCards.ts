export function setupCards<T extends HTMLElement = HTMLElement>(element: T) {
  let guess = "";
  element.innerHTML = `<div class="cards-container">
    <dialog id="guessDialog">
      <input id="guess" placeholder="enter guess..."/>
      <button id="cancel">Cancel</button>
      <button id="confirm">Confirm</button>
    </dialog>
    <div class="cards-grid"/>
  </div>`;
  const cardsCtr = document.querySelector(".cards-grid");
  const guessDialog = document.querySelector<HTMLDialogElement>("#guessDialog");
  const cancelBtn = document.querySelector<HTMLButtonElement>("#cancel");
  const confirmBtn = document.querySelector<HTMLButtonElement>("#confirm");
  const guessInput = document.querySelector<HTMLInputElement>("#guess");
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
  for (const [, card] of CARDS.entries()) {
    const el = document.createElement("div");
    el.innerHTML = `<div id="card">${card.word}</div>`;
    cardsCtr?.appendChild(el);
  }

  cardsCtr?.addEventListener("click", (e) => {
    const target = e.target as HTMLDivElement;
    guessDialog?.showModal();
    console.log(target.textContent);
  });
  guessInput?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    guess = target.value;
  });
  cancelBtn?.addEventListener("click", (e) => {
    guessDialog?.close();
  });
  confirmBtn?.addEventListener("click", (e) => {
    console.log("confirm: ", guess);
    guessDialog?.close();
  });
}
