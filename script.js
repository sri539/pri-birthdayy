function lumos() {

    document.getElementById("magic").innerHTML =
    "✨ A magical birthday wish has appeared! Happy Birthday Priyu! 🎂❤️";

}

function letter() {

    document.getElementById("hogwarts").innerHTML =

    `Dear Priyanjana,

    We are pleased to inform you that you have been accepted
    into Hogwarts School of Witchcraft and Wizardry.

    House Points Awarded: +100 🎉

    May your birthday be full of magic,
    happiness and unforgettable memories.

    Happy Birthday! ❤️`;
}

let birthday = new Date("June 14, 2026 00:00:00").getTime();

let timer = setInterval(function () {

    let now = new Date().getTime();

    let distance = birthday - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
    "🎂 Birthday Countdown: " + days + " days";

}, 1000);

function playSong() {
    document.getElementById("birthdaySong").play();
}

function sortHouse() {

    let houses = [
        "🦁 Gryffindor",
        "🦅 Ravenclaw",
        "🐍 Slytherin",
        "🦡 Hufflepuff"
    ];

    let random =
        houses[Math.floor(Math.random() * houses.length)];

    document.getElementById("house").innerHTML =
    "The Sorting Hat chooses: " + random;
}

alert("🎉 Happy Birthday Priyu! 🎉");