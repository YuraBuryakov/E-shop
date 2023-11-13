document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const contactModal = document.getElementById("contactModal");
    const closeButton = document.getElementById("closeButton");

    // Открывать модальное окно при клике на кнопку Contacts
    contactButton.addEventListener("click", function() {
        contactModal.style.display = "block";
    });

    // Закрывать модальное окно при клике на кнопку закрытия (крестик)
    closeButton.addEventListener("click", function() {
        contactModal.style.display = "none";
    });

    // Закрывать модальное окно при клике вне модального окна
    window.addEventListener("click", function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});
// Path: Desktop/WebDesigne/E-shop-main/WEBUniv/contacs.js
