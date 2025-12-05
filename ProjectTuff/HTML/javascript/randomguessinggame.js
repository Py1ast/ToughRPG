    function RandomizerGame() {
    // Randomizer 100
    const zufallsZahl = Math.floor(Math.random() * 100);
    let rate = window.prompt("Rate mal welche Zahl!");
    let ratenMalzahl = parseInt(rate);
    console.log("Answer: ", zufallsZahl)
    while (ratenMalzahl !== zufallsZahl) {

        if (zufallsZahl > ratenMalzahl) {
            rate = window.prompt("Zahl zu klein!")
        } else if (zufallsZahl < ratenMalzahl) {
            rate = window.prompt("Zahl zu Gross!")
        }
        ratenMalzahl = parseInt(rate)
    }
    window.alert("Richtig!!!")
}