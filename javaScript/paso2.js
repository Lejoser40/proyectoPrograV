let loginForm = document.getElementById("reservationForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var username = document.getElementById("name").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var destination = document.getElementById("destination").value;
    var numberTickets = document.getElementById("quantity").value;
    var numberofKids = document.getElementById("kids").value;
    var submitClass = getSubmitClass();
    var reservationDate = new Date(document.getElementById("reservationDate").value);

    var month = reservationDate.getMonth() + 1;
    var normal = numberTickets - numberofKids;
    var minors = numberofKids;

    var numberAdults = normal;
    var numberMinors = minors;

    var fee = getFee(destination);
    var feePlus = getFeePlus(month, fee);
    var classPlus = getClassPlus(submitClass, fee);
    var season = getSeason(month);

    normal = normal * (fee + feePlus + classPlus);
    minors = minors * (fee + feePlus + classPlus)
    minors = minors * 0.40;

    let total = normal + minors;

    setSessionTarget(username, dni, phoneNumber, email, reservationDate, season, numberAdults, numberMinors, submitClass, fee, normal, minors, total);

    window.location.href = "/Reservacion/paso3.html";
});

/*
function adsadas() {
    var username = document.getElementById("name").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var destination = document.getElementById("destination").value;
    var numberTickets = document.getElementById("quantity").value;
    var numberofKids = document.getElementById("kids").value;
    var submitClass = getSubmitClass();
    var reservationDate = new Date(document.getElementById("reservationDate").value);

    var month = reservationDate.getMonth();
    var normal = numberTickets - numberofKids;
    var minors = numberofKids;

    var numberAdults = normal;
    var numberMinors = minors;

    var fee = getFee(destination);
    var feePlus = getFeePlus(month, fee);
    var classPlus = getClassPlus(submitClass, fee);
    var season = getSeason(month);

    normal = normal * (fee + feePlus + classPlus);
    minors = minors * (fee + feePlus + classPlus)
    minors = minors * 0.40;

    let total = normal + minors;

    setSessionTarget(username, dni, phoneNumber, email, reservationDate, season, numberAdults, numberMinors, submitClass, fee, normal, minors, total);

    window.location.href = "/Reservacion/paso3.html";
}*/


function setSessionTarget(username, dni, phoneNumber, email, reservationDate, season, numberAdults, numberMinors, submitClass, fee, normal, minors, total) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("dni", dni);
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("reservationDate", reservationDate);
    sessionStorage.setItem("season", season);
    sessionStorage.setItem("numberAdults", numberAdults);
    sessionStorage.setItem("numberMinors", numberMinors);
    sessionStorage.setItem("submitClass", submitClass);
    sessionStorage.setItem("fee", fee);
    sessionStorage.setItem("normal", normal);
    sessionStorage.setItem("minors", minors);
    sessionStorage.setItem("total", total);

}

function getSubmitClass() {
    let result = "";

    let radioButtons = document.getElementsByName('radAnswer');
    for (let radio of radioButtons) {
        if (radio.checked) {
            result = radio.value;
        }
    }

    return result;

}

function getFee(destination) {
    let result = 0;

    if (destination == "Peru") {
        result = 500.00;
    } else if (destination == "USA") {
        result = 250.00;
    } else if (destination == "España") {
        result = 1050.00;
    } else if (destination == "Panama") {
        result = 350.00;
    } else if (destination == "Guatemala") {
        result = 450.00;
    }

    return result;
}

function getFeePlus(month, fee) {
    let result = 0;

    if (month > 1 && month < 3) {
        result = fee * 0.35;
    } else if (month == 7) {
        result = fee * 0.20;
    } else if (month == 12) {
        result = fee * 0.20;
    }

    return result;
}

function getSeason(month) {
    let result = "";

    if (month > 1 && month < 3) {
        result = "Alta";
    } else if (month == 7) {
        result = "Especial";
    } else if (month == 12) {
        result = "Especial";
    } else {
        result = "Baja";
    }

    return result;
}

function getClassPlus(clas, fee) {
    let result = 0;

    if (clas == "business") {
        result = fee * 0.20;
    } else if (clas == "firstClass") {
        result = fee * 0.45;
    }

    return result;
}