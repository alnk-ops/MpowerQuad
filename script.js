document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // --- Photo Gallery Upload ---
    const photoUpload = document.getElementById('photo-upload');
    const photoGallery = document.getElementById('photo-gallery');

    photoUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        photoGallery.innerHTML = ''; // Clear previous photos for a simple demo

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = `Uploaded photo of ${file.name}`;
                    photoGallery.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });


    // --- Enquiry Form Submission ---
    const enquiryForm = document.getElementById('enquiry-form');
    const successMessage = document.getElementById('success-message');

    enquiryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send the form data to a server here.
        // For this demo, we'll just show the success message.

        // Show the success message
        successMessage.style.display = 'block';

        // Reset the form fields
        enquiryForm.reset();

        // Hide the success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });

});
