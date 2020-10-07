const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function checkName() {
    const day = parseInt(document.getElementById("date").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const male = document.getElementById("male");
    const female = document.getElementById("female");



    if (year <= 1 || year >= 2300 || year.length !== 4) {
        alert("Enter valid year");

    } else if (month <= 1 || month >= 12 || month.length !== month) {
        alert("Please enter a valid year");

    } else if (day <= 1 || day >= 31 || day.length !== day) {
        alert("Incorect date. please enter a correct one");
    } else if (year !== year) {
        alert("Please fill the form");
    }


    const a = Math.floor((14 - month) / 12)

    const y = year - a

    const m = month + 12 * a - 2
    const d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;


    if (male.checked == true) {
        ("You were born on " + weekDays[d] + " your Akan name is: " + maleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + maleNames[d];
    } else if (female.checked == true) {
        ("You were born on " + weekDays[d] + " your Akan name is: " + femaleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + femaleNames[d];
    }

}