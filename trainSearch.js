document.addEventListener("DOMContentLoaded", () => {
    const coachButtons = document.querySelectorAll(".coachBtn");
    const bookBtn = document.getElementById("bookBtn");

    coachButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove selected class from all buttons
            coachButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add selected class to clicked button
            button.classList.add("selected");

            // Enable Book Now button
            bookBtn.classList.add("active");
            bookBtn.disabled = false;
        });
    });
});

// Dummy coach data
const coaches = [
    { name: "SL", price: 500, seats: 30 },
    { name: "3A", price: 1200, seats: 15 },
    { name: "3E", price: 1000, seats: 10 },
    { name: "2A", price: 1800, seats: 5 },
    { name: "1A", price: 2500, seats: 2 },
];

let selectedCoach = null;

function renderCoaches() {
    const coachesList = document.getElementById("coachesList");
    coachesList.innerHTML = ""; // Clear previous content

    coaches.forEach((coach, index) => {
        const coachDiv = document.createElement("div");
        coachDiv.classList.add("coach-card");
        coachDiv.innerHTML = `
            <div class="coach-name">${coach.name}</div>
            <div class="coach-price">₹${coach.price}</div>
            <div class="coach-seats">${coach.seats} Seats Available</div>
        `;
        
        // Click event to select coach
        coachDiv.addEventListener("click", () => {
            document.querySelectorAll(".coach-card").forEach(el => el.classList.remove("selected"));
            coachDiv.classList.add("selected");
            selectedCoach = index;
            document.getElementById("bookBtn").disabled = false; // Enable Book Now
        });

        coachesList.appendChild(coachDiv);
    });
}

// Function to update price & seats dynamically
function updateCoaches() {
    coaches.forEach(coach => {
        coach.price += Math.floor(Math.random() * 200); // Random price change
        coach.seats = Math.max(0, coach.seats - Math.floor(Math.random() * 3)); // Reduce seats
    });
    renderCoaches(); // Re-render UI
}

// Call render function on load
renderCoaches();

// Update every 10 sec (Simulating API call)
setInterval(updateCoaches, 10000);
