const addCarForm = document.getElementById("addCarForm");
const notification = document.getElementById("notification");

addCarForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;

    const data = {
        brand: brand,
        model: model
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        notification.textContent = "Duomenys sėkmingai išsaugoti!";
        addCarForm.reset();
    })
    .catch((error) => {
        console.error('Klaida:', error);
        notification.textContent = "Įvyko klaida. Bandykite dar kartą.";
    });
});
