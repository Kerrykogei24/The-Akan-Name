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
    const a = Math.floor((14 - month) / 12)

    const y = year - a

    const m = month + 12 * a - 2
    const d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;


    if (male.checked == true) {
        alert("You were born on " + weekDays[d] + " your Akan name is: " + maleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + daysOfTheWeek[d] + " and your Akan name is: " + maleNames[d];
    } else if (female.checked == true) {
        alert("You were born on " + daysOfTheWeek[d] + " your Akan name is: " + femaleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + daysOfTheWeek[d] + " and your Akan name is: " + femaleNames[d];
    }
}