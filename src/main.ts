import "./style.css";
import { setupCards } from "./setupCards.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Language Learning Flashcards</h1>
    <div id="cards"/>  
  </div>
`;

setupCards<HTMLDivElement>(document.querySelector("#cards")!);
