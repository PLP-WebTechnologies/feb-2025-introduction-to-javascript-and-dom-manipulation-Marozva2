// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
  const intro = document.getElementById("intro-text");
  intro.textContent = "Behold! The text hath been transformed!";
});

// Modify CSS styles via JavaScript
document.getElementById("change-style-btn").addEventListener("click", () => {
  const stylePara = document.getElementById("style-paragraph");
  stylePara.style.color = "crimson";
  stylePara.style.backgroundColor = "lightyellow";
  stylePara.style.fontWeight = "bold";
});

// Add or remove an element dynamically
const container = document.getElementById("element-container");

document.getElementById("add-element-btn").addEventListener("click", () => {
  if (!document.querySelector(".dynamic-box")) {
    const div = document.createElement("div");
    div.className = "dynamic-box";
    div.textContent = "A new element has been summoned!";
    container.appendChild(div);
  }
});

document.getElementById("remove-element-btn").addEventListener("click", () => {
  const dynamicDiv = document.querySelector(".dynamic-box");
  if (dynamicDiv) {
    dynamicDiv.remove();
  }
});
