// const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// function checkName() {
//     const day = parseInt(document.getElementById("date").value);
//     const month = parseInt(document.getElementById("month").value);
//     const year = parseInt(document.getElementById("year").value);
//     const male = document.getElementById("male");
//     const female = document.getElementById("female");



//     if (day <= 0 || day > 31) {
//         alert("Incorect date. please enter a correct one");
//     } else if (month <= 0 || month > 12 || (month == 2 && day > 29)) {
//         alert("Wacha ujinga.. is that a month!!?")

//     };
//     const a = Math.floor((14 - month) / 12)

//     const y = year - a

//     const m = month + 12 * a - 2
//     const d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;


//     if (male.checked == true) {
//         ("You were born on " + weekDays[d] + " your Akan name is: " + maleNames[d]);
//         document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + maleNames[d];
//     } else if (female.checked == true) {
//         ("You were born on " + weekDays[d] + " your Akan name is: " + femaleNames[d]);
//         document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + femaleNames[d];
//     }



function checkName() {
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    const find = new Date();
    find.setFullYear(parseInt(year));
    find.setMonth(parseInt(month) - 1);
    find.setDate(parseInt(date) - 1);

    const findDay = find.getDay();

    if (findDay === 0) {
        ("born on Sunday. click ok to see Akan name");
    } else if (findDay === 1) {
        ("born on Monday. click ok to see Akan name");
    } else if (findDay === 2) {
        ("born on Tuesday. click ok to see Akan name");
    } else if (findDay === 3) {
        ("born on Wednesday. click ok to see Akan name");
    } else if (findDay === 4) {
        ("born on Thursday. click ok to see Akan name");
    } else if (findDay === 5) {
        ("born on Friday. click ok to see Akan name");
    } else if (findDay === 6) {
        ("born on Saturday. click ok to see Akan name");
    }


    if (year < 1 || year > 2300) {
        alert("please enter valid year e.g 2020");
    } else if (month < 1 || month > 12) {
        alert("please enter valid month e.g 12");
    } else if (date < 1 || date > 31) {
        alert("please enter a valid date");
    } else if (document.getElementById("male").checked == true && document.getElementById("female").checked == false) {
        alert("Your Akan name is " + maleNames[findDay]);

    } else if (document.getElementById("female").checked == true && document.getElementById("male").checked == false) {
        alert("Your Akan name is " + femaleNames[findDay]);
    }
}