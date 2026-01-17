const targetDate = new Date(2026, 3, 10, 0, 0, 0); // 10 Kwietnia 2026

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "IT'S DONE.";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ====== GENEROWANIE MIESIĄCA ======
const calendar = document.getElementById("calendar");
const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();

// Liczba dni w bieżącym miesiącu
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

for (let d = 1; d <= daysInMonth; d++) {
    const div = document.createElement("div");
    div.classList.add("day");
    div.innerText = d;

    if (d < currentDay) {
        div.classList.add("past"); // Skreślamy przeszłość
    } else if (d === currentDay) {
        div.classList.add("today"); // To musi pulsować!
    }

    calendar.appendChild(div);
}

