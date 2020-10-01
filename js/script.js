const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwam"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const male = document.getElementById("male");
    const female = document.getElementById("female");



    if (day <= 0 || day > 31) {
        alert("Incorect date. please enter a correct one")
    } else if (month <= 0 || month > 12 || (month == 2 && day > 29)) {
        alert("Wacha ujinga.. is that a month!!?")
    };
}