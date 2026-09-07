const envelopeButton = document.getElementById("openLetter");
const envelope = document.querySelector(".envelope");
const intro = document.getElementById("intro");
const letterView = document.getElementById("letterView");
const closeLetter = document.getElementById("closeLetter");

let isOpening = false;

envelopeButton.addEventListener("click", () => {
  if (isOpening) return;
  isOpening = true;

  envelope.classList.add("open");

  // Dejamos que se vea la animación del sobre antes de mostrar la carta.
  setTimeout(() => {
    intro.classList.add("hide");
    letterView.classList.add("visible");
    letterView.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }, 850);
});

closeLetter.addEventListener("click", closeLetterView);

letterView.addEventListener("click", (event) => {
  if (event.target === letterView) {
    closeLetterView();
  }
});

function closeLetterView() {
  letterView.classList.remove("visible");
  letterView.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  setTimeout(() => {
    intro.classList.remove("hide");
    envelope.classList.remove("open");
    isOpening = false;
  }, 500);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && letterView.classList.contains("visible")) {
    closeLetterView();
  }
});
