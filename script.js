// array of events
const events = [
    { id: 1, title: "Sky Lantern Event", date: "2024-08-15", type: "Paid", description: "An exhilarating sky lantern viewing event.", image: "lantern.png" },
    { id: 2, title: "Art Exhibition", date: "2024-08-20", type: "Free", description: "An exhibition showcasing the best contemporary art.", image: "art.png" },
    { id: 3, title: "Food Festival", date: "2024-08-22", type: "Paid", description: "A festival celebrating diverse cuisines from around the world.", image: "foodfestival.jpeg" },
    { id: 4, title: "Music Workshop", date: "2024-08-25", type: "Free", description: "A workshop for budding musicians to hone their skills.", image: "music.png" },
    { id: 5, title: "Charity Gala Event", date: "2024-08-28", type: "Free", description: "A gala event to raise funds for a charitable cause.", image: "charity.png" },
    { id: 6, title: "IT Conference", date: "2024-08-30", type: "Paid", description: "A conference featuring talks and workshops on the latest in tech.", image: "tech.png" },
    { id: 7, title: "Film Screening", date: "2024-09-02", type: "Free", description: "A screening of critically acclaimed independent films.", image: "filmscreening.png" },
    { id: 8, title: "Eclipse Concert", date: "2024-09-05", type: "Paid", description: "A music concert of a popular singer band 'Eclipse'.", image: "eclipse.png" },
    { id: 9, title: "Anime Expo", date: "2024-09-10", type: "Paid", description: "An Expo featuring popular anime shows and characters.", image: "anime.jpeg" }
];

// Get references to the filter form elements
const searchInput = document.getElementById('search');
const eventTypeSelect = document.getElementById('event-type');
const dateInput = document.getElementById('date');
const filterForm = document.getElementById('filterForm');
const eventsGrid = document.getElementById('eventsGrid');

// Function to display events based on the filtered array
function displayEvents(filteredEvents) {
    eventsGrid.innerHTML = ""; // Clear existing events
    filteredEvents.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-info">
                <h3>${event.title}</h3>
                <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
                <p>Type: ${event.type}</p>
                            ${event.price ? `<p>Price: ${event.price}</p>` : ''}

                <a href="event-detail.html?id=${event.id}" class="btn view-details-btn">View Details</a>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

// Function to apply filters
function applyFilters() {
    const searchValue = searchInput.value.toLowerCase();
    const eventTypeValue = eventTypeSelect.value.toLowerCase();
    const dateValue = dateInput.value;

    // Filter the events based on user input
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchValue);
        const matchesType = eventTypeValue === 'all' || event.type.toLowerCase() === eventTypeValue;
        const matchesDate = !dateValue || event.date === dateValue;

        return matchesSearch && matchesType && matchesDate;
    });

    // Display the filtered events
    displayEvents(filteredEvents);
}

// Event listener for form submission
filterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    applyFilters(); // Apply the filters and update the event grid
});

// Initial display of all events
displayEvents(events);
// Get the modal
const modal = document.getElementById("bookingModal");


// Get the modal and button elements
const bookingModal = document.getElementById('bookingModal');
const bookSeatsBtn = document.getElementById('bookSeatsBtn');
const closeModal = document.getElementById('closeModal');

// Show the modal when 'Book Your Seats' button is clicked
bookSeatsBtn.addEventListener('click', () => {
    // Set a placeholder for the event name input
    const eventNameInput = document.getElementById('event');
    eventNameInput.value = ""; // Clear any existing value
    eventNameInput.placeholder = "Event name"; // Set placeholder text

    // Display the modal
    bookingModal.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    bookingModal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == bookingModal) {
        bookingModal.style.display = 'none';
    }
});

// Booking form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const seats = document.getElementById("seats").value;
    const eventName = document.getElementById("event").value || "Event name"; // Get the event name or use placeholder
//display alert showing booking details
    alert(`Booking successful! Event: ${eventName}, Name: ${name}, Contact: ${contact}, Seats: ${seats}`);
});
