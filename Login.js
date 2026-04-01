function updateDetails() {
    const name = document.getElementById("nameInput").value;
    const program = document.getElementById("programInput").value;
    const duration = document.getElementById("durationInput").value;

    if (name) {
        document.querySelector(".name-section h3").innerText = name;
    }

    if (program) {
        document.querySelector(".details p:nth-child(1)").innerHTML =
            "<strong>Program:</strong> " + program;
    }

    if (duration) {
        document.querySelector(".details p:nth-child(3)").innerHTML =
            "<strong>Duration:</strong> " + duration;
    }
}

function loadPhoto(event) {
    const image = document.querySelector(".photo-section img");
    image.src = URL.createObjectURL(event.target.files[0]);
}

function generateID() {
    let id = Math.floor(10000000 + Math.random() * 90000000);

    document.querySelector(".barcode span").innerText = id;
    document.querySelector(".card-footer strong").innerText = id;
}
