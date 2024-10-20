// JavaScript to handle modal display on form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consultForm");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeBtn");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Show the modal
        modal.style.display = "flex";

        // Simulate sending process (for example, wait for 3 seconds)
        setTimeout(() => {
            // You can do actual form submission here, or show a success message
            alert("Message sent successfully!");
            modal.style.display = "none"; // Hide the modal after sending
        }, 3000); // 3 seconds delay
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});
