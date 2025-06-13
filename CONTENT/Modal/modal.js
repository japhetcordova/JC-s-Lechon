// Get modal elements
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

// Get all modal sections
const modalSections = {
    modal1: document.getElementById("modal1"),
    modal2: document.getElementById("modal2"),
    modal3: document.getElementById("modal3")
};

// Get buttons
document.getElementById("button1").onclick = () => openModal("modal1");
document.getElementById("button2").onclick = () => openModal("modal2");
document.getElementById("button3").onclick = () => openModal("modal3");

// Function to open modal with specific section
function openModal(sectionId) {
    // Hide all sections first
    for (let key in modalSections) {
        modalSections[key].style.display = "none";
    }
    // Show the correct one
    modalSections[sectionId].style.display = "block";

    // Show modal
    modal.style.display = "block";
}

// Close the modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close modal when clicking outside of modal-content
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
