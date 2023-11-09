console.log("Første Oppgave JavaScript")

//Oppgave 1
let gamesArray = ["hk", "hzd", "control", "ori", "ghost", "ac", "reignited", "hades", "cooper", "gris"];
console.log(gamesArray)

gamesArray.pop()
console.log(gamesArray)

gamesArray.push("stardew")
console.log(gamesArray)

gamesArray.splice(2, 1);
console.log(`control ble slicet bort: ${gamesArray}`);

gamesArray.splice(5, 1);
console.log(`hades ble slicet bort: ${gamesArray}`);


//Oppgave 1.1
console.log(`Dette er index 5: ${gamesArray[5]}`);


//Oppgave 2
const discordStaff = [
    {
        name: "jonny",
        role: "artDirector",
        hobbies: ["drawing", "gaming", "music"]
    },
    {   name: "raegnorwi",
        role: "moderator",
        hobbies: ["drawing", "painting", "lotr"]
    },
    {   name: "grub",
        role: "administrator",
        hobbies: ["drawing", "gaming", "lotr"]
    },
];
console.log(discordStaff[0]);
console.log(discordStaff[1]);
console.log(discordStaff[2]);


//Oppgave 3
let x = 500;
if (x >= 500);{
}

let totalSum = 500
totalSum >= 500 ? console.log("Du får gratis frakt") : console.log("Du må betale frakt")

let bonusGrense = 500
bonusGrense >= 500 ? console.log("Du har tjent 100 bonuspoeng") : console.log("Du har tjent 50 bonuspoeng")


//Oppgave 4
function givePotion() {
    const potions = [
        "Healing",
        "Invisibility",
        "Fly",
        "Strength",       
    ];
    const randomIndex = Math.round(Math.random() * (potions.length - 1))
    const potion = potions[randomIndex]
    return potion
}
console.log(givePotion())