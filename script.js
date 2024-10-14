document.getElementById("flightForm").addEventListener("submit", function(event) {
    event.preventDefault(); // takistab vormi vaikimisi tegevust (lehe uuendamist)

    // Saab valitud lennu hinna ja reisijate arvu
    const flightPrice = parseFloat(document.getElementById("flight").value);
    const passengers = parseInt(document.getElementById("passengers").value);

    // Arvutab koguhinna
    const totalPrice = flightPrice * passengers;

    // Kuvab tulemuse kasutajale
    document.getElementById("result").innerText = `Kokku: €${totalPrice.toFixed(2)} (${passengers} reisijat)`;
});
