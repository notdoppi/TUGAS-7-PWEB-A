const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah reload

    // tampilkan pesan sukses
    successMsg.classList.remove("hidden");

    // reset form
    form.reset();
});
