// Display dynamic welcome message based on the time of day
const displayWelcomeMessage = () => {
  const now = new Date();
  const hours = now.getHours();
  let message = "";

  if (hours >= 5 && hours < 12) {
    message = "Good Morning! Ready for an eco-adventure?";
  } else if (hours >= 12 && hours < 18) {
    message = "Good Afternoon! Plan your next green getaway!";
  } else {
    message = "Good Evening! Explore our sustainable travel options!";
  }

  // Display the message in the "welcome-message" div
  const welcomeMessageDiv = document.getElementById("welcome-message");
  welcomeMessageDiv.textContent = message;
};

// Call the function when the page loads
window.onload = displayWelcomeMessage;

// Fade in effects for nav bar and display content into main div
document.addEventListener("DOMContentLoaded", () => {
  function updateContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.display = "none";
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = "block"; // Show the section
      setTimeout(() => {
        selectedSection.style.opacity = 1; // Fade-in effect
      }, 10);
    }
  }

  // Show the home content by default
  updateContent("home-content");

  // Map update and highlighting table
  // Add event listeners to each link
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    updateContent("home-content");
  });
  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    updateContent("about-content");
  });
  document.getElementById("destinations-link").addEventListener("click", (e) => {
    e.preventDefault();
    updateContent("destinations-content");
  });
  document.getElementById("contact-link").addEventListener("click", (e) => {
    e.preventDefault();
    updateContent("contact-content");
  });
});

// Map URLs for each destination
const mapUrls = {
  "Amazon Rainforest":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.093072796792!2d-62.2353643806366!3d-34653050001254253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sca!4v1730688015200!5m2!1sen!2sca",
  "Costa Rica":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126902.15128310278!2d-84.24863082212657!3d9.748916959728835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e40951b95c43%3A0x8c2b49e9c0077a48!2sCosta%20Rica!5e0!3m2!1sen!2sus!4v1607188762893!5m2!1sen!2sus",
  "Iceland Wilderness":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736913.1532675775!2d-21.884705533745308!3d64.84090483384252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2sIceland!5e0!3m2!1sen!2sca!4v1730688144843!5m2!1sen!2sca",
  "Thailand Eco-Tour":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962192.883155567!2d96.19834568453714!3d12.98531168237988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sca!4v1730688103341!5m2!1sen!2sca",
  "Galapagos Adventure":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042781.287411029!2d-91.94435999121492!3d0.13526383694881833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aaa92ee319f2cbf%3A0x95bebc63839846f2!2sGal%C3%A1pagos%20Islands%2C%20Ecuador!5e0!3m2!1sen!2sca!4v1730688248246!5m2!1sen!2sca",
};

// Select all the buttons
const highlightButtons = document.querySelectorAll(".highlight-btn");

// Things to do once the button inside the destinations are pressed:
highlightButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the destination from the data attribute
    const destination = this.getAttribute("data-destination");

    // Select all rows in the travel packages table
    const rows = document.querySelectorAll("#travel-packages tr");

    // Remove the highlight from all rows first
    rows.forEach((row) => {
      row.classList.remove("highlighted");
    });

    // Highlights destination using cells[0], which is td[0], which would be the name of the travel destination in the table.
    rows.forEach((row) => { // iterates through "row" which is tr elements inside #travel-packages
      const cells = row.getElementsByTagName("td");
      if (cells.length > 0 && cells[0].textContent === destination) {
        row.classList.add("highlighted");
      }
    });

    // Change the map URL based on the selected destination
    document.getElementById("destination-map").src = mapUrls[destination];

    // Scroll to the table/map
    window.scrollTo({
      top: 250,
      behavior: "smooth", // Adds a smooth scroll effect
    });
  });
});

// Select the form and submit message elements
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("submit-success");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function (event) {
  // No actual submit feature yet!
  event.preventDefault();

  // Display the success message
  successMessage.style.display = "block";
});
