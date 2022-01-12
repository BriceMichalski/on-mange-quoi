const food_list = [
    "kebab",
    "tacos",
    "burger",
    "poutine",
    "sushi",
    "pad thai",
    "pizza",
    "salade ... mais pas ouf"
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function choose(){
    const shuffledArray = shuffle(food_list)
    const choice = shuffledArray[0]
    document.getElementById("choice").innerHTML = capitalizeFirstLetter(choice);
}

choose()