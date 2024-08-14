// Wait until the entire document is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get the HTML element where event details will be displayed
    const eventDetail = document.getElementById("eventDetail");

    // Get the URL parameters to find out which event is being requested
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id')); // Extract the event ID from the URL

    // A list of events with their details (like title, date, type, etc.)
    const events = [
        {
            id: 1,
            title: "Sky Lantern Event", 
            date: "2024-08-15", 
            type: "Paid", 
            description: "An exhilarating sky lantern viewing event.", 
            image: "lantern.png" ,
            price:"Rs.1000"
        },
        {
            id: 2,
            title: "Art Exhibition",
            date: "2024-08-20",
            type: "Free",
            description: "An exhibition showcasing the best contemporary art.",
            image: "art.png"
        },
        {
            id: 3,
            title: "Food Festival",
            date: "2024-08-22",
            type: "Paid",
            description: "A festival celebrating diverse cuisines from around the world.",
            image: "foodfestival.jpeg",
            price:"Rs.1000"

        },
        {
            id: 4,
            title: "Music Workshop",
            date: "2024-08-25",
            type: "Free",
            description: "A workshop for budding musicians to hone their skills.",
            image: "music.png"
        },
        {
            id: 5,
            title: "Charity Gala Event",
            date: "2024-08-28",
            type: "Free",
            description: "A gala event to raise funds for a charitable cause.",
            image: "charity.png"
        },
        {
            id: 6,
            title: "IT Conference",
            date: "2024-08-30",
            type: "Paid",
            description: "A conference featuring talks and workshops on the latest in tech.",
            image: "tech.png",
           price:"Rs.1000"

        },
        {
            id: 7,
            title: "Film Screening",
            date: "2024-09-02",
            type: "Free",
            description: "A screening of critically acclaimed independent films.",
            image: "filmscreening.png"
        },
        {
            id: 8,
            title: "Eclipse Concert",
            date: "2024-09-05",
            type: "Paid",
            description: "A music concert of a popular singer band 'Eclipse'.",
            image: "eclipse.png",
            price:"Rs.1000"

        },
        {
            id: 9,
            title: "Anime Expo",
            date: "2024-09-10",
            type: "Paid",
            description: "An Expo featuring popular anime shows and characters.",
            image: "anime.jpeg",
            price:"Rs.1000"

        }
    ];

    // Find the event that matches the ID from the URL
    const event = events.find(e => e.id === eventId);

    // If the event exists, display its details
    if (event) {
        eventDetail.innerHTML = `
            <h1>${event.title}</h1>
            <img src="${event.image}" alt="${event.title}">
            <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
            <p>Type: ${event.type}</p>
            <p>Description: ${event.description}</p>
            ${event.price ? `<p>Price: ${event.price}</p>` : ''}
        `;
    } else {
        // If no event matches the ID, show a "not found" message
        eventDetail.innerHTML = "<p>Event not found.</p>";
    }
});
