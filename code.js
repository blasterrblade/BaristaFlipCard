document.addEventListener("DOMContentLoaded", () => {
  // Initialize lucide icons (requires lucide script to be loaded in the page)
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  const cards = document.querySelectorAll(".flip-card");
  cards.forEach((card) => {
    const toggleCard = () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    };
    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard();
      }
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      cards.forEach((card) => {
        const visible = selected === "all" || card.dataset.category === selected;
        card.classList.toggle("is-hidden-card", !visible);
      });
    });
  });
});
