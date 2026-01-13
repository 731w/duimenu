const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

let current = 0;

function updateUI() {
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    tabs[current].classList.add("active");
    pages[current].classList.add("active");
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") {
        current = (current + 1) % tabs.length;
        updateUI();
    }

    if (e.key === "ArrowUp") {
        current = (current - 1 + tabs.length) % tabs.length;
        updateUI();
    }

    if (e.key === "Enter") {
        console.log("Selected:", tabs[current].innerText);
    }

    if (e.key === "Backspace") {
        console.log("Back");
    }
});
