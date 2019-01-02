window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    //registrer klik på menu knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");

    let erSkjult =
        document.querySelector("#menu").classList.toggle("hidden");

    if (erSkjult == true) {
        //menu er nu skjult - ændr menuknap til III
        document.querySelector("#menuknap").textContent = "☰";

    } else {
        //menu er nu vist - ændr menuknap til X
        document.querySelector("#menuknap").textContent = "✗";
    }
}
