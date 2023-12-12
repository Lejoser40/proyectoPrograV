window.onload = function(){
    let username = sessionStorage.getItem("username");
    let dni = sessionStorage.getItem("dni");
    let phoneNumber = sessionStorage.getItem("phoneNumber");
    let email = sessionStorage.getItem("email");
    let reservationDate = sessionStorage.getItem("reservationDate");
    let season = sessionStorage.getItem("season");
    let numberAdults = sessionStorage.getItem("numberAdults");
    let numberMinors = sessionStorage.getItem("numberMinors");
    let submitClass = sessionStorage.getItem("submitClass");
    let fee = sessionStorage.getItem("fee");
    let normal = sessionStorage.getItem("normal");
    let minors = sessionStorage.getItem("minors");
    let total = sessionStorage.getItem("total");

    document.getElementById("nameResult").value = username;
    document.getElementById("dniResult").value = dni;
    document.getElementById("phoneNumberResult").value = phoneNumber;
    document.getElementById("emailResult").value = email;
    document.getElementById("reservationDateResult").value = reservationDate;
    document.getElementById("seasonResult").value = season;
    document.getElementById("numAdults").value = numberAdults;
    document.getElementById("numKids").value = numberMinors;

    if (submitClass == "economic") {
        document.getElementById("economicResult").checked = true;
    } else if (submitClass == "business") {
        document.getElementById("businessResult").checked = true;
    } else if (submitClass == "firstClass") {
        document.getElementById("firstClassResult").checked = true;
    }

    document.getElementById("feeResult").value  = fee;
    document.getElementById("adultsResult").value  = normal;
    document.getElementById("minorsResult").value  = minors;
    document.getElementById("minorsResult").value  = minors;
    document.getElementById("totalResult").value  = total;
}

/*
function getSessionTarget() {
    let username = sessionStorage.getItem("username");
    let dni = sessionStorage.getItem("dni");
    let phoneNumber = sessionStorage.getItem("phoneNumber");
    let email = sessionStorage.getItem("email");
    let reservationDate = sessionStorage.getItem("reservationDate");
    let season = sessionStorage.getItem("season");
    let numberAdults = sessionStorage.getItem("numberAdults");
    let numberMinors = sessionStorage.getItem("numberMinors");
    let submitClass = sessionStorage.getItem("submitClass");
    let fee = sessionStorage.getItem("fee");
    let normal = sessionStorage.getItem("normal");
    let minors = sessionStorage.getItem("minors");
    let total = sessionStorage.getItem("total");

    document.getElementById("nameResult").value = username;
    document.getElementById("dniResult").value = dni;
    document.getElementById("phoneNumberResult").value = phoneNumber;
    document.getElementById("emailResult").value = email;
    document.getElementById("reservationDateResult").value = reservationDate;
    document.getElementById("seasonResult").value = season;
    document.getElementById("numAdults").value = numberAdults;
    document.getElementById("numKids").value = numberMinors;

    if (submitClass == "economic") {
        document.getElementById("economicResult").checked = true;
    } else if (submitClass == "business") {
        document.getElementById("businessResult").checked = true;
    } else if (submitClass == "firstClass") {
        document.getElementById("firstClassResult").checked = true;
    }

    document.getElementById("feeResult").value  = fee;
    document.getElementById("adultsResult").value  = normal;
    document.getElementById("minorsResult").value  = minors;
    document.getElementById("minorsResult").value  = minors;
    document.getElementById("totalResult").value  = total;

}*/